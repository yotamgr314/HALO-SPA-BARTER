import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const CompanyEvents = () => {
  return (
    <Box sx={{ backgroundColor: "#F4F2EA", py: 10, direction: "rtl" }}>
      {" "}
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

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2E4057", mb: 1 }}
            >
              יוגה ארגונית
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              תרגול מותאם למשרד או מרחב פתוח – לשחרור הגוף, שיפור הריכוז והפגת
              מתחים.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2E4057", mb: 1 }}
            >
              עיסוי קצר במקום
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              פינות טיפול אישיות ביום כיף – עיסוי צוואר/גב על כיסא טיפולים.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2E4057", mb: 1 }}
            >
              סדנאות נשימה והרפיה
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              תכנים להרגעת סטרס, העלאת אנרגיה וחיבור בין המשתתפים. מתאים
              ל־outdoor או ישיבה במעגל.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyEvents;
