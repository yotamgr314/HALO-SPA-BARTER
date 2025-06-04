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

// **נעביר את כל הטקסטים לעברית**
const navLinks = [
  { label: "דף הבית", path: "/" },
  { label: "אודות", path: "/about" },
  { label: "שירותים", path: "/services" },
  { label: "צור קשר", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  // lisen לגלילה כדי לשנות צבע רקע + blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // שחרור/סגירת ה־Drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // התוכן שבתוך ה־Drawer (תפריט צד במובייל)
  const drawer = (
    <Box
      sx={{
        width: 240,
        // שקוף + blur על כל המסך
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
                      fontFamily: "Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "17px",
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
          // אם גוללו מספיק, נוסיף רקע כהה + blur
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
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
              }}
              onClick={() => navigate("/")}
            >
              ספא &amp; יוגה
            </Typography>

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  ml: 2,
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
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "17px",
                          color: isActive ? "#fff" : "#E5E5E5",
                          opacity: isActive ? 1 : 0.8,
                          transition: "opacity 0.3s ease",
                          "&:hover": { opacity: 1 },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </NavLink>
                  );
                })}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer במובייל */}
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
