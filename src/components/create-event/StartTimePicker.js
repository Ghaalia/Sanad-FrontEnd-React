import { Clock } from "lucide-react";
import React, { useState } from "react";

function StartTimePicker({ onTimeChange }) {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("AM");

  const handleTimeChange = () => {
    const formattedHour = hour.toString();
    const formattedMinute = minute < 10 ? `0${minute}` : minute.toString();
    const formattedTime = `${formattedHour}:${formattedMinute} ${period}`;
    onTimeChange(formattedTime);
  };

  const handleMinuteChange = (e) => {
    const newMinute = parseInt(e.target.value);
    if (!isNaN(newMinute) && newMinute >= 0 && newMinute <= 59) {
      setMinute(newMinute);
      handleTimeChange();
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row items-center">
        <h2 className="w-[150px] flex text-start gap-2 items-center text-NavyLight font-medium">
          <Clock size={20} className="flex" />
          Start
        </h2>
        <div className="flex gap-1">
          <input
            type="number"
            placeholder="Hour"
            value={hour}
            onChange={(e) => {
              setHour(parseInt(e.target.value));
              handleTimeChange();
            }}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <span className="font-bold flex justify-center items-center">:</span>
          <input
            type="number"
            placeholder="Minute"
            value={minute}
            onChange={handleMinuteChange}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <select
            value={period}
            onChange={(e) => {
              setPeriod(e.target.value);
              handleTimeChange();
            }}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StartTimePicker;
