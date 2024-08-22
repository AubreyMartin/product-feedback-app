import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import ArrowUp from '../Icons/Arrows/ArrowUp';
import ArrowDown from '../Icons/Arrows/ArrowDown';
import { styled } from '@mui/material/styles';

const CustomArrowUp = styled(ArrowUp)(({ theme }) => ({
  stroke: theme.palette.primary.main,
}));

const CustomArrowDown = styled(ArrowDown)(({ theme }) => ({
  stroke: theme.palette.primary.main,
}));

function ArrowButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <Button
      variant="contained"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'primary.light',
        color: 'text.primary',
        ':hover': {
          bgcolor: "#CFD7FF",
          color: 'text.primary',
        },
        '&:active': {
          bgcolor: 'info',
          color: 'custom.white',
        },
        width: '53px',
        height: '100px', // Adjust height to fit both arrows and number
        padding: 0,
      }}
    >
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={handleIncrement}
      >
        <CustomArrowUp />
      </Box>
      <Box sx={{ padding: '5px 0' }}>{count}</Box>
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={handleDecrement}
      >
        <CustomArrowDown />
      </Box>
    </Button>
  );
}

export default ArrowButton;
