import React, { useState } from "react";
import { useQuery } from "react-query";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import DraftEventDetails from "../components/create-event/DraftEventDetails";
import RequestsAndAccepted from "../components/event-details/RequestsAndAccepted";
import RequestsUserItem from "../components/event-details/RequestsUseritem";
import UserProfileModal from "../components/users/UserProfileModal";

const EventDetails = () => {
  const [requests, setRequests] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const [participationId, setParticipationId] = useState(null);

  // Example useQuery for fetching event details
  const { data: currentEvent } = useQuery(
    ["event", currentEventId],
    fetchEventById
  );

  // Example useQuery for fetching participation details
  const { data: participationDetails } = useQuery(
    ["participation", participationId],
    fetchParticipationById
  );

  // Handle opening and closing user profile modal
  const handleCloseModal = () => {
    setShowUserProfileModal(false);
  };

  const handleOpenModal = (participationId) => {
    setShowUserProfileModal(true);
    setParticipationId(participationId);
  };

  const handleRejectedUser = () => {
    // Your logic for handling rejected user
  };

  const handleAcceptedUser = () => {
    // Your logic for handling accepted user
  };

  return (
    <div className="min-w-screen h-screen bg-NavyMain lg:px-[100px]">
      <div className="h-[100vh] mt-[80px] lg:grid lg:grid-cols-2 flex flex-col">
        <div className="h-full md:min-h-screen p-8 md:pt-[100px] ">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white rounded-lg p-4">
            <DraftEventDetails />
          </div>
        </div>
        <div className="bg-NavyMain h-full md:min-h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
          <h1 className="flex gap-2 text-white font-normal text-2xl">
            Small Act,
            <span className="font-bold">Big Impact</span>
          </h1>
          <CreateEventSearchBar />
          <RequestsAndAccepted
            requests={requests}
            accepted={accepted}
            handleAcceptedClick={handleAcceptedClick}
            handleRequestsClick={handleRequestsClick}
          />
          {requests ? (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RequestsUserItem
                  handleOpenModal={handleOpenModal}
                  participationId={participationId}
                />
                {/* Repeat for other RequestsUserItem components */}
              </div>
            </div>
          ) : (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AcceptedUserItem
                  handleOpenModal={handleOpenModal}
                  participationId={participationId}
                />
                {/* Repeat for other AcceptedUserItem components */}
              </div>
            </div>
          )}
        </div>
      </div>
      <UserProfileModal
        showUserProfileModal={showUserProfileModal}
        handleAcceptedUser={handleAcceptedUser}
        acceptedUserShow={acceptedUserShow}
        rejectedUserShow={rejectedUserShow}
        handleCloseModal={handleCloseModal}
        handleRejectedUser={handleRejectedUser}
      />
    </div>
  );
};

export default EventDetails;
