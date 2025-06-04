// src/components/homepage/HomePage.jsx

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../shared/navbar";
import CoverCarousel from "./CoverCarousel";

// רשימת טיפולי העיסוי עם תמונה ותיאור
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
      "עיסוי רקמות עמוק מתבצע בלחיצות איטיות ועוצמתיות על שכבות השריר העמוקות ביותר, לשחרור קשיחות כרונית ויצירת איזון פנימי. מומלץ במיוחד למי שסובל מכאבים ממושכים ושחרור מתחים מתחת לפני השטח.",
  },
  {
    name: "מושלב",
    image: "thai-massage.jpg",
    description:
      "טיפול מושלב המשלב טכניקות משיטות עיסוי שונות (שוודי, תאילנדי, רקמות) בהתאם לצרכים האישיים שלך באותו היום. מאפשר טיפול מקיף שמותאם למצב הגוף ולמטרה הטיפולית.",
  },
  {
    name: "אקוספורה רפואית",
    image: "thai-massage.jpg",
    description:
      "טכניקת אקוספורה רפואית שמבוססת על כיסוי נקודות רפלקס בכפות הרגליים ובלחיצות עדינות על אזורים ספציפיים בגוף, לשחרור חסימות אנרגטיות וטיפול בכאבים פנימיים. מבוסס על עקרונות הרפלקסולוגיה.",
  },
];

// רשימת שיעורי היוגה עם תמונה ותיאור
const yogaClasses = [
  {
    name: "האטה יוגה",
    image: "yoga-basic.jpg",
    description:
      "יוגה האטה מתמקדת בתנוחות איטיות ונשימה מודעת. כל תנוחה נשארת זמן רב יותר כדי להעמיק את החיבור לגוף ולנפש, לשחרור מתחים וליצירת איזון פנימי. מתאים למתחילים ולמחפשי שלווה.",
  },
  {
    name: "וינאסה",
    image: "yoga-basic.jpg",
    description:
      "יוגה וינאסה היא סדרה דינמית של תנוחות שזורמת בקצב נשימה אחיד. התרגול מחזק שרירים, משפר גמישות, ויוצר תחושת זרימה אנרגטית. מומלץ למטופלים שאוהבים תרגול פעיל ומאתגר.",
  },
  {
    name: "אשטנגה",
    image: "yoga-basic.jpg",
    description:
      "שיעור אשטנגה עוקב אחרי סדרת תנוחות קבועה בקצב מסוים, עם תשומת לב לנשימה ולמעברים. מתאים למנוסים שמעוניינים באימון אינטנסיבי ושוטף, המחזק את הגוף ושומר על איזון מנטלי.",
  },
  {
    name: "יוגילאטיס",
    image: "yoga-basic.jpg",
    description:
      "יוגילאטיס משלב תרגילי יוגה עם עקרונות פילאטיס לחיזוק שרירי הליבה, שיפור היציבה והגמשת הגוף. שילוב אידאלי למי שמחפש תרגול מודרך התורם לחיזוק, גמישות ומודעות עצמית.",
  },
  {
    name: "יוגה לגיל 60+ / יוגה כיסאות",
    image: "yoga-basic.jpg",
    description:
      "שיעור יוגה מותאם לבני 60 ומעלה, כולל ישיבה על כיסא או תנוחות עדינות על מזרן. התרגול משפר טווח תנועה, איזון, וניידות בלא מעמס יתר על המפרקים. אידיאלי לחיזוק בריאות מפרקים וגמישות בגיל השלישי.",
  },
];

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
        {/* נניח ש־Navbar מקובע למעלה */}
        <Navbar />

        {/* Carousel עם אנימציית Fade וטקסט דינמי */}
        <CoverCarousel interval={5000} />

        {/* כיתוב חביב מעל התמונה */}
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
              mb: 1,
              fontSize: { xs: "1.5rem", md: "3rem" },
              fontFamily: "Arial, sans-serif",
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
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
              backgroundColor: "rgba(255,255,255,0.85)",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.95)" },
            }}
          >
            טיפולי עיסוי
          </Button>
        </Box>
      </Box>

      {/* ============================================================================= */}
      {/* 2. SECTION: טיפולי עיסוי */}
      {/* ============================================================================= */}
      <Box
        id="massage-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#F4F2EA",
          direction: "rtl",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 4, md: 6 },
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
              color: "#333",
            }}
          >
            טיפולי עיסוי
          </Typography>

          <Grid container rowSpacing={6} columnSpacing={6}>
            {massageTreatments.map((treatment, idx) => (
              <Grid
                key={treatment.name}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 2, md: 4 },
                }}
              >
                {/* בתצוגת MD ומעלה – התמונה בצד השמאלי והשורה בטקסט בצד הימני */}
                {/* אבל בשורה עוקבת נהפוך את הצדדים */}
                <Box
                  component="img"
                  src={treatment.image}
                  alt={treatment.name}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: 200, md: 300 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    order: isMdUp
                      ? idx % 2 === 0
                        ? 1
                        : 2
                      : 1 /* בכפוף לשורה עוקבת נהפוך סדר */,
                  }}
                />

                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp
                      ? idx % 2 === 0
                        ? 2
                        : 1
                      : 2 /* נהפוך בכפוף לשורה עוקבת */,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "right",
                      fontFamily: "Arial, sans-serif",
                      color: "#6C4F3B",
                    }}
                  >
                    {treatment.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      textAlign: "right",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {treatment.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============================================================================= */}
      {/* 3. SECTION: שיעורי יוגה */}
      {/* ============================================================================= */}
      <Box
        id="yoga-section"
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          backgroundColor: "#FFFFFF",
          direction: "rtl",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 4, md: 6 },
              textAlign: "right",
              fontFamily: "Arial, sans-serif",
              color: "#333",
            }}
          >
            שיעורי יוגה
          </Typography>

          <Grid container rowSpacing={6} columnSpacing={6}>
            {yogaClasses.map((yoga, idx) => (
              <Grid
                key={yoga.name}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: { xs: 2, md: 4 },
                }}
              >
                <Box
                  component="img"
                  src={yoga.image}
                  alt={yoga.name}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: 200, md: 300 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    order: isMdUp
                      ? idx % 2 === 0
                        ? 2
                        : 1
                      : 1 /* בשורה עוקבת נהפוך סדר */,
                  }}
                />

                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp
                      ? idx % 2 === 0
                        ? 1
                        : 2
                      : 2 /* נהפוך בכפוף לשורה עוקבת */,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "right",
                      fontFamily: "Arial, sans-serif",
                      color: "#2E4057",
                    }}
                  >
                    {yoga.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      textAlign: "right",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {yoga.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
