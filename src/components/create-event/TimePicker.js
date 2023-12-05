import { Clock } from "lucide-react";
import React, { useState } from "react";

function TimePicker() {
  const [startTime, setStartTime] = useState({
    hour: 12,
    minute: 0,
    period: "AM",
  });
  const [endTime, setEndTime] = useState({ hour: 12, minute: 0, period: "AM" });

  const handleStartTimeChange = (field, value) => {
    setStartTime({ ...startTime, [field]: value });
  };

  const handleEndTimeChange = (field, value) => {
    setEndTime({ ...endTime, [field]: value });
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
            value={startTime.hour}
            onChange={(e) => handleStartTimeChange("hour", e.target.value)}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <span className="font-bold flex justify-center items-center">:</span>
          <input
            type="number"
            placeholder="Minute"
            value={startTime.minute}
            onChange={(e) => handleStartTimeChange("minute", e.target.value)}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <select
            value={startTime.period}
            onChange={(e) => handleStartTimeChange("period", e.target.value)}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-row items-center">
        <h2 className="w-[150px] flex gap-2 text-start text-NavyLight font-medium">
          <Clock size={20} className="flex" />
          End
        </h2>
        <div className="flex gap-1">
          <input
            type="number"
            placeholder="Hour"
            value={endTime.hour}
            onChange={(e) => handleEndTimeChange("hour", e.target.value)}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <span className="font-bold flex justify-center items-center">:</span>
          <input
            type="number"
            placeholder="Minute"
            value={endTime.minute}
            onChange={(e) => handleEndTimeChange("minute", e.target.value)}
            className="w-full px-4 py-1 text-center border border-NavyLight border-opacity-40 rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
          />
          <select
            value={endTime.period}
            onChange={(e) => handleEndTimeChange("period", e.target.value)}
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

export default TimePicker;
