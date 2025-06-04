// src/components/shared/Footer.jsx

import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
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
            md: "auto auto auto",
          },
          gap: { xs: 0.5, md: 0 },
          mb: 1,
          direction: "rtl",
        }}
      >
        {/* עמודה 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            direction: "rtl",
            p: 0,
            m: 0,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 0,
              pb: 0,
              pt: 0,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.2,
            }}
          >
            מידע עלינו
          </Typography>
          <Link href="/faq" underline="none" sx={linkStyle}>
            שאלות נפוצות
          </Link>
          <Link href="/testimonials" underline="none" sx={linkStyle}>
            המלצות מלקוחות
          </Link>
          <Link href="/philosophy" underline="none" sx={linkStyle}>
            פילוסופיית הטיפול שלי
          </Link>
          <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0, m: 0 }}
              component="a"
              href="https://www.facebook.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0, m: 0 }}
              component="a"
              href="https://www.instagram.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0, m: 0 }}
              component="a"
              href="https://wa.me/972721234567"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff", p: 0, m: 0 }}
              component="a"
              href="/newsletter"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* עמודה 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            direction: "rtl",
            p: 0,
            m: 0,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 0,
              pb: 0,
              pt: 0,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.2,
            }}
          >
            שירותי עיסוי
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            עיסוי תאילנדי מסורתי
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            עיסוי רקמות עמוק
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            עיסוי משולב מותאם אישית
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            אקוספורה רפואית לשחרור מתחים
          </Typography>
        </Box>

        {/* עמודה 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            direction: "rtl",
            p: 0,
            m: 0,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 0,
              pb: 0,
              pt: 0,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.2,
            }}
          >
            סוגי שיעורי יוגה
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            האטה יוגה – תרגול מרגיע ומדויק
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            ויניאסה – יוגה זורמת ונמרצת
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            אשטנגה – יוגה דינמית לפי סדר קבוע
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            יוגילאטיס – שילוב בין יוגה לפילאטיס
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            יוגה לבני 60+ / יוגה בכיסאות
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #333",
          mt: 0,
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

const linkStyle = {
  mb: 0,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
  p: 0,
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
};

const textStyle = {
  mb: 0,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.2,
};

export default Footer;
