import SelectDropDown from "../shared-library/Select/SelectDropDown.tsx";
import { useState } from "react";
import { Stack } from "@mui/material";

const ParentComponent = () => {
  const [featureOption, setFeatureOption] = useState<string>('');

  const options = [
    { value: 'Feature', label: 'Feature' },
    { value: 'UI', label: 'UI' },
    { value: 'UX', label: 'UX' },
    { value: 'Enhancement', label: 'Enhancement' },
    { value: 'Bug', label: 'Bug' },
  ];

  return (
    <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
      <SelectDropDown
        options={options}
        selectedValue={options[0].value}
        onChange={setFeatureOption}
      /> <SelectDropDown
        options={options}
        selectedValue={featureOption}
        onChange={setFeatureOption}
      /> <SelectDropDown
      options={options}
      selectedValue={featureOption}
      onChange={setFeatureOption}
    />
    </Stack>
  );
};
export default ParentComponent;