import React, { useState } from 'react';

const Booking = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleNumPersonsChange = (event) => {
    setNumPersons(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <h2>Reserve a Seat</h2>
      <div>
        <label htmlFor="numPersons">Number of Persons:</label>
        <select id="numPersons" value={numPersons} onChange={handleNumPersonsChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          {/* Add more options if needed */}
        </select>
      </div>
      <div>
        <label htmlFor="selectedDate">Date:</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="selectedTime">Time:</label>
        <input
          type="time"
          id="selectedTime"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      <div>
        <p>Selected: {numPersons} persons on {selectedDate} at {selectedTime}</p>
      </div>
    </div>
  );
};

export default Booking;
