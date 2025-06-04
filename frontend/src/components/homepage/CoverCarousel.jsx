// src/components/homepage/CoverCarousel.jsx

import React, { useState, useEffect } from "react";
import { Box, Fade } from "@mui/material";
import PropTypes from "prop-types";

/**
 * CoverCarousel מציג סליידר פשוט של תמונות עם fade in/out.
 * props:
 *   - images: מערך מחרוזות (URL) של התמונות שירוצו בסלייד.
 *   - interval: מספר מילישניות בין כל מעבר (למשל 3000 = 3 שניות).
 */
const CoverCarousel = ({ images = [], interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (images.length < 2) return;

    // מחזיר אינטרוול שמחליף אנדקס כל פעם
    const carouselInterval = setInterval(() => {
      // מתחילים אפקט fade‐out
      setShow(false);

      // לאחר חצי זמן וצפיה שהfade נגמר, מעדכנים את currentIndex וחוזרים לfade‐in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setShow(true);
      }, 500); // 500 מ״ש = זמן fade החוצה (צריך להתאים ל־timeout שבמ־CSS)
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [images, interval]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "250px", md: "500px" },
        overflow: "hidden",
      }}
    >
      {images.map((url, idx) => (
        <Fade
          key={idx}
          in={idx === currentIndex && show}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Box
            component="img"
            src={url}
            alt={`Slide ${idx + 1}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Fade>
      ))}
    </Box>
  );
};

CoverCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default CoverCarousel;
