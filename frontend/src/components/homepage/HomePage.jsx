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

// רשימות הטיפולים עם תיאור ממושך ותמונות גדולות
const massageTreatments = [
  {
    name: "תאילנדי",
    image: "thai-massage.jpg",
    description:
      "טיפול תאילנדי קלאסי המשתמש בלחיצות עמוקות ומתיחות ייחודיות כדי לשחרר מתחים ולהגביר את זרימת הדם בגוף. מתמקד בנקודות לחיצה ומקדם רוגע עמוק, משפר גמישות ושחרור שרירים עמוקים.",
  },
  {
    name: "רקמות",
    image: "thai-massage.jpg",
    description:
      "עיסוי רקמות עמוק מתבצע בלחיצות איטיות וחזקות על רקמות השריר העמוקות ביותר, לשחרור קשיחות כרונית ויצירת איזון ארגוני. מומלץ במיוחד למי שסובל מכאבים ממושכים ושחרור מתחים מתחת לפני השטח.",
  },
  {
    name: "מושלב",
    image: "thai-massage.jpg",
    description:
      "טיפול מכיל שילוב של טכניקות משיטות עיסוי שונות (שוודי, תאילנדי, רקמות), מותאם אישית למצב הגוף שלך באותו היום. מאפשר חיבור בין גוף לנפש עם תמהיל מותאם לכל הצורך הטיפולי.",
  },
  {
    name: "אקוספורה רפואית",
    image: "thai-massage.jpg",
    description:
      "טיפול אקוספורה רפואית, באמצעות גרגירים דקים המונחים על נקודות לחיצה בכפות הרגליים ובגוף, משחרר חסימות אנרגטיות ועוזר בהקלה בכאבים פנימיים. מבוסס על עקרונות הרפלקסולוגיה הרפואית.",
  },
];

const yogaClasses = [
  {
    name: "האטה יוגה",
    image: "yoga-basic.jpg",
    description:
      "יוגה האטה מתמקדת בתנועות איטיות ונשימה מודעת. כל תנוחה נשארת זמן ארוך יותר כדי לאפשר חיבור עמוק לגוף ולשחרור מתחים. מומלץ למתחילים ולמחפשים איזון ומודעות פנימית.",
  },
  {
    name: "וינאסה",
    image: "yoga-basic.jpg",
    description:
      "יוגה וינאסה היא סדרה דינמית של תנוחות העוברות בקצב נשימה אחיד. חיזוק שרירים, שיפור גמישות ושקט מנטלי באווירה אנרגטית. מתאים לכל מי שמחפש תרגול זרימה מרענן ואינטנסיבי.",
  },
  {
    name: "אשטנגה",
    image: "yoga-basic.jpg",
    description:
      "שיעור אשטנגה עוקב אחרי סדרת תנוחות קבוע במתן תשומת לב לכל מעבר. מתאים למתרגלים מנוסים המעוניינים באימון קרבי ואינטנסיבי, המסייע לפתח כוח, סיבולת ושיפור איזון גוף-נפש.",
  },
  {
    name: "יוגילאטיס",
    image: "yoga-basic.jpg",
    description:
      "שיטת יוגילאטיס משלבת תנועות יוגה עם עקרונות פילאטיס, לחיזוק שרירי הליבה, שיפור יציבה ויציבות. התרגול מיועד למי שמחפש אימון מתון אבל יעיל, המתמקד במודעות גוף ושייכות למרחב.",
  },
  {
    name: "יוגה לגיל 60+ / יוגה כיסאות",
    image: "yoga-basic.jpg",
    description:
      "שיעור יוגה מותאם לבני 60 ומעלה, המבוצע בעמדת כיסא או בתנוחות עדינות. שיפור טווח תנועה, ניידות והגמשת מפרקים, מבלי להעמיס על הגוף. אידיאלי להרגשה קלה ובטוחה עם תמיכה מלאה.",
  },
];

const HomePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", overflowX: "hidden" }}>
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
            component="a"
            href="#massage-section"
            sx={{
              mt: 1,
              px: 3,
              py: 1,
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
            }}
          >
            למידע נוסף
          </Button>
        </Box>
      </Box>

      {/* SECTION: טיפולי עיסוי */}
      <Box
        id="massage-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 8 },
          backgroundColor: "#111",
          direction: "rtl",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 3, md: 5 },
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
            }}
          >
            טיפולי עיסוי
          </Typography>

          {massageTreatments.map((treatment, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: idx % 2 === 0 ? "row" : "row-reverse",
                },
                mb: { xs: 4, md: 6 },
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                component="img"
                src={treatment.image}
                alt={treatment.name}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: { xs: 200, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              />
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textAlign: "right",
                    fontFamily: "Arial, sans-serif",
                    color: "#EDE6DB",
                  }}
                >
                  {treatment.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    textAlign: "right",
                    color: "#ccc",
                    lineHeight: 1.6,
                  }}
                >
                  {treatment.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* SECTION: שיעורי יוגה */}
      <Box
        id="yoga-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#000",
          direction: "rtl",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 3, md: 5 },
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
            }}
          >
            שיעורי יוגה
          </Typography>

          {yogaClasses.map((yoga, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: idx % 2 === 0 ? "row-reverse" : "row",
                },
                mb: { xs: 4, md: 6 },
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                component="img"
                src={yoga.image}
                alt={yoga.name}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: { xs: 200, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              />
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textAlign: "right",
                    fontFamily: "Arial, sans-serif",
                    color: "#D4C4E2",
                  }}
                >
                  {yoga.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    textAlign: "right",
                    color: "#ccc",
                    lineHeight: 1.6,
                  }}
                >
                  {yoga.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
