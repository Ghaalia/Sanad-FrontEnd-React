import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import {
  CalendarCheckIcon,
  MinusCircle,
  PersonStanding,
  PlusCircle,
  SendIcon,
} from "lucide-react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import mapDemo from "../../assets/create_event/map-big.png";

const CreateEventForm = () => {
  const [volunteerCounter, setVolunteerCounter] = useState(0);

  const plusVolunteers = () => {
    setVolunteerCounter(volunteerCounter + 1);
  };

  const minusVolunteers = () => {
    setVolunteerCounter(volunteerCounter - 1);
  };

  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <h1 className="text-NavyMain font-semibold text-2xl">Create New Event</h1>
      <form
        className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center"
        // onSubmit={handleFormSubmit}
      >
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 relative">
            <input
              placeholder="Enter Event Title"
              type="text"
              id="name"
              name="name"
              // onChange={handleChange}
              className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="image"
              className="block text-NavyLight text-start font-medium mb-2"
            >
              Upload Event Photo
            </label>
            <input
              type="file"
              id="image"
              name="image"
              placeholder="Upload Event Photo"
              // onChange={handleUserImage}
              className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
              required
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-NavyLight text-start font-medium">
              Choose Category
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
            <div className="text-NavyLight text-start font-medium">
              Location
            </div>
            <div className="w-full h-[200px] text-NavyLight overflow-hidden flex justify-center items-start border-[1px] rounded-md border-NavyLight">
              <img className="w-full" src={mapDemo} alt="SVG" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="w-full flex gap-2 text-NavyLight text-start font-medium">
              <PersonStanding />
              No. of Volunteers
            </div>
            <div className="w-full flex flex-row gap-2 items-center text-NavyLight">
              <span onClick={minusVolunteers} className="cursor-pointer">
                <MinusCircle size={35} strokeWidth={1} />
              </span>
              <input
                placeholder={volunteerCounter}
                type="number"
                id="numberOfVolunteers"
                name="numberOfVolunteers"
                // onChange={handleChange}
                className="w-full h-[35px] px-4 py-2 border text-center border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span onClick={plusVolunteers} className="cursor-pointer">
                <PlusCircle size={35} strokeWidth={1} />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex gap-2 text-NavyLight text-start font-medium">
              <CalendarCheckIcon size={20} />
              Event Date
            </div>
            <DatePicker />
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <TimePicker />
          </div>
        </div>

        <div className="w-full flex gap-4 justify-center pt-10">
          <button
            // onClick={login_mutate}
            type="submit"
            className="text-NavyLight w-full text-center rounded-full font-semibold text-1xl p-2 h-[50px] border-2 border-NavyLight bg-white hover:bg-NavyLight hover:bg-opacity-30 hover:font-bold"
          >
            Save to Drafts
          </button>
          <button
            // onClick={login_mutate}
            type="submit"
            className="text-white flex justify-center items-center gap-2 w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
          >
            Post
            <SendIcon />
          </button>
        </div>
        <h1 className="text-center text-RedMain">{/* {error?.message} */}</h1>
      </form>
    </div>
  );
};

export default CreateEventForm;

/** 
{
  /* <div className="relative">
            <span className="absolute inset-y-0 left-2 font-medium flex items-center pl-2 text-RedMain">
              +965
            </span>
            <input
              placeholder="Enter Event Contact Number"
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              // onChange={handleChange}
              className="w-full h-[50px] px-4 py-2 pl-[70px] border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2 relative">
            <input
              placeholder="Enter Event Contact Email"
              type="text"
              id="email"
              name="email"
              // onChange={handleChange}
              className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
              required
            />
          </div> */
