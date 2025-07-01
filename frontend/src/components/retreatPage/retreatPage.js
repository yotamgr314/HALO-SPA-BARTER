import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const RetreatPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/spa2.png"
              alt="retreat image"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                objectFit: "cover",
                height: 300,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
    </Box>
  );
};

export default RetreatPage;
