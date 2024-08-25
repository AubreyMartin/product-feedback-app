import React, { useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface SelectDropDownProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CheckIcon = () => (
  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5.23287L4.52154 9L12 1" stroke="#AD1FEA" strokeWidth="2"/>
  </svg>
);

const SelectDropDown: React.FC<SelectDropDownProps> = ({ options, selectedValue, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <Select
      id="select-id"
      value={selectedValue}
      onChange={handleChange}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderValue={(selected) => options.find(option => option.value === selected)?.label || ''}
    >
      {options.map((option, index) => (
        <MenuItem key={option.value} value={option.value} sx={{ justifyContent: 'space-between' }} divider={index !== options.length - 1}>
          {option.label}
          {open && selectedValue === option.value && <CheckIcon />}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectDropDown;