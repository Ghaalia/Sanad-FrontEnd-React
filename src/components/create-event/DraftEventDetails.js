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

const DraftEventDetails = () => {
  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <h1 className="text-NavyMain font-semibold text-2xl">Event Name</h1>

      <div className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full h-[250px] text-NavyLight overflow-hidden flex justify-center items-start rounded-md">
            <img className="w-full" src={EventDemoPhoto} alt="SVG" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-NavyLight text-start font-medium">
              Volunteer Roles
            </div>
            <div className="flex flex-wrap gap-1">
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
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
          <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex">
              <PersonStanding className=" text-NavyLight" />
              <div className="w-full flex gap-2 justify-end text-NavyLight font-medium">
                <span>20</span>
                Volunteers
              </div>
            </div>
            <div className="w-full flex">
              <CalendarCheckIcon size={20} className=" text-NavyLight" />
              <div className="w-full flex gap-1 justify-end text-NavyLight font-medium">
                <span>22</span>
                <span>/</span>
                <span>07</span>
                <span>/</span>
                <span>2024</span>
              </div>
            </div>
            <div className="w-full flex">
              <Clock size={20} className=" text-NavyLight" />
              <div className="w-full flex gap-1 justify-end text-NavyLight font-medium">
                <div className="flex">
                  <span>10</span>
                  <span>:</span>
                  <span>00</span>
                  <span className="pl-1">PM</span>
                </div>
                <span>to</span>
                <div className="flex">
                  <span>11</span>
                  <span>:</span>
                  <span>00</span>
                  <span className="pl-1">PM</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center mt-2">
              <div className="text-NavyLight text-start font-medium">
                Event Description
              </div>
              <div className="text-start text-NavyMain">
                Join us for a fulfilling day of environmental stewardship and
                community bonding! Our "Beach Cleanup Extravaganza" is a
                volunteering event where individuals of all ages can come
                together to make a positive impact on our beautiful coastline.
                Bring your friends and family for a day filled with fun and
                purpose. We'll provide all the necessary cleaning supplies,
                including gloves and trash bags, to ensure a safe and effective
                cleanup. Together, we'll remove litter, plastic waste, and
                debris from the beach, preserving the natural beauty of our
                shores and protecting marine life. As we work hand in hand to
                beautify our coastline, you'll have the chance to connect with
                like-minded individuals, enjoy the fresh sea breeze, and
                contribute to a cleaner, healthier environment. Let's make a
                difference, one piece of trash at a time!
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
