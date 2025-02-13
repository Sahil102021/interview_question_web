import { React, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import manuData from "./manuData";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../image/Logo.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import zIndex from "@mui/material/styles/zIndex";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [arrow, setArrow] = useState(false);
  const handleArrowClick = () => {
    setArrow((el) => !el);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, position: "sticky", top: "0%", zIndex: "99" }}>
        <AppBar
          sx={{
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 3px 5px",
            height: "60px",
          }}
        >
          <Toolbar>
            {/* Logo */}
            <Box sx={{ width: { xs: "75px", sm: "175px" }, flexShrink: 0 }}>
              <NavLink to="/">
                <img src={logo} alt="Logo" width="100%" />
              </NavLink>
            </Box>

            {/* Navigation Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "left",
                gap: "20px",
              }}
            >
              {manuData.map((el, i) => (
                <Button
                  key={i}
                  sx={{
                    backgroundColor: "transparent",
                    color: "#333",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                      borderRadius: "8px",
                    },
                  }}
                  onClick={() => {
                    setIsDrawerOpen(false); // Close drawer on click
                    handleClick(i);
                  }}
                >
                  <NavLink to={el.link}>
                    <Typography sx={{ color: "#3D3D3D" }}>{el.name}</Typography>
                  </NavLink>
                  {el?.icon}
                  {el?.list && expandedIndex === i && (
                    <Box
                      sx={{
                        width: "225px",
                        position: "absolute",
                        top: "60px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        zIndex: 10,
                        p: 2,
                      }}
                    >
                      {el.list.map((item, idx) => (
                        <NavLink to={item.link}>
                          <Box
                            key={idx}
                            sx={{
                              p: "5px 10px",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              "&:hover": {
                                backgroundColor: "#f2f2f2",
                                borderRadius: "8px",
                              },
                            }}
                          >
                            <Typography sx={{ color: "black" }}>
                              {item.icon}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#3D3D3D",
                                textAlign: "left",
                                "&:hover": {
                                  color: "green",
                                },
                              }}
                            >
                              {" "}
                              {item.name}
                            </Typography>
                          </Box>
                        </NavLink>
                      ))}
                    </Box>
                  )}
                </Button>
              ))}
            </Box>

            {/* Search Bar */}
            <Search
              sx={{
                width: { xs: "75px", sm: "200px" },
                display: { xs: "none", xl: "block" },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              {/* <NavLink to="/signupform">
                <Button
                  variant="outlined"
                  sx={{
                    p: { xs: "1px 2px", xl: "5px 10px" },
                    color: "#0097a0",
                    borderColor: "#0097a0",
                    "&:hover": {
                      backgroundColor: "#0097a0",
                      color: "#fff",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </NavLink> */}
              <NavLink to="/signupform">
                <Button
                  variant="contained"
                  onClick={() => handleArrowClick()}
                  sx={{
                    p: { xs: "1px 8px", xl: "5px 10px" },
                    display: { xs: "flex", lg: "flex" },
                    alignItems: "center",
                    gap: "5px",
                    textTransform: "capitalize",
                    backgroundColor: "#0097a0",
                    "&:hover": {
                      backgroundColor: "#006e75",
                    },
                  }}
                  startIcon={<KeyboardDoubleArrowUpIcon />}
                >
                  Sign Up
                </Button>
              </NavLink>
              <IconButton
                color="inherit"
                onClick={() => setIsDrawerOpen(true)}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250, py: "20px" }}>
          {/* Search Bar
          <Search sx={{ width: { xs: "150px" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}

          <Box
            sx={{
              width: "250px",
              height: "100vh",
              backgroundColor: "#fff",
              borderRight: "2px solid #ddd",
              paddingTop: "20px",
            }}
          >
            <List>
              {manuData.map((el, i) => (
                <Box key={i}>
                  {/* Main Menu Item */}
                  <ListItem
                    button
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      borderBottom: "1px solid #eee",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                    onClick={() =>{ 
                      setIsDrawerOpen(el.list ? true : false )// Close drawer on click
                      setOpenSubMenu(openSubMenu === i ? null : i)}}
                  >
                    <NavLink
                      to={el.link}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        width: "100%",
                      }}
                    >
                      <Typography sx={{ "&:hover": { color: "green" } }}>
                        {el.name}
                      </Typography>
                    </NavLink>
                  </ListItem>

                  {/* Submenu */}
                  {openSubMenu === i && el.list && (
                    <Box
                      sx={{
                        marginLeft: "20px",
                        backgroundColor: "#f8f8f8",
                        borderLeft: "2px solid #ccc",
                      }}
                    >
                      {el.list.map((sub, index) => (
                        <ListItem
                          key={index}
                          button
                          sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}
                        >
                          <NavLink
                            to={sub.link}
                            style={{
                              textDecoration: "none",
                              color: "#555",
                              width: "100%",
                            }}
                            onClick={() => setIsDrawerOpen(false)} // Close drawer on click
                          >
                            <Typography>{sub.name}</Typography>
                          </NavLink>
                        </ListItem>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
