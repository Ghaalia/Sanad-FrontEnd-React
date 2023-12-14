import React, { useState } from "react";

function EndDatePicker({ setEndDay, setEndMonth, setEndYear }) {
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [displayedMonth, setDisplayedMonth] = useState("");

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

  const handleMonthSelect = (selectedMonth) => {
    setEndMonth(selectedMonth); // Update the parent state
    setDisplayedMonth(selectedMonth); // Update the displayed month
    setShowMonthDropdown(false);
  };

  return (
    <div className="space-x-2 relative">
      <div className="relative">
        <div className="lg:flex flex gap-1 lg:space-x-2 items-center">
          <input
            type="number"
            placeholder="Day"
            onChange={(e) => setEndDay(e.target.value)}
            className="w-full border rounded-full px-2 py-1"
          />
          <input
            type="text"
            value={displayedMonth} // Display the selected month
            placeholder="Month"
            readOnly
            className="w-full border rounded-full px-2 py-1 cursor-pointer"
            onClick={() => setShowMonthDropdown(!showMonthDropdown)}
          />
          <input
            type="number"
            placeholder="Year"
            onChange={(e) => setEndYear(e.target.value)}
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

export default EndDatePicker;
