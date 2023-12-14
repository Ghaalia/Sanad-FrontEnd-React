import React from "react";
import { ArrowRight } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DraftEventItem = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/current_event_details/${event?._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full h-[200px] flex flex-col  bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black"
    >
      <div className="bg-white w-full text-NavyMain h-[80%] text-sm  flex justify-center items-center text-center ">
        Event Image
      </div>
      <div className="flex w-full h-[20%] justify-between px-8 items-center">
        <div className="text-white font-semibold text-[18px]">
          {event?.event_title}
        </div>
        <div className="text-white font-semibold text-[14px] flex gap-4 justify-between">
          <span className="flex items-center gap-1 justify-between">
            View Details
          </span>
          <div className=" w-fit h-full flex items-center">
            <ArrowRight size={28} strokeWidth={2} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftEventItem;
