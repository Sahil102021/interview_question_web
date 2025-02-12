import { Button } from "@mui/material";
import React from "react";

const btn1 = (props) => {
  return (
    <div>
      <Button
        sx={{
          width: "100px",
          height: "30px",
          background: "#3D3D3D",
          color: "white",
          fontWeight: "bold",
          border: "1px solid #3D3D3D",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.5s ease-in-out",
          "&:hover": {
            color:'black',
            background: "#F5ECD5",
            transform: "translateY(-3px)",
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default btn1;
