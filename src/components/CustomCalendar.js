import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/customcalendar.css"; // Custom styles

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="custom-datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a date"
        // You can add more props here as needed
      />
    </div>
  );
};

export default CustomCalendar;
