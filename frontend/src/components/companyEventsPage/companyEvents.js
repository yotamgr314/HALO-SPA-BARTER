import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const events = [
  {
    name: "יוגה ארגונית",
    image: "eruiHevra.png",
    description:
      "תרגול מותאם למשרד או מרחב פתוח – לשחרור הגוף, שיפור הריכוז והפגת מתחים.",
    details:
      "יוגה ארגונית מספקת למשתתפים הפסקה מרעננת באמצע יום העבודה. תרגול מונחה לשחרור השרירים, נשימות מחברות, ומיקוד מנטלי. ניתן להתאים למשרדים קטנים או חללים פתוחים, וליצור תחושת רוגע וחיוביות בעבודה.",
  },
  {
    name: "עיסוי קצר במקום",
    image: "deep-tissue.jpg",
    description:
      "פינות טיפול אישיות ביום כיף – עיסוי צוואר/גב על כיסא טיפולים.",
    details:
      "עיסויים קצרים ניתנים על כיסא טיפולים ללא צורך בהחלפת בגדים. טיפול קצר וממוקד באזור הצוואר, הגב או הכתפיים, שמרגיע את הגוף ונותן בוסט אנרגטי. מושלם לאירועים ארגוניים וימי גיבוש.",
  },
  {
    name: "סדנאות נשימה והרפיה",
    image: "eruiHevra.png",
    description:
      "תכנים להרגעת סטרס, העלאת אנרגיה וחיבור בין המשתתפים. מתאים ל־outdoor או ישיבה במעגל.",
    details:
      "בסדנאות אנו מתרגלים נשימות מודעות, דמיון מודרך ומדיטציה – כדי להפיג מתחים ולהגביר את הקשב. הסדנה מתאימה למרחבים פתוחים, ימי גיבוש או תחילת יום עיון. משתתפים מדווחים על תחושת חידוש ומיקוד.",
  },
];

const CompanyEvents = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const handleOpenModal = (index) => setOpenModalIndex(index);
  const handleCloseModal = () => setOpenModalIndex(null);

  return (
    <Box sx={{ backgroundColor: "#F4F2EA", py: 10, direction: "rtl" }}>
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
          אירועי חברה עם Halo
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
          הפכו את יום הגיבוש לחוויה של רוגע, חיוך ואנרגיה חיובית. Halo מביאה
          אליכם מגוון פעילויות גוף ונפש המותאמות במיוחד לצוותים – כולל יוגה,
          סדנאות מגע, נשימות מודעות, ותכנים מרעננים לחיבור ותחושת שייכות.
        </Typography>

        <Grid container spacing={6}>
          {events.map((event, idx) => {
            const whatsappLink = `https://wa.me/972502919918?text=${encodeURIComponent(
              `היי הגעתי אלייך דרך האתר ואשמח לתאם פעילות מסוג "${event.name}"`
            )}`;

            return (
              <Grid item xs={12} md={4} key={event.name}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.name}
                    height="180"
                    sx={{ objectFit: "cover" }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#2E4057", mb: 1 }}
                    >
                      {event.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {event.description}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                      mt: "auto", // 🧠 מצמיד כפתורים לתחתית
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
                        color: "#2E4057",
                        borderColor: "#2E4057",
                        fontSize: "0.8rem",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      רוצה לשמוע עוד
                    </Button>
                  </CardActions>
                </Card>

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
                      {event.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.8 }}
                    >
                      {event.details}
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

export default CompanyEvents;
