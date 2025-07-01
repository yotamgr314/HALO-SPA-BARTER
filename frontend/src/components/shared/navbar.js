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

// קישורי ניווט כולל עוגנים פנימיים
const navLinks = [
  { label: "יוגה", path: "/yoga" },
  { label: "עיסויים", path: "/massage" },
  { label: "ריטריטים", path: "/retreats" },
  { label: "אירועי חברה", path: "/company-events" },
  { label: "חבילות", path: "/packages" },
  { label: "אודות", path: "/#about-me-section" },
  { label: "צור קשר", path: "#contact-section" }, // ← כאן השינוי
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

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
        {navLinks.map((link) => {
          const isAnchorLink =
            link.path.startsWith("#") || link.path.startsWith("/#");
          return isAnchorLink ? (
            <a
              key={link.label}
              href={link.path}
              style={{ textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: "#E5E5E5",
                        fontWeight: 400,
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
            </a>
          ) : (
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
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isHomePage
            ? scrolled
              ? "rgba(0, 0, 0, 0.8)"
              : "transparent"
            : "#141414",
          boxShadow: "none",
          backdropFilter: isHomePage && scrolled ? "blur(10px)" : "none",
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
            px: { xs: 2, md: "72px" },
          }}
        >
          {/* לוגו + טקסט */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                width: 75,
                height: 75,
                borderRadius: "50%",
                backgroundColor: "#fff",
                backgroundImage: `url("/HaloLogo.jpg")`,
                backgroundSize: "95%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontFamily: "Nunito, Arial, sans-serif",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              Halo עיסוי & יוגה
            </Typography>
          </Box>

          {/* קישורים לשולחן עבודה */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: "36px", direction: "rtl" }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const isAnchorLink =
                  link.path.startsWith("#") || link.path.startsWith("/#");

                return isAnchorLink ? (
                  <a
                    key={link.label}
                    href={link.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        cursor: "pointer",
                        fontFamily: "Nunito, Arial, sans-serif",
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "#E5E5E5",
                        opacity: 0.8,
                        "&:hover": {
                          opacity: 1,
                          textDecoration: "underline",
                        },
                        textAlign: "right",
                        direction: "rtl",
                      }}
                    >
                      {link.label}
                    </Typography>
                  </a>
                ) : (
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
                          textDecoration: "underline",
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

      {/* Drawer במובייל */}
      <Box component="nav">
        <Drawer
          anchor="right"
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
