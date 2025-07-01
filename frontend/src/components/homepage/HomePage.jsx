// src/components/homepage/HomePage.jsx

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../shared/navbar";
import CoverCarousel from "./CoverCarousel";

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{ backgroundColor: "#F4F2EA", color: "#333", overflowX: "hidden" }}
    >
      {/* ============================================================================= */}
      {/* 1. NAVBAR + COVER CAROUSEL */}
      {/* ============================================================================= */}
      <Box
        sx={{ position: "relative", width: "100%", backgroundColor: "#000" }}
      >
        <Navbar />
        <CoverCarousel interval={5000} />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "8%", md: "18%" },
            right: { xs: "5%", md: "10%" },
            color: "#fff",
            textAlign: "right",
            direction: "rtl",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 22,
              mx: -20,
              fontSize: { xs: "1.5rem", md: "3rem" },
              fontFamily: "Arial, sans-serif",
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            ברוכים הבאים Halo מסאז' & יוגה
          </Typography>
          <Button
            component="a"
            href="#about-me-section"
            sx={{
              mt: 1,
              px: 3,
              py: 1,
              backgroundColor: "rgba(255,255,255,0.85)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.95)" },
            }}
          >
            טיפולי יוגה{" "}
          </Button>
        </Box>
      </Box>

      {/* ============================================================================= */}
      {/* 2. SECTION: קצת עליי */}
      {/* ============================================================================= */}
      <Box
        id="about-me-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#fff",
          direction: "rtl",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
              color: "#6C4F3B",
            }}
          >
            קצת עליי
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
              color: "#444",
            }}
          >
            שלום! אני מטפלת מוסמכת בעיסוי ושיעורי יוגה, מתוך אהבה אמיתית לריפוי
            הגוף והנפש. במשך השנים צברתי ניסיון בטכניקות מגוונות מעולם המגע
            והתנועה, ואני שואפת להעניק לכל אחד ואחת טיפול מותאם אישית, באווירה
            רגועה ותומכת. הטיפולים והשיעורים מועברים מתוך הקשבה מלאה לגוף,
            באיזון עדין בין מגע, נשימה, ותודעה. אשמח ללוות אתכם במסע פנימי של
            ריפוי, שחרור, והתחדשות.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
