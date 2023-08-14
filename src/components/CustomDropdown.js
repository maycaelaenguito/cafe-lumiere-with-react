import React, { useState } from "react";
import "../css/customdropdown.css"; // Import your custom CSS for styling

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(1); // Initial selected value
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { value: 1, label: "1 Person" },
    { value: 2, label: "2 People" },
    { value: 3, label: "3 People" },
    { value: 4, label: "4 People" },
    { value: 5, label: "5 People" },
    { value: 6, label: "6 People" },
    { value: 7, label: "7 People" },
    { value: 8, label: "8 People" },
    { value: 9, label: "9 People" },
    { value: 10, label: "10 People" },
  ];

  return (
    <div className="custom-select-container">
      <div className="selected-value" onClick={toggleDropdown}>
        {options.find((option) => option.value === selectedValue)?.label}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BE;</span>
      </div>
      {isOpen && (
        <div className="dropdown">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className={option.value === selectedValue ? "selected" : ""}
                onClick={() => {
                  handleChange({ target: { value: option.value } });
                  toggleDropdown();
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
