import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const TopBanner = (props) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#E8F9FF",
          py: { xs: "20px", md: "50px" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "28px" },
                fontWeight: "bold",
                color: "#333",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {props.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Button
                // href="/signup"
                variant="contained"
                sx={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "#0097a0",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#01686e" },
                }}
              >
                Click
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "35px",
                  color: "gray",
                }}
              >
                <CiLinkedin
                    href="https://www.linkedin.com/feed/"
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#0077b5" },
                  }}
                />
                <CiFacebook
                    href="https://www.linkedin.com/feed/"
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#1877f2" },
                  }}
                />
                <CiTwitter
                    href="https://www.linkedin.com/feed/"
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#1DA1F2" },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TopBanner;
