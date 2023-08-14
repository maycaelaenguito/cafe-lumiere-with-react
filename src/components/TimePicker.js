import React, { useState, useRef, useEffect } from "react";
import "../css/customdropdown.css"; // Import your custom CSS for styling

const TimePicker = () => {
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
  }, [isOpen]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { value: 1, label: "10:00 am" },
    { value: 2, label: "10:30 am" },
    { value: 3, label: "11:00 am" },
    { value: 4, label: "11:30 am" },
    { value: 5, label: "12:00 pm" },
    { value: 6, label: "12:30 pm" },
    { value: 7, label: "1:00 pm" },
    { value: 8, label: "1:30 pm" },
    { value: 9, label: "2:00 pm" },
    { value: 10, label: "2:30 pm" },
    { value: 11, label: "3:00 pm" },
    { value: 12, label: "3:30 pm" },
    { value: 13, label: "4:00 pm" },
    { value: 14, label: "4:30 pm" },
    { value: 15, label: "5:00 pm" },
    { value: 16, label: "5:30 pm" },
    { value: 17, label: "6:00 pm" },
    { value: 17, label: "6:30 pm" },
    { value: 17, label: "7:00 pm" },
    { value: 17, label: "7:30 pm" },
    { value: 17, label: "8:00 pm" },
    { value: 17, label: "8:30 pm" },
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

export default TimePicker;
