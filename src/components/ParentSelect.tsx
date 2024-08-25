import SelectDropDown from "../shared-library/Select/SelectDropDown.tsx";
import { useState } from "react";

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
    <SelectDropDown
      options={options}
      selectedValue={featureOption}
      onChange={setFeatureOption}
    />
  );
};
export default ParentComponent;