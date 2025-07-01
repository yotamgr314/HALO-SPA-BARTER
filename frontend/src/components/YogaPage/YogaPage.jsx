import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

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
    name: "יוגה 60+ / כיסאות",
    image: "yoga-basic.jpg",
    description:
      "שיעור יוגה מותאם לבני 60 ומעלה, כולל ישיבה על כיסא או תנוחות עדינות על מזרן. התרגול משפר טווח תנועה, איזון, וניידות בלא מעמס יתר על המפרקים. אידיאלי לחיזוק בריאות מפרקים וגמישות בגיל השלישי.",
  },
];

const YogaPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="section"
      sx={{
        pt: 10,
        pb: 10,
        backgroundColor: "#FFFFFF",
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "right",
            fontFamily: "Arial, sans-serif",
            color: "#6C4F3B",
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
                  order: isMdUp ? (idx % 2 === 0 ? 2 : 1) : 1,
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  order: isMdUp ? (idx % 2 === 0 ? 1 : 2) : 2,
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
  );
};

export default YogaPage;
