import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  Modal,
} from "@mui/material";

const RetreatPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const whatsappLink = `https://wa.me/972502919918?text=${encodeURIComponent(
    `היי הגעתי אלייך דרך האתר ואשמח לקבוע מקום לריטריט הקרוב עם Halo`
  )}`;

  return (
    <Box
      sx={{
        backgroundColor: "#F4F2EA",
        py: 10,
        direction: "rtl",
        minHeight: "60vh",
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
          ריטריטים עם Halo
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            fontFamily: "Arial, sans-serif",
            color: "#444",
            textAlign: "right",
            mb: 6,
          }}
        >
          הריטריטים של Halo מיועדים לכל מי שמחפש ניתוק מהשגרה וחיבור מחודש
          לעצמו. בריטריטים נשלב יוגה, עיסוי, מדיטציה, תנועה והקשבה פנימית – כל
          זה בטבע קסום באווירה חמה ואינטימית.
        </Typography>

        <Grid container spacing={6}>
          {/* צד שמאל – תמונה עם שכבת כפתורים */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                height: 300,
              }}
            >
              <Box
                component="img"
                src="/spa2.png"
                alt="retreat image"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* כפתורים בתחתית התמונה */}
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
                  onClick={handleOpenModal}
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
          </Grid>

          {/* צד ימין – מה מחכה לכם */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "#2E4057" }}
            >
              מה מחכה לכם?
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
              ● תרגולי יוגה יומיים <br />
              ● טיפולי מגע אישיים <br />
              ● מזון טבעי ובריא <br />
              ● מדיטציות והרפיה <br />● זמן פנוי בטבע עם אנשים נפלאים
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* מודל פרטים נוספים */}
      <Modal open={open} onClose={handleCloseModal}>
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
            ריטריטים עם Halo
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.8 }}
          >
            בריטריטים של Halo תמצאו שילוב מרפא של יוגה, מגע, טבע, ומדיטציה, הכל
            באווירה אינטימית ותומכת. אנחנו יוצרים מרחב בטוח שבו תוכלו לשחרר,
            להתחבר לעצמכם ולצמוח. החוויה כוללת לינה בטבע, אוכל בריא, קבוצות
            קטנות, והמון אהבה.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default RetreatPage;
