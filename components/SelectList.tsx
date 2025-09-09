import React from "react";

type SelectListProps = {
  list: string[];
  selectedValue: string;
  placeholder: string;
};

const SelectList: React.FC<SelectListProps> = ({
  list,
  selectedValue,
  placeholder,
}) => {
  return (
    <select value={selectedValue}>
      <option value="" disabled>
        {placeholder}
      </option>
      {list.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectList;
