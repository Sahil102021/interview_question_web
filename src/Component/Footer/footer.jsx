import { Box, Grid2, Typography, Container } from "@mui/material";
import { YouTube, LinkedIn, Instagram } from "@mui/icons-material";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import footerData from "./footerData";

const Footer = () => {
  return (
    <Box width="100%">
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#F5ECD5",
            color: "#333",
            py: 5,
            px: { xs: 3, sm: 10 },
            borderRadius: "20px 20px 0 0",
            mt: 5,
          }}
        >
          {/* Top Section */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            preplaced
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Get started by booking a free trial session with the mentor of your
            choice.
          </Typography>

          {/* Main Footer Grid */}
          <Grid2 container spacing={4}>
            {footerData.map((category, index) => (
              <Grid2 item size={{ xs: 6, md: 2 }} key={index}>
                <Typography fontWeight="bold">{category.title}</Typography>
                {category.list.map((el, idx) => (
                  <NavLink
                    to={el.link}
                    key={idx}
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      position: "relative",
                      display: "inline-block",
                      padding: "2px 0",
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        position: "relative",
                        fontWeight: "500",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "1px",
                          bottom: "-2px",
                          left: "0",
                          backgroundColor: "#578E7E",
                          transform: "scaleX(0)",
                          transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover": {
                          color: "#578E7E",
                        },
                        "&:hover::after": {
                          transform: "scaleX(1)",
                        },
                      }}
                    >
                      {el.name}
                    </Typography>
                  </NavLink>
                ))}
              </Grid2>
            ))}
          </Grid2>

          {/* Divider */}
          <Box sx={{ borderTop: "1px solid #ddd", my: 3 }} />

          {/* Bottom Footer */}
          <Grid2 container justifyContent="space-between" alignItems="center">
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Typography variant="body2">
                Copyright © 2024 Preplaced.in
              </Typography>
              <Typography variant="body2">
                Preplaced Education Private Limited
              </Typography>
              <Typography variant="body2">
                Ibblur Village, Bangalore - 560103
              </Typography>
              <Typography variant="body2">GSTIN - 29AAKCP9555E1ZV</Typography>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }} textAlign="right">
              <Typography variant="body2">
                mentee-support@preplaced.in
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                  mt: 1,
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  <YouTube
                    sx={{
                      fontSize: 30,
                      "&:hover": {
                        color: "#d32f2f", // A slightly darker red on hover
                      },
                    }}
                  />
                </NavLink>
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  <LinkedIn
                    sx={{
                      fontSize: 30,
                      "&:hover": {
                        color: "#2973B2", // A slightly darker red on hover
                      },
                    }}
                  />
                </NavLink>
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  <Instagram
                    sx={{
                      fontSize: 30,
                      "&:hover": {
                        color: "#E17564", // A slightly darker red on hover
                      },
                    }}
                  />
                </NavLink>
              </Box>
              <Box sx={{ mt: 2 }}>
                <NavLink
                  to="/"
                  s
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                   Privacy Policy
                </NavLink> / 
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                   Refund Policy
                </NavLink> /  
                <NavLink
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                   Terms & Conditions
                </NavLink>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
