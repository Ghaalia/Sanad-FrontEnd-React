import React from "react";
import { PauseCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getParticipationsbyId } from "../../api/users";

const RequestsUserItem = ({ handleOpenModal, participation }) => {
  console.log(participation);

  return (
    <div
      onClick={handleOpenModal}
      className="w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-full overflow-hidden border border-1-white cursor-pointer"
    >
      <div className="bg-white w-[80px] text-NavyMain h-[80px] rounded-full text-sm p-6 flex justify-center items-center text-center ">
        User Profile
      </div>
      <div className="flex w-full flex-col justify-around">
        <div className="text-white font-semibold text-[18px]">
          {participation?.user?.first_name}
        </div>
        <div className="flex flex-col md:justify-between">
          <div className="text-white font-semibold text-[14px] flex gap-4 md:justify-start">
            <span className="flex items-center gap-1 justify-between">
              Age - 20
            </span>
            <span className="flex items-center gap-1 justify-between">
              Gender - M
            </span>
          </div>
          <div className="text-white text-opacity-50 font-normal text-xs flex gap-4">
            Joined: 22 / 2 / 2024
            <span>Time: 4:00 PM</span>
          </div>
        </div>
      </div>
      <div className=" w-fit h-full px-4 flex items-center">
        <PauseCircle size={28} strokeWidth={2} className="text-white" />
      </div>
    </div>
  );
};

export default RequestsUserItem;
