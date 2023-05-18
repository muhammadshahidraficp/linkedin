import React, { ChangeEvent } from 'react';

interface AtomicDropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const AtomicDropdown: React.FC<AtomicDropdownProps> = ({ options, onSelect }) => {
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <select onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default AtomicDropdown;
