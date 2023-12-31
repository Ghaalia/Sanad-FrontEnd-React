import React from "react";
import { ArrowRight, CircleDot } from "lucide-react";
import { BASE_URL } from "../../api";
import { Link, useNavigate } from "react-router-dom";

const AcceptedOrgItem = ({ organization }) => {
  console.log(`${BASE_URL}/${organization?.logo}`);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/org_details/${organization?._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="hover:cursor-pointer w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black"
    >
      <div className=" w-[80px] text-NavyMain h-[80px] flex justify-center items-center text-center ">
        <div className="bg-white w-[150px] h-[150px] justify-center ">
          <img
            className="object-contain h-full"
            src={`${BASE_URL}/${organization?.logo}`}
          />
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
              On Going | 1
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
              Finished | 0
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
