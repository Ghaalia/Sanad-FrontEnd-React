import React, { useEffect } from "react";
import { ClipboardList, History } from "lucide-react";
import { useState } from "react";
import CurrentEventItem from "../components/events/CurrentEventItem";
import EventsSearchBar from "../components/events/EventsSearchBar";
import PastEventItem from "../components/events/PastEventItem";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../api/event";

const AllEvents = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [deletedClicked, setDeletedClicked] = useState(false);
  const [AcceptedShow, setAcceptedShow] = useState(false);

  const { data: events, isloading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getAllEvents(),
  });

  if (isloading) return <p className="text-white">Loading ...</p>;

  // const { data: categories, isloading: categoryLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () => getAllCategories(),
  // });

  // const eventList = events?.map((event) => (
  //   <CurrentEventItem event={event} key={event._id} />
  // ));

  const event = events?.map((el, index) => {
    <CurrentEventItem event={el} key={`event-${index}`} />;
  });

  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setDeletedClicked(false);
    setAcceptedShow(true);
  };

  const handleDeletedClick = () => {
    setDeletedClicked(true);
    setAcceptClicked(false);
  };

  return (
    <div className="bg-NavyMain min-h-screen py-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl pb-4">All Events</h1>

        <div className="w-full flex flex-col gap-4 md:flex-row items-center">
          <div className="w-full h-[50px] flex flex-row gap-4  md:w-[600px] shadow-md shadow-black rounded-full p-1 items-center">
            <div
              className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                acceptClicked
                  ? "bg-RedMain border-RedMain text-white"
                  : "border-transparent text-[#4D497D]"
              }`}
              onClick={handleAcceptClick}
            >
              Current
              <span>
                <ClipboardList
                  color={acceptClicked ? "white" : "#4D497D"}
                  size={20}
                  strokeWidth={2}
                />
              </span>
            </div>
            <div
              className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                deletedClicked
                  ? "bg-RedMain border-RedMain text-white"
                  : "border-transparent text-[#4D497D]"
              }`}
              onClick={handleDeletedClick}
            >
              Past
              <span>
                <History
                  color={deletedClicked ? "white" : "#4D497D"}
                  size={20}
                  strokeWidth={2}
                />
              </span>
            </div>
          </div>
          <EventsSearchBar />
        </div>
        {acceptClicked ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {events?.map((el) => (
              <CurrentEventItem event={el} key={el._id} />
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <PastEventItem />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
