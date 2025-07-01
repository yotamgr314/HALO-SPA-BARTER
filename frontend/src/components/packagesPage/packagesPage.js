import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const PackagesPage = () => {
  return (
    <Box sx={{ backgroundColor: "#F9F7F1", py: 10, direction: "rtl" }}>
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
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E4057", mb: 2 }}
              >
                חבילת איזון
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", lineHeight: 1.6 }}
              >
                ● 1 טיפול עיסוי מותאם אישית <br />
                ● שיעור יוגה קבוצתי <br />● הנחה לקביעת טיפול נוסף
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E4057", mb: 2 }}
              >
                חבילת חוויה זוגית
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", lineHeight: 1.6 }}
              >
                ● עיסוי זוגי מפנק <br />
                ● שיעור יוגה זוגי פרטי <br />● בקבוק יין ומתנה אישית
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2E4057", mb: 2 }}
              >
                חבילת פרימיום
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#555", lineHeight: 1.6 }}
              >
                ● 3 עיסויים שונים <br />
                ● 2 שיעורי יוגה אישיים <br />● ייעוץ תזונתי מתנה
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PackagesPage;
