import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import BannerBox from "../Components/BannerBox";
import TopBanner from "../Components/TopBanner";

const About = () => {
  const stats = [
    {
      count: "300+",
      text: "All the populer language add simple and interview crack question",
    },
    {
      count: "10k+",
      text: "More than 10 million students visited the site preparation .",
    },
    {
      count: "5",
      text: "Most populaer language add python , react , node , javaScript , c++ ",
    },
  ];

  return (
    <>
    <Box sx={{ mt:'50px'}}>
    <TopBanner />
    </Box>
      <Box width="100%">
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row", alignItems: "center" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dttftmu4m/image/upload/v1739179092/rvjpkmz4hsvlbpridyyq.png"
                  }
                  alt=""
                  width="100%"
                />
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography variant="h4" fontWeight={"700"}>
                  What We Do
                </Typography>
                <Typography variant="body1" color="gray">
                  At MockQuestions.com, we are dedicated to helping job seekers
                  prepare for their interviews and secure their dream jobs. We
                  provide an extensive collection of tools and resources to
                  guide users in navigating tough interview questions and
                  building the confidence needed to excel during interviews.
                </Typography>
                <Box
                  sx={{
                    width: "calc(100% - 40px)",
                    p: "20px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(115, 103, 240, 0.12)",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="gray">
                    To equip job seekers with the necessary tools, insights, and
                    strategies to tackle challenging interview questions and
                    achieve their career aspirations.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box width="100%" sx={{ backgroundColor: "#F0F0F0" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row", alignItems: "center" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography variant="h4" fontWeight={"700"}>
                  Our History
                </Typography>
                <Typography variant="body1" color="gray">
                  Founded in August 2008, MockQuestions.com was created to offer
                  internet users an efficient and effective platform for
                  preparing for job interviews. Since our inception, we have
                  partnered with over 100 expert recruiters to curate a
                  comprehensive collection of mock interview questions. Over the
                  years, we have attracted more than 50 million visitors, with
                  nearly 80,000 users choosing our premium version to further
                  enhance their interview preparation.
                </Typography>
                <Box
                  sx={{
                    width: "calc(100% - 40px)",
                    p: "20px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(115, 103, 240, 0.12)",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="gray">
                    To equip job seekers with the tools, knowledge, and
                    strategies needed to approach any interview question with
                    confidence and to achieve their career goals.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dttftmu4m/image/upload/v1739179092/bl9swdukpi0z9phul4ge.png"
                  }
                  alt=""
                  width="100%"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box width="100%" mp={"50px"} sx={{ backgroundColor: "#F0F0F0" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row", alignItems: "center" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: "600" }}>
                Built for Job , Powered by AI
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  width: { xs: "calc(100% - 50px)", md: "calc(100% - 100px)" },
                  p: { xs: "25px", md: "50px" },
                }}
              >
                <Typography variant="body1" color="gray">
                  Leveraging artificial intelligence, we deliver personalized
                  insights and recommendations to help job seekers prepare for
                  any interview. The AI analyzes industry trends, commonly asked
                  questions, and the user's background to tailor the preparation
                  process, making it more effective and targeted.
                </Typography>{" "}
                <br />
                <Typography variant="body1" color="gray">
                  Designed with go-to-market teams in mind, our platform helps
                  users craft precise, impactful responses to interview
                  questions that align with their professional goals. Whether
                  it’s sales, marketing, or product management, we offer
                  tailored strategies to help users shine in specialized roles
                </Typography>{" "}
                <br />
                <Typography variant="body1" color="gray">
                  Our system provides real-time feedback on responses, helping
                  users identify areas of improvement and refine their answers.
                  Performance tracking allows users to monitor progress over
                  time, ensuring they are always improving and confident going
                  into their interviews
                </Typography>{" "}
                <br />
              </Box>
            </Box>
          </Box>
          <hr />
          <Box sx={{ flexGrow: 1, py: 4 }}>
            <Grid2 container spacing={3} columns={12} justifyContent=" ">
              {stats.map((stat, index) => (
                <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      width: "calc(100% - 6)",
                      p: 3,
                      borderRadius: "12px",
                      textAlign: "left",
                      backgroundColor: "#F0F0F0",
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Typography variant="h3" color="primary" fontWeight={700}>
                      {stat.count}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mt={1}>
                      {stat.text}
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
