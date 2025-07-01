import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Modal,
} from "@mui/material";

const packages = [
  {
    name: "חבילת איזון",
    description: [
      "1 טיפול עיסוי מותאם אישית",
      "שיעור יוגה קבוצתי",
      "הנחה לקביעת טיפול נוסף",
    ],
    details:
      "חבילה נהדרת למי שמחפש לשלב בין עיסוי אישי מרגיע ליוגה קבוצתית שתחזיר את האיזון והשלווה. אידיאלית למתחילים או תקופות עומס.",
  },
  {
    name: "חבילת חוויה זוגית",
    description: [
      "עיסוי זוגי מפנק",
      "שיעור יוגה זוגי פרטי",
      "בקבוק יין ומתנה אישית",
    ],
    details:
      "חוויה זוגית מרגיעה באווירה רומנטית ומחוברת. מתאים לזוגות בכל שלב – חגיגת אהבה, מתנה מרגשת או זמן איכות יחד.",
  },
  {
    name: "חבילת פרימיום",
    description: [
      "3 עיסויים שונים",
      "2 שיעורי יוגה אישיים",
      "ייעוץ תזונתי מתנה",
    ],
    details:
      "חבילת הדגל המקיפה שלנו. מתאימה למי שמעוניין בתהליך עומק – גם בגוף, גם בתנועה, וגם בתזונה. תכנית שלמה לאיזון ובריאות.",
  },
];

const PackagesPage = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const handleOpenModal = (index) => setOpenModalIndex(index);
  const handleCloseModal = () => setOpenModalIndex(null);

  return (
    <Box
      sx={{
        backgroundColor: "#F9F7F1",
        py: 10,
        direction: "rtl",
        minHeight: "100vh", // ✅ תיקון – הרקע משתרע על כל המסך
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            fontFamily: "Arial, sans-serif",
            color: "#6C4F3B",
            textAlign: "right",
          }}
        >
          חבילות הטיפול והיוגה
        </Typography>

        <Grid container spacing={6}>
          {packages.map((pkg, idx) => {
            const whatsappLink = `https://wa.me/972502919918?text=${encodeURIComponent(
              `היי הגעתי אלייך דרך האתר ואשמח לקבוע תור ל"${pkg.name}"`
            )}`;

            const paperBackground =
              idx % 3 === 0 ? "#FFFFFF" : idx % 3 === 1 ? "#F4F2EA" : "#EFE9E0";

            return (
              <Grid item xs={12} md={4} key={pkg.name}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: paperBackground,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#2E4057",
                        mb: 2,
                        textAlign: "center",
                      }}
                    >
                      {pkg.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#555", lineHeight: 1.6, mb: 2 }}
                    >
                      {pkg.description.map((line, i) => (
                        <span key={i}>
                          ● {line}
                          <br />
                        </span>
                      ))}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
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
                        flexGrow: 1,
                        "&:hover": { backgroundColor: "#1DA851" },
                      }}
                    >
                      לקביעת תור
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenModal(idx)}
                      sx={{
                        color: "#2E4057",
                        borderColor: "#2E4057",
                        fontSize: "0.8rem",
                        flexGrow: 1,
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      רוצה לשמוע עוד
                    </Button>
                  </Box>
                </Paper>

                {/* מודל פרטים נוספים */}
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
                      direction: "rtl",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                    >
                      {pkg.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.8 }}
                    >
                      {pkg.details}
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

export default PackagesPage;
