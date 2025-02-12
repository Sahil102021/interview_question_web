import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import Btn1 from "../Components/button/btn1";
import img1 from "../image/Untitled.png";
import logoData from "../Data/logoData";
import BrandLogo from "../Data/BrandLogo";
import BannerLine from "../Components/button/BannerLine";
import SlickSlider from "../Components/SlickSlider";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/*  Hero Section */}
      <Box
        sx={{ backgroundColor: "#F5ECD5", mt: "50px", py: { xs: 4, sm: 6 } }}
      >
        <Container maxWidth="xl">
          <Grid2 container spacing={4} alignItems="center">
            {/*  Text Section */}
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Box sx={{ px: { xs: 2, sm: 4 } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "22px", md: "36px" },
                    fontWeight: "bold",
                    color: "#333",
                    mb: 2,
                  }}
                >
                  Welcome to the Interview question
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#555",
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  A full stack developer is someone who is proficient in working
                  with databases for example Microsoft sql server, my sql,
                  postgre sql or mongo db etc.  <br /> He should also be proficient in
                  backend web development using technologies such as java, c
                  sharp dot net, python or node js. <br /> Also he must be an expert in
                  front end web development using technologies such as html,
                  css, javascript, angular or react.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Btn1 title="python" link={"/question/python"} />
                  <Btn1 title="React Js" link={"/question/reactjs"} />
                  <Btn1 title="Node Js" link={"/question/nodejs"} />
                </Box>
              </Box>
            </Grid2>

            {/*  Image Section */}
            <Grid2 item size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
              <Box sx={{ width: { xs: "80%", md: "70%" }, mx: "auto" }}>
                <img src={img1} width="100%" alt="Hero Image" />
                <NavLink to={'/question/reactjs'}>
                <Box
                  sx={{
                    width: "100%",
                    height: "30px",
                    borderRadius: "5px",
                    backgroundColor: "#FFFAEC",
                    color: "black",
                    border: "1px solid #3D3D3D",
                    boxShadow: "-3px 3px 0px rgb(0, 0, 0)",
                    transition: "0.5s",
                    "&:hover": {
                      boxShadow: "0px 0px 0px rgb(0, 0, 0)",
                    },
                  }}
                >
                  <Typography
                    lineHeight="30px"
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  >
                    hello
                  </Typography>
                </Box>
                </NavLink>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Logo Grid Section */}
      <Box
        sx={{
          p: {
            xs: "50px 0 20px 0",
            sm: "100px 0 50px 0",
            backgroundColor: "#F5ECD5",
          },
        }}
      >
        <Container maxWidth="xl">
          <Box width="100%">
            <Grid2
              container
              spacing={{ xs: 1, md: 2 }}
              columns={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {logoData.map((el, index) => (
                <Grid2 key={index} size={{ xs: 6, sm: 4, md: 2 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "100px", sm: "150px" },
                      border: "0px solid black",
                      borderRadius: "10px",
                      overflow: "hidden",
                      position: "relative",
                      transition: "0.3s ease-in-out",
                      backgroundImage: `url(${el.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      "&:hover": {
                        boxShadow: "6px 6px 15px rgba(0,0,0,0.3)",
                        transform: "scale(1.005)",
                      },
                      "&:hover .description": {
                        bottom: "0px", // Moves up when hovered
                      },
                    }}
                  >
                    {/* Description Box (Initially hidden, appears on hover) */}
                    <Box
                      className="description"
                      sx={{
                        position: "absolute",
                        bottom: "-40px", // Initially hidden below the box
                        left: "0",
                        width: "100%",
                        height: "40px",
                        background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        transition: "bottom 0.3s ease-in-out",
                      }}
                    >
                      {el.detail}
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Container>
      </Box>

      {/* Banner Line */}
      <BannerLine title="Python • C++ • ReactJS • NodeJS" />

      {/* Brand Logos */}
      <Box sx={{ py: { xs: 4, sm: 6 }, textAlign: "center" }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: "28px", fontWeight: "bold", mb: 3 }}>
            Our Users Have <b>Cracked Interviews At</b>
          </Typography>
          <Grid2 container justifyContent="center">
            {BrandLogo.map((el, index) => (
              <Grid2 item size={{ xs: 6, md: 2 }} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={el.img}
                    alt="Brand Logo"
                    style={{
                      maxWidth: "100px",
                      height: "auto",
                      display: "block",
                      filter: "grayscale(100%)",
                      transition: "filter 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.filter = "grayscale(0%)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.filter = "grayscale(100%)")
                    }
                  />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      {/* Slider Section */}
      <Box sx={{ backgroundColor: "#F5ECD5", py: { xs: 4, sm: 6 } }}>
        <Container maxWidth="xl">
          <SlickSlider  />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
