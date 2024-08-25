import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import theme from "../theme";
import { ClassNames } from "@emotion/react";

const UXButton = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      variant="contained" ClassNames= "Small-button"
      sx={{
        backgroundColor: theme.palette.primary.light, color: "#4661E6", // Default color
        "&:hover": {
            bgcolor: "#CFD7FF",
            color: "#4661E6", // Hover color
        },
        "&.Mui-selected": {
            backgroundColor: theme.palette.info, color: theme.palette.custom.white// Selected color
        },
      }}
      onClick={() => setSelected(!selected)}
      className={selected ? "Mui-selected" : ""}
    >
     UX
    </Button>
  );
};

export default UXButton;