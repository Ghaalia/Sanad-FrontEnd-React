import React, { useState } from "react";
import {
  ArrowRight,
  CalendarCheckIcon,
  Edit,
  Mail,
  MapPin,
  PersonStanding,
  Phone,
  Trash2Icon,
  Lock,
  User2Icon,
  Copyright,
} from "lucide-react";
import EventDemoPhoto from "../../assets/event-details/event-image-demo1.svg";
import defaultProfilePhoto from "../../assets/all-users/default-profile.svg";
import mapDemo from "../../assets/create_event/map-big.png";

const OrgProfileDetails = () => {
  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <div className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full h-full text-NavyLight flex justify-center items-start rounded-md">
            <img
              className="w-[180px] h-[180px] rounded-full drop-shadow-md "
              src={defaultProfilePhoto}
              alt="SVG"
            />
          </div>
          <h1 className="text-NavyMain font-semibold text-2xl">Company Name</h1>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex h-[150px] gap-2 justify-center items-center">
              <div className="w-full h-full flex flex-col justify-center items-center bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.20)] pt-3">
                <PersonStanding className=" text-NavyLight" size={35} />
                <span className="text-NavyLight font-semibold pt-1">
                  Total Volunteers
                </span>
                <span className="text-[40px] text-NavyMain font-medium">
                  80
                </span>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.20)] pt-3">
                <CalendarCheckIcon className=" text-NavyLight" size={35} />
                <span className="text-NavyLight font-semibold pt-1">
                  Total Events
                </span>
                <span className="text-[40px] text-NavyMain font-medium">
                  20
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-center">
              <div className="text-NavyLight items-center flex gap-1 text-start font-medium">
                <MapPin size={20} />
                Location
              </div>
              <div className="w-full h-[200px] text-NavyLight overflow-hidden flex justify-center items-start border-[1px] rounded-md border-NavyLight">
                <img className="w-full" src={mapDemo} alt="SVG" />
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center mt-2">
              <div className="flex items-center gap-2 text-NavyLight text-start font-medium">
                <Phone size={20} />
                Phone Number
              </div>
              <div className="flex gap-2 text-start text-NavyMain font-medium">
                +965
                <span>99887765</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center mt-2">
              <div className="flex items-center gap-2 text-NavyLight text-start font-medium">
                <Mail size={20} />
                Email
              </div>
              <div className="text-start text-NavyMain font-medium">
                company@gmail.com
              </div>
            </div>
            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyMain px-2 py-1 rounded-full">
              <div className="flex items-center gap-2 text-NavyLight hover:text-NavyMain text-start font-medium">
                <User2Icon size={20} />
                Edit Profile
              </div>
              <div className="text-start text-NavyLight hover:text-NavyMain font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyMain cursor-pointer px-2 py-1 rounded-full">
              <div className="flex items-center gap-2 text-NavyLight hover:text-NavyMain text-start font-medium">
                <Lock size={20} />
                Edit Account
              </div>
              <div className="text-start text-NavyLight hover:text-NavyMain font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyMain cursor-pointer px-2 py-1 rounded-full">
              <div className="flex items-center gap-2 text-NavyLight hover:text-NavyMain text-start font-medium">
                <Copyright size={20} />
                Edit License
              </div>
              <div className="text-start text-NavyLight hover:text-NavyMain font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center text-RedMain">{/* {error?.message} */}</h1>
      </div>
    </div>
  );
};

export default OrgProfileDetails;
