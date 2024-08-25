import React, { useState } from "react";
import { Select, MenuItem, FormControl, Box, Typography } from "@mui/material";
import ArrowDown from "../Icon/Arrows/ArrowDown";
import ArrowUp from "../Icon/Arrows/ArrowUp";
import Check from "../Icon/Check";
import theme from "../theme";

const SortByDropdown = () => {
  const [sortBy, setSortBy] = useState("Most Upvotes");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FormControl 
  variant="outlined" 
  sx={{ 
    minWidth: 194, 
    maxWidth: 194, 
    height: 72, 
    backgroundColor: theme.palette.secondary.main, 
    borderRadius: '15px', 
    display: 'flex', 
    justifyContent: 'center', // Center align contents
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 10px', // Adjust padding
      color: "#F2F4FE", // Text color
    },
    '& .MuiSelect-icon': {
      width: '20px', // Adjust icon size
      height: '20px', // Adjust icon size
      right: '55px', 
      left:'10px',// Move the icon inward from the end
      position: 'absolute', // Absolute positioning to adjust placement
      top: '50%', // Center vertically
      transform: 'translateY(500%)', // Adjust for vertical centering
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none', // Remove border
    },
  }}
>
      <Select
        id="sort-by"
        value={sortBy}
        onChange={handleChange}
        onOpen={toggleOpen}
        onClose={toggleOpen}
        IconComponent={() => (isOpen ? <ArrowUp /> : <ArrowDown />)}
        renderValue={(selected) => (
          <Box display="flex" alignItems="center">
            Sort by: {selected} 
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300, // Dropdown height
              width: 250, // Dropdown width
              marginTop: 20, // Space between select and dropdown
              fontFamily: theme.typography.fontFamily, // Font family from theme
              
             
            },
          },
        }}
      >
        <MenuItem
          value="Most Upvotes"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Push items to the ends
            color: sortBy === "Most Upvotes" ? theme.palette.primary.main : 'inherit',
            padding: '8px 16px', // Padding around content
          }}
        >
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography>Most Upvotes</Typography>
          </Box>
          {sortBy === "Most Upvotes" && (
            <Check sx={{ color: theme.palette.primary.main }} />
          )}
        </MenuItem>
        <MenuItem
          value="Least Upvotes"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: sortBy === "Least Upvotes" ? theme.palette.primary.main : 'inherit',
            padding: '8px 16px',
          }}
        >
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography>Least Upvotes</Typography>
          </Box>
          {sortBy === "Least Upvotes" && (
            <Check sx={{ color: theme.palette.primary.main }} />
          )}
        </MenuItem>
        <MenuItem
          value="Most Comments"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: sortBy === "Most Comments" ? theme.palette.primary.main : 'inherit',
            padding: '8px 16px',
          }}
        >
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography>Most Comments</Typography>
          </Box>
          {sortBy === "Most Comments" && (
            <Check sx={{ color: theme.palette.primary.main }} />
          )}
        </MenuItem>
        <MenuItem
          value="Least Comments"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: sortBy === "Least Comments" ? theme.palette.primary.main : 'inherit',
            padding: '8px 16px',
          }}
        >
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography>Least Comments</Typography>
          </Box>
          {sortBy === "Least Comments" && (
            <Check sx={{ color: theme.palette.primary.main }} />
          )}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByDropdown;
