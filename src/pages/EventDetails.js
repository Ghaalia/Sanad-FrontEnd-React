import React from "react";
import { useState } from "react";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import DraftEventDetails from "../components/create-event/DraftEventDetails";
import RequestsAndAccepted from "../components/event-details/RequestsAndAccepted";
import AcceptedUser from "../components/event-details/AcceptedUserItem";
import AcceptedUserItem from "../components/event-details/AcceptedUserItem";
import RequestsUserItem from "../components/event-details/RequestsUseritem";
import UserProfileModal from "../components/users/UserProfileModal";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEventById } from "../api/event";
import { getParticipationsById } from "../api/participation";

const EventDetails = () => {
  const { eventId } = useParams();

  const [requests, setRequests] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const [acceptedUserShow, setAcceptedUserShow] = useState(false);
  const [rejectedUserShow, setRejectedUserShow] = useState(false);
  const [showRejectionReason, setShowRejectionReason] = useState(false);

  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  const { data: eventById, isLoading: isLoading1 } = useQuery({
    queryKey: ["eventById"],
    queryFn: () => getEventById(eventId),
  });
  const listOfParticipations = eventById?.volunteer_list;

  // listOfParticipations?.map((e) => {
  //   console.log(e.user);
  // });

  console.log(listOfParticipations);

  // const { data: parById, isLoading: isLoading2 } = useQuery({
  //   queryKey: ["parById"],

  //   queryFn: () => getParticipationsById(eventId),
  // });

  // console.log(promises);

  const handleAcceptedClick = () => {
    setRequests(true);
    setAccepted(false);
  };

  const handleRequestsClick = () => {
    setAccepted(true);
    setRequests(false);
  };

  //open and close user profile modal
  const handleCloseModal = () => {
    setShowUserProfileModal(false);
  };

  const handleOpenModal = () => {
    setShowUserProfileModal(true);
  };

  //User Profile (accept / reject)
  const handleRejectedUser = () => {
    setRejectedUserShow(true);
    setAcceptedUserShow(false);
    setShowRejectionReason(true);
  };

  const handleAcceptedUser = () => {
    setAcceptedUserShow(true);
    setRejectedUserShow(false);
  };

  return (
    <div className="min-w-screen h-screen bg-NavyMain lg:px-[100px]">
      <div className="h-[100vh] mt-[80px] lg:grid lg:grid-cols-2 flex flex-col">
        <div className="h-full md:min-h-screen p-8 md:pt-[100px] ">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white rounded-lg p-4">
            <DraftEventDetails eventById={eventById} />
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
                {listOfParticipations?.map((el) => (
                  <RequestsUserItem
                    key={el._id}
                    participation={el}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AcceptedUserItem handleOpenModal={handleOpenModal} />;
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
