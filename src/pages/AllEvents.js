import React, { useEffect } from "react";
import { ClipboardList, History } from "lucide-react";
import { useState } from "react";
import CurrentEventItem from "../components/events/CurrentEventItem";
import PastEventItem from "../components/events/PastEventItem";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../api/event";
import CurrentEventsSearch from "../components/events/CurrentEventsSearch";
import PastEventsSearch from "../components/events/PastEventsSearch";

const AllEvents = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [currentClicked, setCurrentClicked] = useState(true);
  const [deletedClicked, setDeletedClicked] = useState(false);
  const [AcceptedShow, setAcceptedShow] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");
  const [pastSearchQuery, setPastSearchQuery] = useState("");

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

  const event = events?.map((el, index) => (
    <CurrentEventItem event={el} key={`event-${index}`} />
  ));

  const handleCurrentClick = () => {
    setCurrentClicked(true);
    setDeletedClicked(false);
    setAcceptedShow(true);
    setCurrentSearchQuery("");
  };

  const handlePastClick = () => {
    setDeletedClicked(true);
    setCurrentClicked(false);
    setPastSearchQuery("");
  };

  const handleCurrentSearch = (query) => {
    setCurrentSearchQuery(query);
  };

  const handlePastSearch = (query) => {
    setPastSearchQuery(query);
  };

  const filteredCurrentEvents = events?.filter((event) =>
    event.event_title.toLowerCase().includes(currentSearchQuery.toLowerCase())
  );

  const filteredPastEvents = events?.filter(
    (event) =>
      event.event_title.toLowerCase().includes(pastSearchQuery.toLowerCase()) &&
      event.isPosted === "true"
  );

  return (
    <div className="bg-NavyMain min-h-screen py-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl pb-4">All Events</h1>

        <div className="w-full flex flex-col gap-4 md:flex-row items-center">
          <div className="w-full h-[50px] flex flex-row gap-4  md:w-[600px] shadow-md shadow-black rounded-full p-1 items-center">
            <div
              className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                currentClicked
                  ? "bg-RedMain border-RedMain text-white"
                  : "border-transparent text-[#4D497D]"
              }`}
              onClick={handleCurrentClick}
            >
              Current
              <span>
                <ClipboardList
                  color={currentClicked ? "white" : "#4D497D"}
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
              onClick={handlePastClick}
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
          {currentClicked ? (
            <CurrentEventsSearch onSearch={handleCurrentSearch} />
          ) : (
            <PastEventsSearch onSearch={handlePastSearch} />
          )}
        </div>
        {currentClicked ? (
          <div className="w-full grid grid-row-2 sm:grid-row-1 lg:grid-cols-2 gap-3">
            {filteredCurrentEvents?.map((el, index) => (
              <CurrentEventItem event={el} key={`events-${index}`} />
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-row-2 sm:grid-row-1 lg:grid-cols-2 gap-3">
            {filteredPastEvents?.map((el, index) => (
              <PastEventItem event={el} key={`events-${index}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
