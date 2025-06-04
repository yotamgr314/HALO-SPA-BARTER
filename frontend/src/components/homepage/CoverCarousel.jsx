import React, { useState, useEffect } from "react";
import { Box, Fade, Typography } from "@mui/material";

// כתובות התמונות (ממוקמות ישירות בתיקיית public)
const coverImages = ["/spa1.png", "/spa2.png", "/yoga1.png"];
// טקסטים לאנימציית ה־typing (RTL)
const overlayTexts = ["עיסוי מרגיע", "חווית יוגה", "הרגע והתחבר"];

const CoverCarousel = ({ interval = 5000 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  // STATES עבור אנימציית הטקסט (typing)
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // אפקט לסלייד של תמונות (5 שניות)
  useEffect(() => {
    if (coverImages.length < 2) return;

    const carouselInterval = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % coverImages.length);
        setShowImage(true);
      }, 500); // fade-out
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [interval]);

  // אפקט typing/delete לטקסט
  useEffect(() => {
    const currentText = overlayTexts[textIndex % overlayTexts.length];
    const delta = isDeleting ? 100 : 200;

    const typingTimeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, delta);

    return () => clearTimeout(typingTimeout);
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
          timeout={{ enter: 500, exit: 500 }}
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
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
        }}
      />

      {/* אנימציית הטקסט – גוון Soft Sand Beige (#EDE6DB) */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          color: "#EDE6DB",
          textAlign: "right",
          direction: "rtl",
          pr: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "3rem" },
            minHeight: { xs: "2rem", md: "4rem" },
          }}
        >
          {displayedText}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "2px",
              backgroundColor: "#EDE6DB",
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
