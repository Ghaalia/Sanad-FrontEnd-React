import React from "react";
import { useState } from "react";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import DraftsAndPosted from "../components/create-event/DraftsAndPosted";
import DraftEventItem from "../components/create-event/DraftEventItem";
import CreateEventForm from "../components/create-event/CreateEventForm";

const CreateEvent = () => {
  const [drafts, setDrafts] = useState(true);
  const [posted, setPosted] = useState(false);

  const handlePostClick = () => {
    setDrafts(true);
    setPosted(false);
  };

  const handleDraftsClick = () => {
    setPosted(true);
    setDrafts(false);
  };

  return (
    <div className="min-w-screen h-screen bg-NavyMain lg:px-[100px]">
      <div className="h-[100vh] mt-[80px] lg:grid lg:grid-cols-2 flex flex-col">
        <div className="h-full md:min-h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
          <h1 className="flex gap-2 text-white font-normal text-2xl">
            Small Act,
            <span className="font-bold">Big Impact</span>
          </h1>
          <CreateEventSearchBar />
          <DraftsAndPosted
            drafts={drafts}
            posted={posted}
            handlePostClick={handlePostClick}
            handleDraftsClick={handleDraftsClick}
          />
          <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <DraftEventItem />
              <DraftEventItem />
              <DraftEventItem />
              <DraftEventItem />
              <DraftEventItem />
              <DraftEventItem />
            </div>
          </div>
        </div>
        <div className="h-full md:min-h-screen p-8 md:pt-[100px] ">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white rounded-lg p-4">
            <CreateEventForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
