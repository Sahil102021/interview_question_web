import { Box, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Btn1 from "../Components/button/btn1";


const BannerBox = (props) => {
  return (
    <div>
      <Box
        sx={{
          maxHeight: "400px",
          width: {
            xs: "calc(100% - 20px)",
            sm: "calc(100% - 100px)",
          },
          p: { xs: "10px", sm: "50px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid lightgray",
            borderRadius: "8px",
            overflow: "hidden",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transform: "translateY(-5px)",
            },
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={props.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>

          {/* Content Section */}
          <Box sx={{ width: "calc(100% - 20px)", p: "10px" }}>
            <Typography variant="body1" fontWeight="600">
              {props.title}
            </Typography>
            <Box display="flex">
              <Typography variant="body2" color="gray">
                Starts on:&nbsp;
              </Typography>
              <Typography variant="body2">{props.date}</Typography>
            </Box>

            {/* Registration Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Box display="flex" alignItems="center">
                <AccountCircleIcon
                  sx={{ mr: 1, fontSize: "35px", color: "lightblue" }}
                />
                <Typography variant="body2">{props.Registered} Registered </Typography>
              </Box>

              <Btn1 variant="contained" size="small" title="Register Now" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BannerBox;
