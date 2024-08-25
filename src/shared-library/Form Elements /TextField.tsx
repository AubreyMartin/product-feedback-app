import React, { useState } from 'react';
import { Box, TextField as MUITextField } from '@mui/material';

export default function BasicTextFields() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(event.target.value.trim() === ''); // Show error if input is empty
  };

  return (
    <Box sx={{
        backgroundColor: '#F7F8FD', // Background color of the Box
        padding: 2, // Padding inside the Box
        borderRadius: '4px', // Optional: rounded corners for the Box
        '& > *': {
          margin: 2,
          width: '255px',
          height: '48px',
        },
      }}>
      <MUITextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#F7F8FD', // Background color of the input field
            '& fieldset': {
              borderColor: error ? '#D73737' : 'transparent', // Border color based on error state
            },
            '&:hover fieldset': {
              borderColor: '#4661E6', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4661E6', // Border color when focused
            },
          },
          '& .MuiInputLabel-root': {
            color: '#000', // Color of the input label
          },
          '& .MuiFormHelperText-root': {
            color: 'red', // Color of the error message
          },
        }}
        error={error}
        helperText={error ? "This field can't be empty" : ''} // Error message when input is empty
      />
    </Box>
  );
}

