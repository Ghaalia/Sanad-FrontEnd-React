import React, { useState } from "react";

function DatePicker() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthSelect = (selectedMonth) => {
    setMonth(selectedMonth);
    setShowMonthDropdown(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="space-x-2 relative ">
      <div className="relative">
        <div className="lg:flex flex gap-1 lg:space-x-2 items-center">
          <input
            type="number"
            placeholder="Day"
            value={day}
            onChange={handleDayChange}
            className="w-full border rounded-full px-2 py-1"
          />
          <input
            type="text"
            placeholder="Month"
            value={month}
            readOnly
            className="w-full border rounded-full px-2 py-1 cursor-pointer"
            onClick={() => setShowMonthDropdown(!showMonthDropdown)}
          />
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={handleYearChange}
            className="w-full border rounded-full px-2 py-1"
          />
        </div>
        {showMonthDropdown && (
          <div className="absolute z-40 mt-8 w-32 bg-white border rounded-md shadow-lg lg:static lg:w-auto">
            <ul>
              {months.map((monthName, index) => (
                <li
                  key={index}
                  onClick={() => handleMonthSelect(monthName)}
                  className="cursor-pointer px-2 py-1 hover:bg-gray-100"
                >
                  {monthName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DatePicker;
