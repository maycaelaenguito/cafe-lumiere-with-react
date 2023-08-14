import React, { useState, useRef, useEffect } from "react";
import "../css/customdropdown.css"; // Import your custom CSS for styling

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(1); // Initial selected value
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false); // Added state to track if dropdown should appear above

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check if there's enough space below, set dropUp to true if not
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;
      if (spaceBelow < dropdownRect.height && spaceAbove >= dropdownRect.height) {
        setDropUp(true);
      } else {
        setDropUp(false);
      }
    }

    // Add a mousedown event listener to the document to close the dropdown when clicking outside
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

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
    <div className={`custom-select-container ${dropUp ? "drop-up" : ""}`} ref={dropdownRef}>
      <div className="selected-value" onClick={toggleDropdown}>
        {options.find((option) => option.value === selectedValue)?.label}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BE;</span>
      </div>
      {isOpen && (
        <div className="dropdown">
          <ul className="option-list">
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
