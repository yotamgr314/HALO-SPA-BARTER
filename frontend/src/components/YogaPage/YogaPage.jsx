import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const yogaClasses = [
  {
    name: "האטה יוגה",
    image: "yoga-basic.jpg",
    description:
      "יוגה האטה מתמקדת בתנוחות איטיות ונשימה מודעת. כל תנוחה נשארת זמן רב יותר כדי להעמיק את החיבור לגוף ולנפש, לשחרור מתחים וליצירת איזון פנימי. מתאים למתחילים ולמחפשי שלווה.",
    details:
      "שיעור האטה יוגה משלב תרגול איטי ונשימות עמוקות. מתאים למי שמחפש חיבור שקט לגוף, מרחב להירגעות והעמקה אישית.",
  },
  {
    name: "וינאסה",
    image: "yoga-basic.jpg",
    description:
      "יוגה וינאסה היא סדרה דינמית של תנוחות שזורמת בקצב נשימה אחיד. התרגול מחזק שרירים, משפר גמישות, ויוצר תחושת זרימה אנרגטית. מומלץ למטופלים שאוהבים תרגול פעיל ומאתגר.",
    details:
      "ויניאסה היא יוגה בתנועה. זרימה מתנוחה לתנוחה עם תשומת לב לנשימה וקצב. מתאימה למי שאוהב אנרגיה, קצב ותנועה.",
  },
  {
    name: "אשטנגה",
    image: "yoga-basic.jpg",
    description:
      "שיעור אשטנגה עוקב אחרי סדרת תנוחות קבועה בקצב מסוים, עם תשומת לב לנשימה ולמעברים. מתאים למנוסים שמעוניינים באימון אינטנסיבי ושוטף, המחזק את הגוף ושומר על איזון מנטלי.",
    details:
      "שיטה מסורתית ודינמית עם סדרה קבועה של תנוחות, מיועדת למתרגלים מתקדמים. משפרת כח רצון, גמישות וסבלנות.",
  },
  {
    name: "יוגילאטיס",
    image: "yoga-basic.jpg",
    description:
      "יוגילאטיס משלב תרגילי יוגה עם עקרונות פילאטיס לחיזוק שרירי הליבה, שיפור היציבה והגמשת הגוף. שילוב אידאלי למי שמחפש תרגול מודרך התורם לחיזוק, גמישות ומודעות עצמית.",
    details:
      "שילוב עדין של יוגה ופילאטיס – גם נשימה ומודעות וגם חיזוק ליבה. מושלם לאיזון בין כוח ורוגע.",
  },
  {
    name: "יוגה 60+ / כיסאות",
    image: "yoga-basic.jpg",
    description:
      "שיעור יוגה מותאם לבני 60 ומעלה, כולל ישיבה על כיסא או תנוחות עדינות על מזרן. התרגול משפר טווח תנועה, איזון, וניידות בלא מעמס יתר על המפרקים. אידיאלי לחיזוק בריאות מפרקים וגמישות בגיל השלישי.",
    details:
      "שיעור מותאם לבני הגיל השלישי עם תמיכה בכיסא. מחזק את הגוף בצורה בטוחה, תוך שיפור גמישות ויציבות.",
  },
];

const YogaPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [openModalIndex, setOpenModalIndex] = useState(null);
  const handleOpenModal = (index) => setOpenModalIndex(index);
  const handleCloseModal = () => setOpenModalIndex(null);

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash);
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 0);
      }
    }
  }, []);

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
          שיעורי יוגה
        </Typography>
        <Grid container rowSpacing={6} columnSpacing={6}>
          {yogaClasses.map((yoga, idx) => {
            const whatsappLink = `https://wa.me/972502919918?text=${encodeURIComponent(
              `היי הגעתי אלייך דרך האתר ואשמח לקבוע תור לשיעור "${yoga.name}"`
            )}`;

            return (
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
                <Box id={yoga.name} />

                {/* עטיפת תמונה עם שכבת כפתורים מבלי לשנות מבנה קיים */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp ? (idx % 2 === 0 ? 2 : 1) : 1,
                  }}
                >
                  <Box
                    component="img"
                    src={yoga.image}
                    alt={yoga.name}
                    sx={{
                      width: "100%",
                      height: { xs: 200, md: 300 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(0, 0, 0, 0.5)",
                      p: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                    }}
                  >
                    <Button
                      variant="contained"
                      href={whatsappLink}
                      target="_blank"
                      sx={{
                        backgroundColor: "#25D366",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        "&:hover": { backgroundColor: "#1DA851" },
                      }}
                    >
                      לקביעת תור
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenModal(idx)}
                      sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        fontSize: "0.8rem",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      רוצה לשמוע עוד
                    </Button>
                  </Box>
                </Box>

                {/* טקסט לצד התמונה – לא שונה */}
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
                      color: "#6C4F3B",
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

                {/* מודל מידע נוסף */}
                <Modal open={openModalIndex === idx} onClose={handleCloseModal}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "#fff",
                      boxShadow: 24,
                      borderRadius: 2,
                      p: 4,
                      width: { xs: "90%", md: 500 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                    >
                      {yoga.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.8 }}
                    >
                      {yoga.details}
                    </Typography>
                  </Box>
                </Modal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default YogaPage;
