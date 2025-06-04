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
        <CoverCarousel interval={5000} />
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
            ברוכים הבאים ל־Halo Massage &amp; Yoga
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
          {/* קופסת מסאז' */}
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
              מסאז'ים
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
              מגוון טיפולי מסאז’ מרגיעים ומשקמים את הגוף והנפש.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontFamily: "Arial, sans-serif",
              }}
            >
              רשימת טיפולי מסאז'
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

      {/* SECTION עיסויים */}
      <Box sx={{ backgroundColor: "#111", px: { xs: 2, md: "58px" }, py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "right",
            direction: "rtl",
          }}
        >
          טיפולי עיסוי
        </Typography>
        {[
          {
            title: "עיסוי תאילנדי",
            desc: "שחרור מתחים וחידוש אנרגיה עם תנועות מתיחה ולחיצה מסורתיות.",
            img: "/thai-massage.jpg",
          },
          {
            title: "עיסוי רקמות עמוק",
            desc: "טיפול אינטנסיבי לשחרור שרירים תפוסים, מעמיק ומרפא.",
            img: "/deep-tissue.jpg",
          },
          {
            title: "עיסוי משולב",
            desc: "שילוב טכניקות מותאם אישית לצרכים הפיזיים והנפשיים שלך.",
            img: "/thai-massage.jpg",
          },
          {
            title: "עיסוי אקוספורה רפואית",
            desc: "טיפול רפואי חדשני המבוסס על גישה הוליסטית ומשקמת.",
            img: "/thai-massage.jpg",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              mb: 6,
              gap: 3,
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: { xs: "100%", md: "300px" },
                height: "200px",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: "right",
                  direction: "rtl",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "right", direction: "rtl" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* SECTION יוגה */}
      <Box sx={{ backgroundColor: "#000", px: { xs: 2, md: "58px" }, py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "right",
            direction: "rtl",
          }}
        >
          שיעורי יוגה
        </Typography>
        {[
          {
            title: "יוגה קלאסית",
            desc: "תרגול יסודות היוגה באיזון גוף ונשימה.",
            img: "/yoga-basic.jpg",
          },
          {
            title: "האטה יוגה",
            desc: "תרגול איטי ומדויק לאיזון פיזי ומנטלי.",
            img: "/yoga-hatha.jpg",
          },
          {
            title: "ויניאסה",
            desc: "תנועה זורמת בין תנוחות בקצב הנשימה.",
            img: "/thai-massage.jpg",
          },
          {
            title: "אשטנגה",
            desc: "סדרה קבועה של תנוחות מאתגרות ואנרגטיות.",
            img: "/yoga-ashtanga.jpg",
          },
          {
            title: "יוגילאטיס",
            desc: "שילוב חכם בין יוגה, גמישות, ויציבה של פילאטיס.",
            img: "/yogilates.jpg",
          },
          {
            title: "יוגה לגיל 3+ / יוגה כיסאות",
            desc: "תרגולים מותאמים לילדים ולבני גיל הזהב עם תמיכה מלאה.",
            img: "/yoga-chair-kids.jpg",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row-reverse" : "row",
              },
              alignItems: "center",
              mb: 6,
              gap: 3,
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: { xs: "100%", md: "300px" },
                height: "200px",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: "right",
                  direction: "rtl",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "right", direction: "rtl" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
