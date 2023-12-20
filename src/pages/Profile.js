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
import TotalEventsAndUsersFilterOrg from "../components/organizations.js/TotalEventsAndUserFilterOrg";

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

  return (
    <div className="w-screen h-min-h-screen  pt-[80px]  md:px-[120px] bg-NavyMain lg:px-[100px] ">
      <div className=" min-h-screen lg:grid lg:grid-cols-2 flex flex-col">
        <div className="h-full md:min-h-screen">
          <div className="w-full h-full lg:px-[50px] flex flex-col text-center gap-4 bg-white p-4">
            <OrgProfileDetails />
          </div>
        </div>

        <div className="bg-NavyMain md:min-h-screen lg:p-11 flex flex-col gap-6 items-center">
          <CreateEventSearchBar />
          <TotalEventsAndUsersFilterOrg
            events={events}
            volunteers={volunteers}
            handleEventsClick={handleEventsClick}
            handleVolunteersClick={handleVolunteersClick}
          />

          {events ? (
            <>
              <EventsFilter
                all={all}
                current={current}
                past={past}
                handleAllClick={handleAllClick}
                handleCurrentClick={handleCurrentClick}
                handlePastClick={handlePastClick}
              />
              <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
                <div className="w-full grid grid-row-1 sm:grid-row-2 gap-3">
                  <CurrentEventItem />
                  <PastEventItem />
                </div>
              </div>
            </>
          ) : (
            <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
              <div className="w-full grid grid-row-1 sm:grid-row-2 gap-3">
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
