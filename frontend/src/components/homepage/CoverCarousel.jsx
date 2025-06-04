// src/components/homepage/CoverCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Typography } from "@mui/material";

// כתובות התמונות (ממוקמות ישירות בתיקיית public)
const coverImages = ["/spa1.png", "/spa2.png", "/yoga1.jpg"];
// טקסטים לאנימציית ה־typing (RTL): עיסוי ויוגה
const overlayTexts = ["עיסוי מרגיע", "חווית יוגה"];

const CoverCarousel = ({ interval = 5000 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  // STATES עבור אנימציית הטקסט (typing)
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ref בשביל לאגור timeout ולהשמיד כשמתנתקים
  const typingTimeoutRef = useRef(null);
  const carouselIntervalRef = useRef(null);

  // אפקט לסלייד של תמונות (interval צבעי Fade)
  useEffect(() => {
    if (coverImages.length < 2) return;

    // כל חמש שניות עוברים תמונה
    carouselIntervalRef.current = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % coverImages.length);
        setShowImage(true);
      }, 600); // fade-out + fade-in
    }, interval);

    return () => {
      clearInterval(carouselIntervalRef.current);
    };
  }, [interval]);

  // אפקט typing/delete לטקסט עם קצב נעים יותר
  useEffect(() => {
    // ניקוי timeout קודם (אם קיים), לפני הגדרה של חדש
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    const currentText = overlayTexts[textIndex % overlayTexts.length];

    // משתנים לגמישות הקצב
    const typingSpeed = 130; // זמן בין תו לתו בהקלדה (ms)
    const deletingSpeed = 60; // זמן בין תו לתו במחיקה (ms)
    const pauseAfterWrite = 2500; // השהייה קצרה בסיום הכתיבה (ms)
    const pauseAfterDelete = 400; // השהייה קצרה בסיום המחיקה (ms)

    if (!isDeleting && displayedText.length < currentText.length) {
      // אם עדיין לא סיימנו להקליד את כל הטקסט -> מוסיפים עוד תו
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // אם סיימנו להקליד את הטקסט: חכה לפאוז קצר, ואז נתחיל למחוק
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterWrite);
    } else if (isDeleting && displayedText.length > 0) {
      // אם בעיצומו של תהליך מחיקה -> מוחקים תו
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // אם סיימנו למחוק לחלוטין -> חכה מעט, ואז עבור לטקסט הבא ונתחיל להקליד
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }, pauseAfterDelete);
    }

    return () => {
      clearTimeout(typingTimeoutRef.current);
    };
  }, [displayedText, isDeleting, textIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "250px", md: "500px" },
        overflow: "hidden",
      }}
    >
      {coverImages.map((url, idx) => (
        <Fade
          key={idx}
          in={idx === imageIndex && showImage}
          timeout={{ enter: 600, exit: 600 }}
        >
          <Box
            component="img"
            src={url}
            alt={`Slide ${idx + 1}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>
      ))}

      {/* overlay כהה למען קריאות הטקסט */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        }}
      />

      {/* אנימציית הטקסט בצבע Lavender Mist (#D4C4E2), מודגש וזורם */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          color: "#D4C4E2",
          textAlign: "right",
          direction: "rtl",
          pr: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 900, // מודגש מאוד
            fontSize: { xs: "1.5rem", md: "3rem" },
            minHeight: { xs: "2rem", md: "4rem" },
            lineHeight: 1.1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            whiteSpace: "nowrap", // למנוע קו שבירה
          }}
        >
          {displayedText}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "2px",
              backgroundColor: "#D4C4E2",
              marginLeft: "5px",
              animation: "blink 1s steps(2, start) infinite",
            }}
          />
        </Typography>
      </Box>

      {/* keyframes ל־cursor מהבהב */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default CoverCarousel;
