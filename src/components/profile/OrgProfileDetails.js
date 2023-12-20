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
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../api/organization";
import { getUserToken } from "../../api/auth";
import { BASE_URL } from "../../api";

const OrgProfileDetails = () => {
  const token = getUserToken();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  if (isLoading) return <p className="text-white">Loading ...</p>;

  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <div className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full h-full text-NavyLight flex justify-center items-start rounded-md gap-6 ">
            <img
              className="w-[160px] h-[160px] rounded-full drop-shadow-md "
              src={`${BASE_URL}/${profile?.logo}`}
              alt="SVG"
            />
            <div className="flex flex-col  items-start ">
              <h1 className="text-NavyMain font-semibold text-xl items-start italic">
                {profile?.name}
              </h1>

              <div className="flex flex-col">
                <div className="flex flex-col gap-1 justify-center mt-2">
                  <div className="flex items-center gap-2 text-NavyLight text-start font-medium">
                    <Phone size={20} />
                    Phone Number
                  </div>
                  <div className="flex gap-2 text-start text-NavyMain font-medium">
                    +965
                    <span>{profile?.phone_number}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 justify-center mt-2">
                  <div className="flex items-center gap-2 text-NavyLight text-start font-medium">
                    <Mail size={20} />
                    Email
                  </div>
                  <div className="text-start text-NavyMain font-medium">
                    {profile?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <div className="flex h-[150px] gap-2 justify-center items-center">
              <div className="w-[45%] h-full rounded-3xl flex flex-col justify-center items-center bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.20)]">
                <PersonStanding className=" text-NavyLight" size={30} />
                <span className="text-NavyLight font-semibold ">
                  Total Volunteers
                </span>
                <span className="text-[30px] text-NavyMain font-medium">
                  80
                </span>
              </div>
              <div className="w-[45%] h-full rounded-3xl flex flex-col justify-center items-center bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.20)] ">
                <CalendarCheckIcon className=" text-NavyLight" size={30} />
                <span className="text-NavyLight font-semibold ">
                  Total Events
                </span>
                <span className="text-[30px] text-NavyMain font-medium">
                  {profile?.events.length}
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

            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyLight  hover:bg-NavyLight text-NavyLight hover:text-white cursor-pointer px-2 py-1 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 text-start font-medium">
                <User2Icon size={20} />
                Edit Profile
              </div>
              <div className="text-start font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyLight  hover:bg-NavyLight text-NavyLight hover:text-white cursor-pointer px-2 py-1 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2  text-start font-medium">
                <Lock size={20} />
                Edit Account
              </div>
              <div className="text-start font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex  gap-1 justify-between items-center mt-2 border-2 bg-white border-NavyLight hover:border-NavyLight  hover:bg-NavyLight text-NavyLight hover:text-white cursor-pointer px-2 py-1 rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2  text-start font-medium">
                <Copyright size={20} />
                Edit License
              </div>
              <div className="text-start  font-medium">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgProfileDetails;
