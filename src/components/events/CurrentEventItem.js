import React from "react";
import { ArrowRight, CircleDot } from "lucide-react";
import { BASE_URL } from "../../api";

const CurrentEventItem = ({ event }) => {
  return (
    <div className="w-full h-[200px] flex flex-col  bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black">
      <div className="bg-white w-full text-NavyMain h-[80%] text-sm  flex justify-center items-center text-center ">
        {/* <img className="w-[100%]" src={`${BASE_URL}+${event?.event_image}`} /> */}
        <img
          className="w-[100%]"
          src={
            event?.event_image ||
            "https://www.sender.net/wp-content/uploads/2021/06/volunteer_newsletter_ideas_examples.png"
          }
        />
      </div>
      <div className="flex w-full h-[20%] justify-between px-8 items-center">
        <div className="text-white font-semibold text-[18px]">
          {event?.event_title}
        </div>
        <div className="text-white font-semibold text-[14px] flex gap-4 justify-between">
          <span className="flex items-center gap-1 justify-between">
            <span>
              <CircleDot
                color="green"
                size={10}
                strokeWidth={5}
                className="border border-1 rounded-full"
              />
            </span>
            On Going
          </span>
          <div className=" w-fit h-full flex items-center">
            <ArrowRight size={28} strokeWidth={2} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentEventItem;
