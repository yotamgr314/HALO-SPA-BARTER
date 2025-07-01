// src/components/homepage/CoverCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const massageImages = ["/spa1.png", "/spa2.png"];
const yogaImages = ["/yoga1.jpg", "/yoga2.jpg", "/yoga4.png"];

const massageTexts = ["עיסוי תאילנדי", "עיסוי רקמות", "עיסוי משולב"];
const yogaTexts = ["יוגה מרגיעה", "יוגה ויניאסה", "יוגילאטיס"];

const CoverCarousel = ({ interval = 5000 }) => {
  const navigate = useNavigate();

  const [massageIndex, setMassageIndex] = useState(0);
  const [yogaIndex, setYogaIndex] = useState(0);

  const [massageText, setMassageText] = useState("");
  const [massageTextIdx, setMassageTextIdx] = useState(0);
  const [massageDeleting, setMassageDeleting] = useState(false);

  const [yogaText, setYogaText] = useState("");
  const [yogaTextIdx, setYogaTextIdx] = useState(0);
  const [yogaDeleting, setYogaDeleting] = useState(false);

  const massageTimeoutRef = useRef(null);
  const yogaTimeoutRef = useRef(null);

  // החלפת תמונות
  useEffect(() => {
    const massageTimer = setInterval(() => {
      setMassageIndex((prev) => (prev + 1) % massageImages.length);
    }, interval);
    const yogaTimer = setInterval(() => {
      setYogaIndex((prev) => (prev + 1) % yogaImages.length);
    }, interval);
    return () => {
      clearInterval(massageTimer);
      clearInterval(yogaTimer);
    };
  }, [interval]);

  // typing effect – massage
  useEffect(() => {
    const current = massageTexts[massageTextIdx % massageTexts.length];
    const speed = massageDeleting ? 60 : 130;
    const pauseAfterWrite = 2000;
    const pauseAfterDelete = 500;

    if (massageTimeoutRef.current) clearTimeout(massageTimeoutRef.current);

    if (!massageDeleting && massageText.length < current.length) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageText(current.substring(0, massageText.length + 1));
      }, speed);
    } else if (!massageDeleting && massageText === current) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageDeleting(true);
      }, pauseAfterWrite);
    } else if (massageDeleting && massageText.length > 0) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageText(current.substring(0, massageText.length - 1));
      }, speed);
    } else if (massageDeleting && massageText.length === 0) {
      massageTimeoutRef.current = setTimeout(() => {
        setMassageDeleting(false);
        setMassageTextIdx((prev) => prev + 1);
      }, pauseAfterDelete);
    }
  }, [massageText, massageDeleting, massageTextIdx]);

  // typing effect – yoga
  useEffect(() => {
    const current = yogaTexts[yogaTextIdx % yogaTexts.length];
    const speed = yogaDeleting ? 60 : 130;
    const pauseAfterWrite = 2000;
    const pauseAfterDelete = 500;

    if (yogaTimeoutRef.current) clearTimeout(yogaTimeoutRef.current);

    if (!yogaDeleting && yogaText.length < current.length) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaText(current.substring(0, yogaText.length + 1));
      }, speed);
    } else if (!yogaDeleting && yogaText === current) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaDeleting(true);
      }, pauseAfterWrite);
    } else if (yogaDeleting && yogaText.length > 0) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaText(current.substring(0, yogaText.length - 1));
      }, speed);
    } else if (yogaDeleting && yogaText.length === 0) {
      yogaTimeoutRef.current = setTimeout(() => {
        setYogaDeleting(false);
        setYogaTextIdx((prev) => prev + 1);
      }, pauseAfterDelete);
    }
  }, [yogaText, yogaDeleting, yogaTextIdx]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: { xs: "250px", md: "500px" },
        overflow: "hidden",
      }}
    >
      {/* Overlay Title (מרכזי על שני הצדדים) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "12%" },
          right: 0,
          left: 0,
          zIndex: 3,
          textAlign: "center",
        }}
      ></Box>

      {/* Massage Side */}
      <Box
        onClick={() => navigate("/massage")}
        sx={{ width: "50%", position: "relative", cursor: "pointer" }}
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
        {/* Overlay text & button */}
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            right: "10%",
            zIndex: 2,
            textAlign: "right",
            direction: "rtl",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#D4C4E2",
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

      {/* Yoga Side */}
      <Box
        onClick={() => navigate("/yoga")}
        sx={{ width: "50%", position: "relative", cursor: "pointer" }}
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
        {/* Overlay text & button */}
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            right: "10%",
            zIndex: 2,
            textAlign: "right",
            direction: "rtl",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#D4C4E2",
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

      {/* Blink animation */}
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
