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

//  הקישורים בסדר RTL, עברית מלאה
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

  // מאזין לגלילה כדי להפעיל רקע כהה + blur
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
                      fontFamily: "Nunito, Arial, sans-serif",
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
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "68px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: "72px" }, // מרווח אופקי גדול יותר למסכים רחבים
          }}
        >
          {/*** צד שמאל: לוגו + טקסט ***/}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            {/** 1) לוגו כ־background-image בתוך אלמנט עגול **/}
            <Box
              sx={{
                width: 70, // הגדלנו מעט את המעגל
                height: 65,
                borderRadius: "50%",
                backgroundColor: "#fff",
                backgroundImage: `url("/HaloLogo.jpg")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                p: 0.1, // padding קטן (2px)
                mr: 1,
              }}
            />

            {/** 2) טקסט קריא ליד הלוגו בעברית ולטינית מעורבת **/}
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontFamily: "Nunito, Arial, sans-serif",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "none",
              }}
            >
              Halo ספא &amp; יוגה
            </Typography>
          </Box>

          {/*** צד ימין: navLinks (PC) או אייקון למובייל ***/}
          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "36px", // ריווח בין הקישורים
                direction: "rtl",
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
                        "&:hover": {
                          opacity: 1,
                          textDecoration: "underline", // קו בעת ריחוף
                        },
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

      {/*** Drawer במובייל ***/}
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
