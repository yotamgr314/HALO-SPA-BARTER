import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

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

const MassagePage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="section"
      sx={{
        pt: 10,
        pb: 10,
        backgroundColor: "#F4F2EA",
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
                  order: isMdUp ? (idx % 2 === 0 ? 1 : 2) : 1,
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  order: isMdUp ? (idx % 2 === 0 ? 2 : 1) : 2,
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
  );
};

export default MassagePage;
