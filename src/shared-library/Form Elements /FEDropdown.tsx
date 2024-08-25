import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Check from "../Icon/Check"; // Assuming Check is a custom icon component
import { useTheme } from '@mui/material/styles';

export default function BasicSelect() {
  const [label, setLabel] = React.useState('');
  const theme = useTheme(); // Access the theme to use custom colors

  const handleChange = (event: SelectChangeEvent) => {
    setLabel(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 225 }}>
      <FormControl fullWidth variant="outlined">
        <Select
          id="demo-simple-select"
          value={label}
          onChange={handleChange}
          displayEmpty
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: label ? theme.palette.primary.main : 'inherit', // Blue border if a value is selected, default otherwise
            },
          }}
          renderValue={(selected) => {
            if (selected) {
              return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <span>{selected}</span>
                </Box>
              );
            } else {
              return <span>Select a label</span>;
            }
          }}
        >
          <MenuItem value="" disabled>
            Select a label
          </MenuItem>

          {/* Feature */}
          <MenuItem
            value="Feature"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: label === "Feature" ? theme.palette.primary.main : 'inherit',
              padding: '8px 16px',
            }}
          >
            <span>Feature</span>
            {label === "Feature" && <Check sx={{ color: theme.palette.primary.main, ml: 2 }} />}
          </MenuItem>

          {/* UI */}
          <MenuItem
            value="UI"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: label === "UI" ? theme.palette.primary.main : 'inherit',
              padding: '8px 16px',
            }}
          >
            <span>UI</span>
            {label === "UI" && <Check sx={{ color: theme.palette.primary.main, ml: 2 }} />}
          </MenuItem>

          {/* UX */}
          <MenuItem
            value="UX"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: label === "UX" ? theme.palette.primary.main : 'inherit',
              padding: '8px 16px',
            }}
          >
            <span>UX</span>
            {label === "UX" && <Check sx={{ color: theme.palette.primary.main, ml: 2 }} />}
          </MenuItem>

          {/* Enhancement */}
          <MenuItem
            value="Enhancement"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: label === "Enhancement" ? theme.palette.primary.main : 'inherit',
              padding: '8px 16px',
            }}
          >
            <span>Enhancement</span>
            {label === "Enhancement" && <Check sx={{ color: theme.palette.primary.main, ml: 2 }} />}
          </MenuItem>

          {/* Bug */}
          <MenuItem
            value="Bug"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: label === "Bug" ? theme.palette.primary.main : 'inherit',
              padding: '8px 16px',
            }}
          >
            <span>Bug</span>
            {label === "Bug" && <Check sx={{ color: theme.palette.primary.main, ml: 2 }} />}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
