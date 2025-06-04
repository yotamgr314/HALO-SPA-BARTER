// src/components/shared/navbar.js

import React, { useState } from "react";
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

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ width: 240, backgroundColor: "#141414", height: "100%" }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navLinks.map((link) =>
          link.path ? (
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
                        fontFamily: "Netflix Sans, Arial, sans-serif",
                        fontSize: "14px",
                        lineHeight: "17px",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ) : null
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, md: "58px" },
          zIndex: 999,
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
                color: "#E50914",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              SPA-YOGA
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
                  const isActive = link.path && location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontFamily: "Netflix Sans, Arial, sans-serif",
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
              backgroundColor: "#141414",
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
