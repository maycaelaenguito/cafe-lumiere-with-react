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

  // Get the current date and format it as "MMMM d, yyyy"
  const currentDate = new Date();
  const currentFormattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="custom-datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText={currentFormattedDate}
        // You can add more props here as needed
      />
    </div>
  );
};

export default CustomCalendar;
