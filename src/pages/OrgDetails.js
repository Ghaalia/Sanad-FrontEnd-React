import {
  CalendarCheckIcon,
  Mail,
  MapPin,
  PersonStanding,
  Phone,
} from "lucide-react";
import React from "react";

const OrgDetails = () => {
  return (
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl">
          Organization Profile
        </h1>

        <div className="h-full md:min-h-screen px-8 pt-[80px]">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default OrgDetails;
