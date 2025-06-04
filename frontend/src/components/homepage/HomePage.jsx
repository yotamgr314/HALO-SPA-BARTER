// src/components/homepage/HomePage.jsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../shared/navbar";
import CoverCarousel from "./CoverCarousel";

/**
 * מערך URL של תמונות לכיסוי הראשי.
 * הנח שמיקמת את התמונות בתיקיית public/assets:
 *   public/
 *     assets/
 *       spa1.jpg
 *       yoga1.jpg
 *       spa2.jpg
 */
const coverImages = [
  "/assets/spa1.jpg", // תמונת ספא
  "/assets/yoga1.jpg", // תמונת יוגה
  "/assets/spa2.jpg", // תמונה נוספת של ספא
];

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* HERO / COVER SECTION */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Navbar />

        {/* Carousel עם תמונות */}
        <CoverCarousel images={coverImages} interval={4000} />

        {/* שכבת טקסט/כפתור על התמונה */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "10%", md: "20%" },
            left: { xs: "5%", md: "10%" },
            color: "#fff",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            SPA & YOGA EXPERIENCE
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
            href="#services"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* תפריט שירותים לדוגמה */}
      <Box
        id="services"
        sx={{
          px: { xs: 2, md: "58px" },
          py: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Our Services
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* קופסת ספא */}
          <Box
            sx={{
              backgroundColor: "#111",
              borderRadius: 2,
              p: 3,
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Spa Treatments
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Enjoy a range of massages, facials and body treatments designed to
              relax and rejuvenate you.
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              View Spa Menu
            </Button>
          </Box>

          {/* קופסת יוגה */}
          <Box
            sx={{
              backgroundColor: "#111",
              borderRadius: 2,
              p: 3,
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Yoga Classes
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join our expert-led yoga sessions suitable for all levels, from
              beginner to advanced.
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            >
              View Yoga Schedule
            </Button>
          </Box>
        </Box>
      </Box>

      {/* הוספת פוטר (אם יש קומפוננטה מתאימה) */}
      {/* <Footer /> */}
    </Box>
  );
};

export default HomePage;
