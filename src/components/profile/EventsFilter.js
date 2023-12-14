import { CalendarCheck, PersonStanding } from "lucide-react";
import React from "react";

const EventsFilter = ({
  all,
  current,
  past,
  handleAllClick,
  handleCurrentClick,
  handlePastClick,
}) => {
  return (
    <div className="w-full h-[50px] flex flex-row gap-4 md:w-full items-center">
      <div
        className={`hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full w-full h-[40px] md:h-[40px] text-center flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer ${
          all
            ? "text-RedMain font-bold underline underline-offset-8"
            : "text-[#4D497D]"
        }`}
        onClick={handleAllClick}
      >
        All
      </div>
      <div
        className={`hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full hover:text-RedMain w-full h-[40px] md:h-[40px] text-center flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer ${
          current
            ? "text-RedMain font-bold  underline underline-offset-8"
            : "text-[#4D497D]"
        }`}
        onClick={handleCurrentClick}
      >
        Current
      </div>
      <div
        className={`hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full hover:text-RedMain w-full h-[40px] md:h-[40px] text-center flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer ${
          past
            ? "text-RedMain font-bold  underline underline-offset-8"
            : "text-[#4D497D]"
        }`}
        onClick={handlePastClick}
      >
        Past
      </div>
    </div>
  );
};

export default EventsFilter;
