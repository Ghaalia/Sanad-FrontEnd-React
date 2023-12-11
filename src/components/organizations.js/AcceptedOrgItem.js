import React from "react";
import { ArrowRight, CircleDot } from "lucide-react";
import { BASE_URL } from "../../api";

const AcceptedOrgItem = ({ organization }) => {
  return (
    <div className="w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-lg overflow-hidden border border-1-white">
      <div className="bg-white w-[80px] text-NavyMain h-[80px] text-sm p-6 flex justify-center items-center text-center ">
        <div className="w-[150px] h-[150px] text-sm justify-center items-center text-center ">
          <img className="w-[100%]" src={`${BASE_URL}/${organization.logo}`} />
        </div>
      </div>
      <div className="flex w-full flex-col justify-around">
        <div className="text-white font-semibold text-[18px]">
          {organization.name}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-white font-semibold text-[14px] flex gap-4 justify-between md:justify-start">
            <span>Events</span>
            <span className="flex items-center gap-1 justify-between">
              <span>
                <CircleDot
                  color="green"
                  size={10}
                  strokeWidth={5}
                  className="border border-1 rounded-full"
                />
              </span>
              On Going | 2
            </span>
            <span className="flex items-center gap-1">
              <span>
                <CircleDot
                  color="red"
                  size={10}
                  strokeWidth={5}
                  className="border border-1 rounded-full"
                />
              </span>
              Finished | 10
            </span>
          </div>
          <div className="text-white text-opacity-50 font-normal text-xs flex gap-4">
            Joined: 22 / 2 / 2024
            <span>Time: 4:00 PM</span>
          </div>
        </div>
      </div>
      <div className=" w-fit h-full px-2 flex items-center">
        <ArrowRight size={28} strokeWidth={2} className="text-white" />
      </div>
    </div>
  );
};

export default AcceptedOrgItem;
