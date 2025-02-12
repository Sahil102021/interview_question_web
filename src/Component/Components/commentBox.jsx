import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import img1 from "../image/testimoniyal1.jpg";

const CompanyLogo = styled("img")({
  objectFit: "contain",
  width: '50px',
  height: '25px',
});

export default function TestimonialCard(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Quote Mark Section */}
          <Box sx={{ mb: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", sm: "40px" },
                textAlign: "left",
                fontFamily: "serif",
                color: "#ffc0cb",
              }}
            >
              "
            </Typography>
          </Box>

          {/* Testimonial Description */}
          <Box>
            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.7,
                textAlign: "left",
                fontSize: { xs: "14px", sm: "16px" },
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: 5, // Number of lines to show
                WebkitBoxOrient: "vertical", // Allows the clamping to work
              }}
            >
              {props.description}{" "}
            </Typography>
          </Box>

          {/* User Details Section */}
          <Box
            sx={{ pt: "15px", display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Avatar
              src={img1}
              alt="Profile picture"
              sx={{
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                border: "1px solid #e5e5e5",
              }}
            />
            <Box>
              <Typography
                variant="subtitle1"
                color="text.primary"
                fontWeight={500}
                sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
              >
                {props.userName}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                >
                  Offers from
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CompanyLogo src={props.img1}  alt="Google logo" />
                  <CompanyLogo src={props.img2} alt="Microsoft logo" />
                  <CompanyLogo src={props.img3} alt="Bloomberg logo" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
}
