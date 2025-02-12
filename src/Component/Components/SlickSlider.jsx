import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CommentBox from '../Components/commentBox';
import testimonials from "../Data/testimonials";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <FaArrowLeft 
    onClick={onClick} 
    style={{
      position: "absolute",
      left: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#fff",
      background: "#578E7E",
      borderRadius: "50%",
      padding: "8px",
      fontSize: "24px",
      zIndex: 2,
    }} 
  />
);

const NextArrow = ({ onClick }) => (
  <FaArrowRight 
    onClick={onClick} 
    style={{
      position: "absolute",
      right: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#fff",
      background: "#578E7E",
      borderRadius: "50%",
      padding: "8px",
      fontSize: "24px",
      zIndex: 2,
    }} 
  />
);

function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Our Amazing Slider
      </Typography>
      <Slider {...settings}>
        {testimonials.map((el, index) => (
          <Box key={index} sx={{ padding: "20px", textAlign: "center" }}>
            <Box
              sx={{
                height: "300px",
                backgroundColor: "",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                margin:'10px'
              }}
            >
              {<CommentBox description={el.description} userName={el.name} img1={el.brandLogo[0]} img2={el.brandLogo[1]} img3={el.brandLogo[2]}/>}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SlickSlider;
