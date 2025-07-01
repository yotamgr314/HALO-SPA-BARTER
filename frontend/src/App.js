import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/Footer";
import HomePage from "./components/homepage/HomePage";
import MassagePage from "./components/massagePage/MassagePage";
import YogaPage from "./components/YogaPage/YogaPage";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/massage" element={<MassagePage />} />
            <Route path="/yoga" element={<YogaPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
