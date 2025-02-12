import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const btn1 = (props) => {
  return (
    <div>
      <NavLink to={props.link}>
        <Button
          sx={{
            width: "auto",
            height: "30px",
            backgroundColor: "#FFFAEC",
            color: "black",
            border: "1px solid #3D3D3D",
            boxShadow: "-3px 3px 0px rgb(0, 0, 0)",
            transition: "0.5s",
            textTransform: "capitalize",
            "&:hover": {
              boxShadow: "0px 0px 0px rgb(0, 0, 0)",
            },
          }}
        >
          {props.title}
        </Button>
      </NavLink>
    </div>
  );
};

export default btn1;
