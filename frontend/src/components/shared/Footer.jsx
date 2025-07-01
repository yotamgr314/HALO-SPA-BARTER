import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      id="contact-section" // ← שורה חדשה שהוספנו
      component="footer"
      sx={{
        backgroundColor: "#141414",
        color: "#E0E0E0",
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(6, auto)",
          },
          gap: { xs: 2, md: 3 },
          mb: 2,
          direction: "rtl",
        }}
      >
        {/* עמודה 1 – צור קשר */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            צור קשר
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            halo@yoga-massage.com
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            052-123-4567
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            תל אביב, ישראל
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0 }}
              component="a"
              href="https://www.facebook.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0 }}
              component="a"
              href="https://www.instagram.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0 }}
              component="a"
              href="https://wa.me/9720502919918"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0 }}
              component="a"
              href="mailto:halo@yoga-massage.com"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* עמודה 2 – טיפולי עיסויים */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            טיפולי עיסויים
          </Typography>
          <Typography component="a" href="/massage#מושלב" sx={linkStyle}>
            עיסוי משולב מותאם אישית
          </Typography>
          <Typography component="a" href="/massage#רקמות" sx={linkStyle}>
            עיסוי רקמות עמוק
          </Typography>
          <Typography component="a" href="/massage#תאילנדי" sx={linkStyle}>
            עיסוי תאילנדי מסורתי
          </Typography>
          <Typography
            component="a"
            href="/massage#אקוספורה רפואית"
            sx={linkStyle}
          >
            אקוספורה רפואית לשחרור מתחים
          </Typography>
        </Box>

        {/* עמודה 3 – שיעורי יוגה */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            שיעורי יוגה
          </Typography>
          <Typography component="a" href="/yoga#האטה יוגה" sx={linkStyle}>
            האטה יוגה – תרגול מרגיע
          </Typography>
          <Typography component="a" href="/yoga#וינאסה" sx={linkStyle}>
            ויניאסה – יוגה זורמת
          </Typography>
          <Typography component="a" href="/yoga#אשטנגה" sx={linkStyle}>
            אשטנגה – יוגה דינמית
          </Typography>
          <Typography component="a" href="/yoga#יוגילאטיס" sx={linkStyle}>
            יוגילאטיס – יוגה + פילאטיס
          </Typography>
          <Typography
            component="a"
            href="/yoga#יוגה 60+ / כיסאות"
            sx={linkStyle}
          >
            יוגה 60+ / כיסאות
          </Typography>
        </Box>

        {/* עמודה 4 – ריטריטים */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            ריטריטים
          </Typography>
          <Link href="/retreats" sx={linkStyle}>
            ריטריטים בטבע
          </Link>
          <Link href="/retreats" sx={linkStyle}>
            יוגה ומדיטציה
          </Link>
          <Link href="/retreats" sx={linkStyle}>
            לינה ואירוח
          </Link>
        </Box>

        {/* עמודה 5 – אירועי חברה */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            אירועי חברה
          </Typography>
          <Link href="/company-events" sx={linkStyle}>
            יוגה ארגונית
          </Link>
          <Link href="/company-events" sx={linkStyle}>
            סדנאות הרפיה
          </Link>
          <Link href="/company-events" sx={linkStyle}>
            עיסוי במקום
          </Link>
        </Box>

        {/* עמודה 6 – חבילות */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" sx={columnTitleStyle}>
            חבילות
          </Typography>
          <Link href="/packages" sx={linkStyle}>
            חבילת איזון
          </Link>
          <Link href="/packages" sx={linkStyle}>
            חבילת זוגית
          </Link>
          <Link href="/packages" sx={linkStyle}>
            פרימיום
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #333",
          pt: 2,
          textAlign: "center",
          direction: "rtl",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#757575",
            fontFamily: "Nunito, Arial, sans-serif",
          }}
        >
          © 2025 Halo Massage &amp; Yoga. כל הזכויות שמורות.
        </Typography>
      </Box>
    </Box>
  );
};

const columnTitleStyle = {
  fontWeight: 600,
  mb: 1,
  color: "#fff",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "1rem",
  lineHeight: 1.2,
};

const linkStyle = {
  mb: 0.5,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
  textDecoration: "none",
  "&:hover": {
    color: "#fff",
    textDecoration: "none", // ← ביטול underline
  },
};

const textStyle = {
  mb: 0.5,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
};

export default Footer;
