// src/components/homepage/HomePage.jsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../shared/navbar";
import CoverCarousel from "./CoverCarousel";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO / COVER SECTION */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Navbar />

        {/* Carousel עם תמונות (4 שניות) + אנימציית טקסט RTL */}
        <CoverCarousel interval={4000} />

        {/* כיתוב מתחת לסליידר */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "10%", md: "20%" },
            right: { xs: "5%", md: "10%" },
            color: "#fff",
            textAlign: "right",
            direction: "rtl",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
              fontFamily: "Arial, sans-serif",
            }}
          >
            ברוכים הבאים ל־Halo Spa &amp; Yoga
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
            href="#services"
          >
            למידע נוסף
          </Button>
        </Box>
      </Box>

      {/* תפריט שירותים */}
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
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Arial, sans-serif",
            textAlign: "right",
            direction: "rtl",
          }}
        >
          השירותים שלנו
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
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                fontFamily: "Arial, sans-serif",
                textAlign: "right",
                direction: "rtl",
              }}
            >
              טיפולי ספא
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontFamily: "Arial, sans-serif",
                textAlign: "right",
                direction: "rtl",
              }}
            >
              מגוון טיפולי עיסויים, פציאלים וטיפולים לגוף שמרגיעים ומשקמים את
              הגוף והנפש.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontFamily: "Arial, sans-serif",
              }}
            >
              רשימת טיפולי ספא
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
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                fontFamily: "Arial, sans-serif",
                textAlign: "right",
                direction: "rtl",
              }}
            >
              שיעורי יוגה
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontFamily: "Arial, sans-serif",
                textAlign: "right",
                direction: "rtl",
              }}
            >
              הצטרפו לשיעורי יוגה מודרכים לכל הרמות, ממתחילים ועד מתקדמים.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontFamily: "Arial, sans-serif",
              }}
            >
              לוח זמנים
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
