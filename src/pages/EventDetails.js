import React, { useState } from "react";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import DraftEventDetails from "../components/create-event/DraftEventDetails";
import RequestsAndAccepted from "../components/event-details/RequestsAndAccepted";
import RequestsUserItem from "../components/event-details/RequestsUseritem";
import HandelParticepantModal from "../components/users/HandelParticepantModal";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneEvent } from "../api/event";

import { getAllUsers } from "../api/users";
import AcceptedUserItem from "../components/event-details/AcceptedUserItem";

const EventDetails = () => {
  const { eventId } = useParams();
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [requests, setRequests] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [participation, setParticipation] = useState(null);

  // const { data: users } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: () => getAllUsers(),
  // });

  const {
    data: eventById,
    isLoading: isLoading1,
    refetch,
  } = useQuery({
    queryKey: ["eventById"],
    queryFn: () => getOneEvent(eventId),
  });

  const listOfParticipations = eventById?.volunteer_list;

  // console.log(listOfParticipations);

  const handleAcceptedClick = () => {
    setRequests(true);
    setAccepted(false);
  };

  const handleRequestsClick = () => {
    setRequests(false);
    setAccepted(true);
  };

  // Handle opening and closing user profile modal
  const handleCloseModal = () => {
    setShowUserProfileModal(false);
  };

  const handleOpenModal = (participationId) => {
    setShowUserProfileModal(true);
    // setParticipationId(participationId);
  };

  const handleRejectedUser = () => {
    // Your logic for handling rejected user
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
            refetch={refetch}
            requests={requests}
            accepted={accepted}
            handleAcceptedClick={handleAcceptedClick}
            handleRequestsClick={handleRequestsClick}
          />
          {requests ? (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-row-1 sm:grid-row-2 gap-3">
                {listOfParticipations
                  ?.filter((el) => el.status == "Pending")
                  ?.map((el) => (
                    <RequestsUserItem
                      refetch={refetch}
                      key={el._id}
                      Requetsparticipation={el}
                      handleOpenModal={handleOpenModal}
                      setParticipation={setParticipation}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-row-1 sm:grid-row-2 gap-3">
                {listOfParticipations
                  ?.filter((el) => el.status == "Accepted")
                  ?.map((el) => (
                    <AcceptedUserItem
                      refetch={refetch}
                      key={el._id}
                      Acceptedparticipation={el}
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                      setParticipation={setParticipation}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <HandelParticepantModal
        refetch={refetch}
        participation={participation}
        showUserProfileModal={showUserProfileModal}
        //handleAcceptedUser={handleAcceptedUser}
        // acceptedUserShow={acceptedUserShow}
        // rejectedUserShow={rejectedUserShow}
        handleCloseModal={handleCloseModal}
        handleRejectedUser={handleRejectedUser}
      />
    </div>
  );
};

export default EventDetails;
