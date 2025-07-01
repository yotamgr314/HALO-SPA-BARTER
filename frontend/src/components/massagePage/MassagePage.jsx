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

const massageTreatments = [
  {
    name: "תאילנדי",
    image: "thai-massage.jpg",
    description:
      "טיפול תאילנדי קלאסי המשתמש בלחיצות עמוקות ומתיחות ייחודיות כדי לשחרר מתחים ולהגביר את זרימת הדם בגוף.",
    details:
      "טיפול מסורתי בשיטת המתיחות והלחיצות התאילנדית. משלב עבודה על קווי אנרגיה, שחרור מפרקים והגמשת הגוף.",
  },
  {
    name: "רקמות",
    image: "thai-massage.jpg",
    description:
      "עיסוי רקמות עמוק מתבצע בלחיצות איטיות ועוצמתיות על שכבות השריר העמוקות ביותר.",
    details:
      "ממוקד בשכבות עמוקות של שרירים ורקמות חיבור. מתאים במיוחד לספורטאים או כאבי שרירים כרוניים.",
  },
  {
    name: "מושלב",
    image: "thai-massage.jpg",
    description:
      "טיפול מושלב המשלב טכניקות משיטות עיסוי שונות בהתאם לצרכים האישיים שלך.",
    details:
      "שילוב מותאם אישית של טכניקות תאילנדי, שוודי ורקמות. מתאים למי שמחפש חוויה שלמה ומגוונת.",
  },
  {
    name: "אקוספורה רפואית",
    image: "thai-massage.jpg",
    description:
      "טכניקה המבוססת על רפלקסולוגיה ונקודות מגע לשחרור חסימות אנרגטיות.",
    details:
      "ממוקד בנקודות רפלקסולוגיות בכף הרגל וערוצי אנרגיה בגוף. מרגיע מערכת עצבים ומחזיר איזון.",
  },
];

const MassagePage = () => {
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
          טיפולי עיסוי
        </Typography>
        <Grid container rowSpacing={6} columnSpacing={6}>
          {massageTreatments.map((treatment, idx) => {
            const whatsappLink = `https://wa.me/972502919918?text=${encodeURIComponent(
              `היי הגעתי אלייך דרך האתר ואשמח לקבוע תור לטיפול "${treatment.name}"`
            )}`;

            return (
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
                <Box id={treatment.name} />

                {/* עטיפת תמונה עם שכבת כפתורים מבלי לגעת בתמונה עצמה */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "50%" },
                    order: isMdUp ? (idx % 2 === 0 ? 1 : 2) : 1,
                  }}
                >
                  <Box
                    component="img"
                    src={treatment.image}
                    alt={treatment.name}
                    sx={{
                      width: "100%",
                      height: { xs: 200, md: 300 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  />

                  {/* שכבת כפתורים */}
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

                {/* טקסט לצד התמונה – בדיוק כפי שהיה */}
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

                {/* מודל עם תוכן מורחב */}
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
                      {treatment.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.8 }}
                    >
                      {treatment.details}
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

export default MassagePage;
