import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import {
  CalendarCheckIcon,
  Clock,
  Edit,
  MapPin,
  PersonStanding,
  SendIcon,
  Trash2Icon,
} from "lucide-react";
import EventDemoPhoto from "../../assets/event-details/event-image-demo1.svg";
import mapDemo from "../../assets/create_event/map-big.png";
import { BASE_URL } from "../../api";
import CategoryItemId from "../event-details/CategoryItemId";

const DraftEventDetails = ({ eventById }) => {
  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <h1 className="text-NavyMain font-semibold text-2xl">
        {eventById?.event_title}
      </h1>
      {console.log(eventById)}
      <div className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full h-[250px] text-NavyLight overflow-hidden flex justify-center items-start rounded-md">
            {/* <img className="w-full" src={eventById?.event_image} alt="SVG" /> */}
            <img
              src={
                eventById?.event_image
                  ? `${BASE_URL}/${eventById?.event_image}`
                  : require("../../assets/event-details/default-event.png")
              }
            />
          </div>
          {/* <div className="flex flex-col gap-2 justify-center">
            <div className="text-NavyLight text-start font-medium">
              Volunteer Roles
            </div>
            <div className="flex flex-wrap gap-1">
              {eventById?.event_category?.map((category) => {
                console.log(category);
                <CategoryItemId categoryID={category} />;
              })}
            </div>
          </div> */}
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-NavyLight items-center flex gap-1 text-start font-medium">
              <MapPin size={20} />
              Location
            </div>
            <div className="w-full h-[200px] text-NavyLight overflow-hidden flex justify-center items-start border-[1px] rounded-md border-NavyLight">
              <img className="w-full" src={mapDemo} alt="SVG" />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex">
              <PersonStanding className=" text-NavyLight" />
              <div className="w-full flex gap-2 justify-end text-NavyLight font-medium">
                <span>{eventById?.no_of_volunteer}</span>
                Volunteers
              </div>
            </div>
            <div className="w-full flex">
              <CalendarCheckIcon size={20} className=" text-NavyLight" />
              <div className="w-full flex gap-1 justify-end text-NavyLight font-medium">
                {eventById?.event_start_date}
                <span>to</span> {eventById?.event_end_date}
              </div>
            </div>
            <div className="w-full flex">
              <Clock size={20} className=" text-NavyLight" />
              <div className="w-full flex gap-1 justify-end text-NavyLight font-medium">
                {eventById?.event_start_time}
                <span>to</span> {eventById?.event_end_time}
              </div>
            </div>
            <div className="flex flex-col gap-1  mt-2 w-full">
              <div className="text-NavyLight text-start font-medium">
                Event Description
              </div>
              <div className="text-start text-NavyMain">
                {eventById?.description}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4 justify-center items-center pt-10">
          <div className="text-NavyLight w-fit justify-center items-center font-semibold cursor-pointer hover:text-NavyMain">
            <Edit />
          </div>
          <button
            // onClick={login_mutate}
            type="submit"
            className="text-white flex justify-center items-center gap-2 w-full text-center rounded-full font-semibold text-[24px] p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
          >
            Post
            <SendIcon />
          </button>
          <div className="text-NavyLight w-fit justify-center items-center font-semibold cursor-pointer hover:text-NavyMain">
            <Trash2Icon />
          </div>
        </div>
        <h1 className="text-center text-RedMain">{/* {error?.message} */}</h1>
      </div>
    </div>
  );
};

export default DraftEventDetails;
