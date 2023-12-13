import { CalendarCheck, PersonStanding } from "lucide-react";
import React from "react";

const TotalEventsAndUsersFilter = ({
  events,
  volunteers,
  handleEventsClick,
  handleVolunteersClick,
}) => {
  return (
    <div className="w-full h-[50px] flex flex-row gap-4 md:w-full shadow-sm shadow-black rounded-full p-1 items-center">
      <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          events
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handleEventsClick}
      >
        Events
        <span>
          <CalendarCheck
            color={events ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div>
      <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          volunteers
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handleVolunteersClick}
      >
        Volunteers
        <span>
          <PersonStanding
            color={volunteers ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div>
    </div>
  );
};

export default TotalEventsAndUsersFilter;
