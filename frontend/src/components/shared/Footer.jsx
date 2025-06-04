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
        px: { xs: 2, md: 6 },
      }}
    >
      {/* חלק עליון של הפוטר: לוגו ותיאור קצר */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          mb: 4,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", mb: { xs: 2, md: 0 } }}
        >
          <Box
            component="img"
            src="/HaloLogo.jpg"
            alt="Halo Spa & Yoga"
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "#fff",
              p: 0.5,
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Nunito, Arial, sans-serif",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Halo ספא &amp; יוגה
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "right", md: "right" },
            direction: "rtl",
            fontFamily: "Nunito, Arial, sans-serif",
            lineHeight: 1.6,
          }}
        >
          ב־Halo Spa &amp; Yoga אנו מתמחים ביצירת חוויית פינוק מושלמת: עיסוי
          מקצועי לשחרור מתח ושיקום הגוף, לצד שיעורי יוגה מרגיעים ומדויקים. הצוות
          שלנו כאן כדי להעניק לכם את הטיפול המתאים ביותר.
        </Typography>
      </Box>

      {/* חלק אמצעי: ארבע עמודות */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
          mb: 4,
        }}
      >
        {/* עמודה 1: מידע עלינו */}
        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "rtl" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
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
        </Box>

        {/* עמודה 2: שירותי עיסוי */}
        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "rtl" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
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

        {/* עמודה 3: סוגי שיעורי יוגה */}
        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "rtl" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
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

        {/* עמודה 4: עקבו אחרינו */}
        <Box
          sx={{ display: "flex", flexDirection: "column", direction: "rtl" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "Nunito, Arial, sans-serif",
            }}
          >
            עקבו אחרינו
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <IconButton
              size="small"
              sx={{ color: "#fff" }}
              component="a"
              href="https://www.facebook.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff" }}
              component="a"
              href="https://www.instagram.com/halo.spayoga"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff" }}
              component="a"
              href="https://wa.me/972721234567"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "#fff" }}
              component="a"
              href="/newsletter"
            >
              <EmailIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={textStyle}>
            הצטרפו לניוזלטר שלנו לקבלת עדכונים והטבות
          </Typography>
        </Box>
      </Box>

      {/* חלק תחתון: זכויות יוצרים */}
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
          © 2025 Halo Spa &amp; Yoga. כל הזכויות שמורות.
        </Typography>
      </Box>
    </Box>
  );
};

// סגנון משותף לקישורים
const linkStyle = {
  mb: 1,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
};

// סגנון משותף לטקסט רגיל
const textStyle = {
  mb: 1,
  color: "#E0E0E0",
  fontFamily: "Nunito, Arial, sans-serif",
};

export default Footer;
