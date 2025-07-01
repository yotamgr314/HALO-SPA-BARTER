// src/components/homepage/CoverCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const massageImages = ["/spa1.png", "/spa2.png"];
const yogaImages = ["/yoga1.jpg", "/yoga2.jpg", "/yoga4.png"];

const massageTexts = ["עיסוי תאילנדי", "עיסוי רקמות", "עיסוי משולב"];
const yogaTexts = ["יוגה מרגיעה", "יוגה ויניאסה", "יוגילאטיס"];

const CoverCarousel = ({ interval = 5000 }) => {
  const navigate = useNavigate();

  // Massage state
  const [massageIndex, setMassageIndex] = useState(0);
  const [massageText, setMassageText] = useState("");
  const [massageTextIdx, setMassageTextIdx] = useState(0);
  const [massageDeleting, setMassageDeleting] = useState(false);

  // Yoga state
  const [yogaIndex, setYogaIndex] = useState(0);
  const [yogaText, setYogaText] = useState("");
  const [yogaTextIdx, setYogaTextIdx] = useState(0);
  const [yogaDeleting, setYogaDeleting] = useState(false);

  const massageTimeoutRef = useRef(null);
  const yogaTimeoutRef = useRef(null);

  // Slide image change
  useEffect(() => {
    const massageInterval = setInterval(() => {
      setMassageIndex((prev) => (prev + 1) % massageImages.length);
    }, interval);
    const yogaInterval = setInterval(() => {
      setYogaIndex((prev) => (prev + 1) % yogaImages.length);
    }, interval);

    return () => {
      clearInterval(massageInterval);
      clearInterval(yogaInterval);
    };
  }, [interval]);

  // Typing effect for massage
  useEffect(() => {
    const current = massageTexts[massageTextIdx % massageTexts.length];
    const speed = massageDeleting ? 60 : 130;
    const delayAfterWrite = 2000;
    const delayAfterDelete = 500;

    if (massageTimeoutRef.current) clearTimeout(massageTimeoutRef.current);

    if (!massageDeleting && massageText.length < current.length) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageText(current.substring(0, massageText.length + 1));
      }, speed);
    } else if (!massageDeleting && massageText === current) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageDeleting(true);
      }, delayAfterWrite);
    } else if (massageDeleting && massageText.length > 0) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageText(current.substring(0, massageText.length - 1));
      }, speed);
    } else if (massageDeleting && massageText.length === 0) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageDeleting(false);
        setMassageTextIdx((prev) => prev + 1);
      }, delayAfterDelete);
    }

    return () => clearTimeout(massageTimeoutRef.current);
  }, [massageText, massageDeleting, massageTextIdx]);

  // Typing effect for yoga
  useEffect(() => {
    const current = yogaTexts[yogaTextIdx % yogaTexts.length];
    const speed = yogaDeleting ? 60 : 130;
    const delayAfterWrite = 2000;
    const delayAfterDelete = 500;

    if (yogaTimeoutRef.current) clearTimeout(yogaTimeoutRef.current);

    if (!yogaDeleting && yogaText.length < current.length) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaText(current.substring(0, yogaText.length + 1));
      }, speed);
    } else if (!yogaDeleting && yogaText === current) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaDeleting(true);
      }, delayAfterWrite);
    } else if (yogaDeleting && yogaText.length > 0) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaText(current.substring(0, yogaText.length - 1));
      }, speed);
    } else if (yogaDeleting && yogaText.length === 0) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaDeleting(false);
        setYogaTextIdx((prev) => prev + 1);
      }, delayAfterDelete);
    }

    return () => clearTimeout(yogaTimeoutRef.current);
  }, [yogaText, yogaDeleting, yogaTextIdx]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "250px", md: "500px" },
        overflow: "hidden",
      }}
    >
      {/* Massage Half */}
      <Box
        onClick={() => navigate("/massage")}
        sx={{
          position: "relative",
          width: "50%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Fade in timeout={600}>
          <Box
            component="img"
            src={massageImages[massageIndex]}
            alt="massage"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            color: "#D4C4E2",
            textAlign: "right",
            direction: "rtl",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            {massageText}
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
      </Box>

      {/* Yoga Half */}
      <Box
        onClick={() => navigate("/yoga")}
        sx={{
          position: "relative",
          width: "50%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Fade in timeout={600}>
          <Box
            component="img"
            src={yogaImages[yogaIndex]}
            alt="yoga"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            color: "#D4C4E2",
            textAlign: "right",
            direction: "rtl",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            {yogaText}
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
      </Box>

      {/* CSS for blinking cursor */}
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
