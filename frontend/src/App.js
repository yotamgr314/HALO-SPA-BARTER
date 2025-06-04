// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/Footer";
import HomePage from "./components/homepage/HomePage";
// אם יש לך עוד עמודים – תייבא ותוסיף אותם כאן

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // תופס את הגובה המלא של החלון
        }}
      >
        {/* ה־Navbar יופיע בראש הדף */}
        <Navbar />

        {/* התוכן הראשי יתפרס לגובה פנוי וידחוף את ה־Footer לתחתית */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* לדוגמה: <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </Box>

        {/* ה־Footer יישאר תמיד בתחתית */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
