import { Box, Button, Container, List, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { useParams } from "react-router-dom";

const Python = () => {
  const params = useParams();
  console.log(params.id);
  const [question, setQuestion] = useState([]);

  let [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://interview-question-api.onrender.com/iq/read"
      );
      searchHandle(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const searchHandle = (data) => {
    try {
      let searchData = params.id;
      let filterData = data.filter((el) => {
        return el.categoryId?.name
          ?.toLowerCase()
          .includes(searchData.toLowerCase());
      });
      // console.log("Filtered Data:", filterData);
      setData(filterData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAllQuestions = () => {
    setQuestion(data); // Set all questions
  };

  const handleSingleQuestion = (el) => {
    setQuestion([el]); // Store as an array for consistency
  };

  // downlod file
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `https://drive.google.com/file/d/1rdk-4oSwZ-xtaLJMicHeHj4-tyuWhibN/view?usp=drive_open`;
    link.href = "https://drive.google.com/file/d/1rdk-4oSwZ-xtaLJMicHeHj4-tyuWhibN/view?usp=drive_open";
    link.click();
  };

  useEffect(() => {
    fetchData();
    searchHandle();
  }, [params]);

  useEffect(() => {
    setQuestion(data); // Show all questions when data is loaded
  }, [data]);

  return (
    <div>
      <Box
        sx={{
          mt: "50px",
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
              {params.id} Most Used Interview Questions
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Button
              onClick={onDownload}
                variant="contained"
                sx={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "#0097a0",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform:"capitalize",
                  "&:hover": { backgroundColor: "#01686e" },
                }}
              >
                Downlod File 
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
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#0077b5" },
                  }}
                />
                <CiFacebook
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#1877f2" },
                  }}
                />
                <CiTwitter
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { color: "#1DA1F2" },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Container>
      </Box>

      <Box width={"100%"}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              height: "700px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Left Sidebar */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "25%",
                overflowY: "scroll",
                "&::-webkit-scrollbar": { width: "0.4em" },
                "&::-webkit-scrollbar-track": { background: "rgba(0,0,0,0.1)" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,.3)",
                  outline: "1px solid slategrey",
                },
              }}
            >
              {/* Sidebar Content */}
              <Box sx={{ padding: 2 }}>
                <Box
                  sx={{
                    py: "5px",
                    borderRadius: "5px",
                    backgroundColor: "#E8F9FF",
                    "&:hover": { backgroundColor: "#73C7C7" },
                  }}
                  onClick={() => handleAllQuestions()}
                >
                  <Box
                    sx={{ fontSize: "18px", px: "5px" }}
                    onClick={() => setQuestion(data)}
                  >
                    All the question
                  </Box>
                </Box>
                {data.map((el, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        py: "5px",
                        borderRadius: "5px",
                        "&:hover": { backgroundColor: "#E8F9FF" },
                      }}
                      onClick={() => handleSingleQuestion(el)}
                    >
                      <Typography sx={{ fontSize: "16px", px: "5px" }}>
                        {i + 1} . {el.question}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Main Content Area */}
            <Box
              sx={{
                width: { xs: "100%", md: "75%" },
                overflowY: "scroll",
                "&::-webkit-scrollbar": { width: "0.4em" },
                "&::-webkit-scrollbar-track": { background: "rgba(0,0,0,0.1)" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,.3)",
                  outline: "1px solid slategrey",
                },
              }}
            >
              <Box p={"20px"}>
                {Array.isArray(question) ? (
                  question.map((q, index) => (
                    <Box key={index} sx={{ p: "10px 0" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#333",
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        {q.question}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#555" }}>
                        {q.answer}
                      </Typography>
                      {q.photos ? (
                        <Box
                          sx={{
                            width: "100%",
                            height: "auto", // Set height to auto for flexible resizing
                            p: "10px",
                            maxWidth: "600px", // Maximum width you want for the image
                            maxHeight: "100%", // Maximum height you want for the image
                            overflow: "hidden", // Ensures no content is overflowed
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={q?.photos}
                            alt="Interview Question Image"
                            style={{
                              objectFit: "contain", // Ensures the image is fully visible and fits inside the container
                              width: "100%",
                              height: "100%", // Adjusts the height while keeping the aspect ratio intact
                            }}
                          />
                        </Box>
                      ) : (
                        <Box></Box>
                      )}

                      <hr />
                    </Box>
                  ))
                ) : (
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#333",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {question.question}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Python;
