// import React, { useState } from "react";
// import { Box, Button, Typography, Container } from "@mui/material";
// import { styled } from "@mui/system";

// const ImageContainer = styled(Box)(({ theme }) => ({
//   position: "relative",
//   overflow: "hidden",
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[4],
//   height: 400,
//   width: "100%",
//   "&:hover": {
//     "& .MuiBox-root": {
//       transform: "translateY(0)"
//     },
//     "& .zoom-image": {
//       transform: "scale(1.1)"
//     }
//   }
// }));

// const StyledImage = styled(Box)({
//   width: "100%",
//   height: "100%",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   transition: "transform 0.3s ease-in-out"
// });

// const InfoBox = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   right: 0,
//   backgroundColor: "rgba(0, 0, 0, 0.7)",
//   color: "#fff",
//   padding: theme.spacing(3),
//   transform: "translateY(100%)",
//   transition: "transform 0.3s ease-in-out",
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(2)
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   alignSelf: "flex-start",
//   backgroundColor: theme.palette.primary.main,
//   color: "#fff",
//   "&:hover": {
//     backgroundColor: theme.palette.primary.dark
//   }
// }));

// const Box1 = () => {
//   const [imageError, setImageError] = useState(false);

//   const handleImageError = () => {
//     setImageError(true);
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <ImageContainer
//         role="article"
//         aria-label="Interactive image card with zoom effect"
//       >
//         <StyledImage
//           className="zoom-image"
//           component="div"
//           sx={{
//             backgroundImage: `url(${imageError ? "https://images.unsplash.com/photo-1590479773265-7464e5d48118" : "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46"})`
//           }}
//           onError={handleImageError}
//         />
//         <InfoBox component="div">
//           <Typography
//             variant="h5"
//             component="h2"
//             sx={{ fontWeight: "bold" }}
//           >
//             Discover Nature's Beauty
//           </Typography>
//           <Typography variant="body1">
//             Explore the breathtaking landscapes and immerse yourself in the wonders of nature. Our carefully curated collection brings you closer to the most spectacular views from around the world.
//           </Typography>
//           <StyledButton
//             variant="contained"
//             aria-label="Learn more about nature's beauty"
//           >
//             Explore More
//           </StyledButton>
//         </InfoBox>
//       </ImageContainer>
//     </Container>
//   );
// };

// export default Box1;