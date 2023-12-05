import { CheckCircle2, PauseCircle } from "lucide-react";
import React from "react";

const RequestsAndAccepted = ({
  requests,
  accepted,
  handleRequestsClick,
  handleAcceptedClick,
}) => {
  return (
    <div className="w-full h-[50px] flex flex-row gap-4 md:w-full border border-1-white rounded-full p-1 items-center">
      <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          requests
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handleAcceptedClick}
      >
        Requests
        <span>
          <PauseCircle
            color={requests ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div>
      <div
        className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
          accepted
            ? "bg-RedMain border-RedMain text-white"
            : "border-transparent text-[#4D497D]"
        }`}
        onClick={handleRequestsClick}
      >
        Accepted
        <span>
          <CheckCircle2
            color={accepted ? "white" : "#4D497D"}
            size={20}
            strokeWidth={2}
          />
        </span>
      </div>
    </div>
  );
};

export default RequestsAndAccepted;
