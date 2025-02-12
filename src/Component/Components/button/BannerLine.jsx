import React from 'react'
import {
    Box,
    Button,
    colors,
    Container,
    Grid2,
    Typography,
  } from "@mui/material";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";


const BannerLine = (props) => {
  return (
    <div>
      <Box width="100%">
      {/* Scrolling Container */}
      <Box
        sx={{
          width: "100%",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#578E7E",
          overflow: "hidden",
          position: "relative",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            animation: "scroll 60s linear infinite",
            "@keyframes scroll": {
              from: { transform: "translateX(100%)" },
              to: { transform: "translateX(-100%)" },
            },
          }}
        >
          {Array.from({ length: 17 }).map((_, index) => (
            <Typography
              key={index}
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "14px", sm: "18px" },
                fontWeight: "500",
                gap: 1.5,
              }}
            >
              <StarPurple500Icon sx={{ fontSize: { xs: "16px", sm: "20px" } }} />
              {props.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>


    </div>
  )
}

export default BannerLine
