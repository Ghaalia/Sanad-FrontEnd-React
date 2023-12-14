// HandlingParReqs.js
import { getAllByAltText } from "@testing-library/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllparReqsforanEvent } from "../api/event";
import { useQuery } from "@tanstack/react-query";

const HandlingParReqs = ({ eventId }) => {
  const location = useLocation();
  const { state } = location;

  // Retrieve the event object from the state
  eventId = state;

  const { data: participations } = useQuery({
    queryKey: ["participations"],
    queryFn: () => getAllparReqsforanEvent(),
  });

  return (
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <h1>Where is the event? {eventId.event_title}</h1>
        <div className="h-full md:min-h-screen px-8 pt-[80px]">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default HandlingParReqs;
