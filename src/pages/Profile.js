import React from "react";
import { useState } from "react";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import AcceptedUserItem from "../components/event-details/AcceptedUserItem";
import UserProfileModal from "../components/users/UserProfileModal";
import OrgProfileDetails from "../components/profile/OrgProfileDetails";
import TotalEventsAndUsersFilter from "../components/profile/TotalEventsAndUsersFilter";
import EventsFilter from "../components/profile/EventsFilter";
import CurrentEventItem from "../components/events/CurrentEventItem";
import PastEventItem from "../components/events/PastEventItem";
import { getAllEvents } from "../api/event";
import { useQuery } from "@tanstack/react-query";
import DraftEventItem from "../components/create-event/DraftEventItem";

const Profile = () => {
  const [events, setEvents] = useState(true);
  const [volunteers, setVolunteers] = useState(false);

  const [all, setAll] = useState(true);
  const [current, setCurrent] = useState(false);
  const [past, setPast] = useState(false);

  const [acceptedUserShow, setAcceptedUserShow] = useState(false);
  const [rejectedUserShow, setRejectedUserShow] = useState(false);
  const [showRejectionReason, setShowRejectionReason] = useState(false);

  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  //Events and volunteers filter
  const handleEventsClick = () => {
    setEvents(true);
    setVolunteers(false);
  };
  const handleVolunteersClick = () => {
    setVolunteers(true);
    setEvents(false);
  };

  //Events filter
  const handleAllClick = () => {
    setAll(true);
    setCurrent(false);
    setPast(false);
  };
  const handleCurrentClick = () => {
    setCurrent(true);
    setAll(false);
    setPast(false);
  };
  const handlePastClick = () => {
    setPast(true);
    setAll(false);
    setCurrent(false);
  };

  //Open and close user profile modal
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

  const { data: allevents } = useQuery({
    queryKey: ["allevents"],
    queryFn: () => getAllEvents(),
  });

  const ongoingEvents = allevents.filter(
    (event) => event.status === "on going"
  );
  const incompleteEvents = allevents.filter(
    (event) => event.status === "in complete"
  );

  // const Eventlists = events?.map((el, index) => {
  //   return <CurrentEventItem event={el} key={`organization-${index}`} />;
  //});
  return (
    <div className="min-w-screen h-screen bg-NavyMain lg:px-[100px]">
      <div className="h-[100vh] lg:grid lg:grid-cols-2 flex flex-col">
        <div className="h-full md:min-h-screen px-8 pt-[80px]">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white p-4">
            <OrgProfileDetails />
          </div>
        </div>
        <div className="bg-NavyMain h-full md:min-h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
          <h1 className="flex gap-2 text-white font-normal text-2xl">
            Small Act,
            <span className="font-bold">Big Impact</span>
          </h1>
          <CreateEventSearchBar />
          <TotalEventsAndUsersFilter
            events={events}
            volunteers={volunteers}
            handleEventsClick={handleEventsClick}
            handleVolunteersClick={handleVolunteersClick}
          />
          <EventsFilter
            all={all}
            current={current}
            past={past}
            handleAllClick={handleAllClick}
            handleCurrentClick={handleCurrentClick}
            handlePastClick={handlePastClick}
          />
          {events ? (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ongoingEvents.map((event) => (
                  <CurrentEventItem key={event.id} event={event} />
                ))}
                Draft Events
                {incompleteEvents.map((event) => (
                  <DraftEventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          ) : (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
                <AcceptedUserItem handleOpenModal={handleOpenModal} />
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

export default Profile;
