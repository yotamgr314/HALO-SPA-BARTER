// src/components/shared/navbar.js

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

//  שמות הקישורים (סדר RTL)
const navLinks = [
  { label: "חבילות ומחירים", path: "/packages" },
  { label: "ספא", path: "/spa" },
  { label: "יוגה", path: "/yoga" },
  { label: "גלריה", path: "/gallery" },
  { label: "צור קשר", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  // מאזין לגלילה כדי לשנות רקע + blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // תוכן ה־Drawer במובייל (שקוף + blur)
  const drawer = (
    <Box
      sx={{
        width: 240,
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        height: "100vh",
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton selected={location.pathname === link.path}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      color:
                        location.pathname === link.path ? "#fff" : "#E5E5E5",
                      fontWeight:
                        location.pathname === link.path ? "bold" : 400,
                      fontFamily: "Nunito, Arial, sans-serif", // אפשר להשתמש ב־Nunito
                      fontSize: "16px",
                      lineHeight: "20px",
                      textAlign: "right",
                      direction: "rtl",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          boxShadow: "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          top: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, md: "58px" },
          zIndex: 1300,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "68px",
            display: "flex",
            justifyContent: "space-between", // לוגו+טקסט משמאל, קישורים בימין
            alignItems: "center",
          }}
        >
          {/*** ===== צד שמאל: לוגו כתיבה+טקסט ===== ***/}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            {/** 1) אלמנט הלוגו עם background-image **/}
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%", // עיגול
                backgroundColor: "#fff", // רקע לבן מאחורי התמונה
                backgroundImage: `url("/HaloLogo.jpg")`, // ודא שה־HaloLogo.png נמצא ב־public
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // אפשר להוסיף מעט פדינג כדי לאפשר “מרווח נשימה” אם צריך
                // p: 0.5,
                mr: 1,
                // במידת הצורך להתאים רוחב גבוה יותר:
                // width: 70, height: 70
              }}
            />

            {/** 2) טקסט CTA - Halo Spa & Yoga **/}
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontFamily: "Nunito, Arial, sans-serif",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: "700", // בולט יותר
                letterSpacing: "1px", // ריווח אותיות קל
                textTransform: "none",
              }}
            >
              Halo Spa &amp; Yoga
            </Typography>
          </Box>

          {/*** ===== צד ימין: navLinks (בקצה הימני) או אייקון תמונה למובייל ===== ***/}
          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                direction: "rtl", // RTL: מימין לשמאל
              }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Nunito, Arial, sans-serif",
                        fontSize: "18px",
                        fontWeight: isActive ? "700" : 400,
                        lineHeight: "22px",
                        color: isActive ? "#fff" : "#E5E5E5",
                        opacity: isActive ? 1 : 0.8,
                        "&:hover": { opacity: 1, color: "#FFF" },
                        textAlign: "right",
                        direction: "rtl",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </NavLink>
                );
              })}
            </Box>
          ) : (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/*** ===== Drawer במובייל ===== ***/}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              overflowX: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
