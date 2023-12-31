import React, { useState } from "react";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../api/events";
import { getAllCategories } from "../../api/category";
import StartTimePicker from "./StartTimePicker";
import EndTimePicker from "./EndTimePicker";
import StartDatePicker from "./StartDatePicker";
import EndDatePicker from "./EndDatePicker";
import Location from "./Location";
import { getUserToken } from "../../api/auth";

const CreateEventForm = () => {
  const token = getUserToken();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [volunteers, setVolunteers] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [location, setLocation] = useState({});
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const formattedStartDate = `${startDay}-${startMonth}-${startYear}`;
  const formattedEndDate = `${endDay}-${endMonth}-${endYear}`;

  const [showEventAddedMessage, setShowEventAddedMessage] = useState(false);
  const [volunteerCounter, setVolunteerCounter] = useState(0);
  const queryClient = useQueryClient();

  const { data: categoryList } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const selectedCategoryStyle = {
    minWidth: "fit-content",
    fontSize: "small",
    fontWeight: "medium",
    color: "#F5574E",
    border: "solid #F5574E 1px",
    borderRadius: 40,
    padding: "2px 10px",
    marginTop: 10,
  };

  const unselectedCategoryStyle = {
    ...selectedCategoryStyle,
    opacity: 0.5,
  };

  const mappedCategories = categoryList?.map((category) => {
    const isSelected = selectedCategory.includes(category._id);
    const style = isSelected ? selectedCategoryStyle : unselectedCategoryStyle;
    return (
      <div
        key={category._id}
        style={style}
        onClick={() => handleCategorySelect(category._id)}
      >
        {category?.category_name}
      </div>
    );
  });

  const { mutate: createEvent_mutate } = useMutation({
    mutationKey: ["createEvent"],
    mutationFn: () =>
      createEvent({
        event_title: title,
        event_image: image,
        event_start_date: formattedStartDate,
        event_end_date: formattedEndDate,
        event_start_time: startTime,
        event_end_time: endTime,
        no_of_volunteer: volunteerCounter,
        description,
        event_address: address,
        event_category: selectedCategory,
        location_coordinates: location,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["createEvent"]);
      setShowEventAddedMessage(true);
      setTimeout(() => {
        setShowEventAddedMessage(false);
      }, 3000);
      // navigate("/homepage");
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  //HANDLE All FIELDS
  const handleTitleChange = (e) => {
    // console.log("New Title:", title);
    setTitle(e.target.value);
  };
  // console.log("Title:", title);

  const handleEventImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleVolunteers = (e) => {
    setVolunteers(e.target.value);
  };

  //VOLUNTEER COUNTER
  const plusVolunteers = () => {
    setVolunteerCounter(volunteerCounter + 1);
  };

  const minusVolunteers = () => {
    setVolunteerCounter(volunteerCounter - 1);
  };

  //FORM SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", title, description, selectedCategory);
    createEvent_mutate();
  };

  return (
    <div className="h-full w-full  overflow-y-scroll overflow-hidden no-scrollbar flex flex-col md:justify-start md:items-center lg:h-screen md:w-full">
      <h1 className="text-NavyMain font-semibold text-2xl">Create New Event</h1>
      <form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center"
      >
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2 relative">
            <input
              placeholder="Enter Event Title"
              type="text"
              // id="event_title"
              name="event_title"
              value={title}
              onChange={handleTitleChange}
              className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
            />
          </div>
          <div className="w-full flex flex-col gap-2 relative">
            <label
              htmlFor="description"
              className="block text-NavyLight text-start font-medium mb-2"
            >
              Event Description
            </label>
            <textarea
              // id="description"
              name="description"
              value={description}
              onChange={handleDescription}
              className="w-full px-4 py-2 border border-[#333333] rounded-md focus:outline-none focus:ring-1 focus:ring-[#910808]"
              rows={2}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="event_image"
              className="block text-NavyLight text-start font-medium mb-2"
            >
              Upload Event Photo
            </label>
            <input
              type="file"
              // id="event_image"
              name="event_image"
              placeholder="Upload Event Photo"
              // value={image}
              onChange={handleEventImage}
              className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-NavyLight text-start font-medium">
              Choose Category
            </div>
            <div className="w-full flex flex-wrap gap-1">
              {/* <CategoryList
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              /> */}
              {mappedCategories}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 relative">
            <label
              htmlFor="event_address"
              className="block text-NavyLight text-start font-medium mb-2"
            >
              Event Address
            </label>
            <textarea
              // id="shortDescription"
              name="event_address"
              placeholder="Block, Street, Building, ect..."
              value={address}
              onChange={handleAddress}
              className="w-full px-4 py-2 border border-[#333333] rounded-md focus:outline-none focus:ring-1 focus:ring-[#910808]"
              rows={2}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex flex-col  text-start ">
              <div className="text-NavyLight font-medium ">Location</div>
              <div className=" text-NavyLight text-xs items-baseline">
                Note: Just click to drop a pin
              </div>
            </div>

            <div className="w-full h-[200px] text-NavyLight overflow-hidden flex justify-center items-start border-[1px] rounded-md border-NavyLight">
              {/* <img className="w-full" src={mapDemo} alt="SVG" /> */}
              {/* <div id="map"></div> */}
              <Location setLocation={setLocation} />
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
                // id="numberOfVolunteers"
                name="no_of_volunteer"
                value={volunteers}
                onChange={handleVolunteers}
                className="w-full h-[35px] px-4 py-2 border text-center border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
              />
              <span onClick={plusVolunteers} className="cursor-pointer">
                <PlusCircle size={35} strokeWidth={1} />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex gap-2 text-NavyLight text-start font-medium">
              <CalendarCheckIcon size={20} />
              Start Date
            </div>
            <StartDatePicker
              setStartDay={setStartDay}
              setStartMonth={setStartMonth}
              setStartYear={setStartYear}
            />
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <StartTimePicker onTimeChange={setStartTime} />
          </div>
          <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex gap-2 text-NavyLight text-start font-medium">
              <CalendarCheckIcon size={20} />
              End Date
            </div>
            <EndDatePicker
              setEndDay={setEndDay}
              setEndMonth={setEndMonth}
              setEndYear={setEndYear}
            />
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <EndTimePicker onTimeChange={setEndTime} />
          </div>
        </div>
        <div className="w-full flex gap-4 justify-center pt-10">
          <button className="text-NavyLight w-full text-center rounded-full font-semibold text-1xl p-2 h-[50px] border-2 border-NavyLight bg-white hover:bg-NavyLight hover:bg-opacity-30 hover:font-bold">
            Save to Drafts
          </button>
          <button
            type="submit"
            className="text-white flex justify-center items-center gap-2 w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
          >
            Post
            <SendIcon />
          </button>
        </div>
        {showEventAddedMessage && (
          <div className="text-RedMain text-center mt-4 font-bold">
            You successfully added an Event!
          </div>
        )}
        <h1 className="text-center text-RedMain">{/* {error?.message} */}</h1>
      </form>
    </div>
  );
};

export default CreateEventForm;
