import { CheckCircle2, PauseCircle } from "lucide-react";
import React from "react";

const DraftsAndPosted = ({
  drafts,
  posted,
  handlePostClick,
  handleDraftsClick,
}) => {
  return (
    <div className="w-full h-[50px] flex flex-row gap-4 md:w-full shadow-sm shadow-black rounded-full  p-1 items-center">
      <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          drafts
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handlePostClick}
      >
        Event Drafts
        <span>
          <PauseCircle
            color={drafts ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div>
      {/* <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          posted
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handleDraftsClick}
      >
        Posted
        <span>
          <CheckCircle2
            color={posted ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div> */}
    </div>
  );
};

export default DraftsAndPosted;
