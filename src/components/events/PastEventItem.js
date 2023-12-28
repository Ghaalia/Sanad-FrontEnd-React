import React from "react";
import { CircleDot, Undo2 } from "lucide-react";
import defultEventImage from "../../assets/all-events/DefultEventImage.webp";

const PastEventItem = () => {
  return (
    <div className="w-full h-[200px] flex flex-col  bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black">
      <div className="bg-white w-full text-NavyMain h-[80%] text-sm  flex justify-center items-center text-center ">
        <img src={defultEventImage} />
      </div>
      <div className="flex w-full h-[20%] justify-between px-8 items-center">
        <div className="text-white font-semibold text-[18px]">Event Name</div>
        <div className="text-white font-semibold text-[14px] flex gap-4 justify-between">
          <span className="flex items-center gap-1 justify-between">
            <span>
              <CircleDot
                color="red"
                size={10}
                strokeWidth={5}
                className="border border-1 rounded-full"
              />
            </span>
            Finished
          </span>
          <div className=" w-fit h-full flex items-center">
            <Undo2 size={28} strokeWidth={2} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEventItem;
