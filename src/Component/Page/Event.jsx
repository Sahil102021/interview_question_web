import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container, Grid2, Typography } from "@mui/material";
import TopBanner from "../Components/TopBanner";
import BannerBox from "../Components/BannerBox";
import { useState, useEffect } from "react";
import axios from "axios";

// Custom Tab Panel Component
function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Event() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const categories = ["reactjs", "nodejs", "python", "javascript", "c", "cplusplus"];

  const FetchData = async () => {
    try {
      const response = await axios.get('https://interview-question-api.onrender.com/banner');
      setData(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = (category) => {
    const filtered = data.filter((item) => item.name.toLowerCase() === category.toLowerCase());
    setFilteredData(filtered);
  };

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      filterData(categories[value]);
    }
  }, [data, value]);

  return (
    <>
    <Box sx={{ mt:'50px'}}>
      <TopBanner title="Registration events improve knowledge" />
    </Box>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
              {categories.map((category, index) => (
                <Tab key={category} label={category.charAt(0).toUpperCase() + category.slice(1)} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>

          {/* Dynamic Tab Panels */}
          {categories.map((category, index) => (
            <CustomTabPanel value={value} index={index} key={category}>
              <Grid2 container spacing={3}>
                {filteredData.map((event, index) => (
                  <Grid2 item size={{xs :12 , md : 6}} key={index}>
                    <BannerBox
                      image={event.image}
                      title={event.title}
                      registered={event.registered}
                      date={event.date}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </CustomTabPanel>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Event;
