import {
  Ban,
  CalendarCheckIcon,
  Dot,
  Mail,
  MapPin,
  Maximize2,
  PersonStanding,
  Phone,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import React, { useState } from "react";
import RequestForm from "../components/requests/RequestForm";
import { useParams } from "react-router-dom";
import {
  OrgApproveById,
  OrgRejectById,
  getOrganizationsById,
} from "../api/organization";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../api";
import TotalEventsAndUsersFilter from "../components/profile/TotalEventsAndUsersFilter";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import EventsFilter from "../components/profile/EventsFilter";
import CurrentEventItem from "../components/events/CurrentEventItem";
import PastEventItem from "../components/events/PastEventItem";
import AcceptedUserItem from "../components/event-details/AcceptedUserItem";
import ImageModal from "../components/profile/ImageModal";

const OrgDetails = () => {
  const { orgId } = useParams();
  const [events, setEvents] = useState(true);
  const [volunteers, setVolunteers] = useState(false);
  const [all, setAll] = useState(true);
  const [current, setCurrent] = useState(false);
  const [past, setPast] = useState(false);

  const [acceptedUserShow, setAcceptedUserShow] = useState(false);
  const [rejectedUserShow, setRejectedUserShow] = useState(false);
  const [showRejectionReason, setShowRejectionReason] = useState(false);

  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const { mutate: UnBlock, isPending: isPending1 } = useMutation({
    mutationKey: ["UnBlock"],
    mutationFn: () => OrgApproveById(orgById),
    onSuccess: () => {
      handleCloseModal();
      // setUser(true);
    },
  });

  const { mutate: Block, isPending: isPending2 } = useMutation({
    mutationKey: ["Block"],
    mutationFn: () => OrgRejectById(orgById),
    onSuccess: () => {
      handleCloseModal();
      // setUser(true);
    },
  });

  const { data: orgById, isLoading } = useQuery({
    queryKey: ["orgById"],
    queryFn: () => getOrganizationsById(orgId),
  });

  if (isLoading) return <p className="text-white">Loading ...</p>;

  // Open and close image modal
  const handleOpenImageModal = () => {
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
  };

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
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl ">
          Organization Profile
        </h1>
        <div className="min-h-screen lg:grid lg:grid-cols-2 flex flex-col gap-3 ">
          {/* Div Number 1 Profile and license */}
          <div className="flex flex-col py-10 md:h-screen items-center">
            {/* Profile Info */}

            <div className="bg-white w-[90%] h-full text-NavyLight flex flex-col justify-center items-center rounded-md py-3">
              <div className="flex gap-8">
                <div>
                  <img
                    className="w-[150px] h-[150px] rounded-full drop-shadow-md  "
                    src={`${BASE_URL}/${orgById?.logo}`}
                    alt="SVG"
                  />
                </div>

                <div className="flex flex-col ">
                  <div className=" relative flex items-center ">
                    {orgById?.isAccepted == "Accepted" ? (
                      <Dot
                        className="text-green-500  absolute -left-9 -top-4"
                        size={50}
                        strokeWidth={4}
                      />
                    ) : (
                      <Dot
                        className="text-red-500  absolute -left-9 -top-4"
                        size={50}
                        strokeWidth={4}
                      />
                    )}

                    <h1 className=" text-NavyLight font-semibold text-2xl italic ">
                      {orgById?.name}
                    </h1>
                  </div>

                  <div className="flex flex-col gap-1 justify-center mt-2">
                    <div className="flex items-center gap-2 text-NavyLight text-start font-bold">
                      <Phone size={20} />
                      Phone Number
                    </div>
                    <div className="flex gap-2 text-start text-NavyLight font-medium">
                      +965
                      <span>{orgById?.phone_number}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 justify-center mt-2">
                    <div className="flex items-center gap-2 text-NavyLight text-start font-bold">
                      <Mail size={20} />
                      Email
                    </div>
                    <div className="text-start text-NavyLight font-medium">
                      {orgById?.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Org Liceense  */}
            <div className="w-[90%] h-[400px] md:max-h-screen pt-4 ">
              <div className="bg-white w-full h-[100%] flex flex-col text-center gap-4 rounded-lg p-4 ">
                <div className="relative text-NavyMain bg-[rgb(206,206,206)] py-2 rounded-md text-2xl text-center font-semibold">
                  Organization license
                </div>

                <div className="relative w-full min-h-[70%] overflow-y-scroll overflow-hidden no-scrollbar group">
                  <img
                    className="relative opacity-100 block w-full h-auto transition-opacity ease-backface-visibility:hidden group-hover:opacity-50"
                    src={`${BASE_URL}/${orgById?.license}`}
                    alt="SVG"
                  />
                  <div className="sticky bottom-[40%] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                    <div
                      onClick={handleOpenImageModal}
                      className="hover:cursor-pointer bg-black bg-opacity-90 text-white text-center text-base p-4 rounded-md"
                    >
                      Read More
                    </div>
                  </div>
                </div>
                {orgById?.isAccepted == "Accepted" ? (
                  <div
                    onClick={Block}
                    className=" border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white gap-3 w-[100px] h-[30px] text-center rounded-full flex justify-center font-semibold items-center border-2 cursor-pointer"
                  >
                    Block
                    <span>
                      <Ban
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={UnBlock}
                    className=" border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white gap-3 w-[100px] h-[30px] text-center rounded-full flex justify-center font-semibold items-center border-2 cursor-pointer"
                  >
                    UnBlock
                    <span>
                      <Ban
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Div Number 2  Events and Volunteers*/}
          <div className=" h-full md:h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
            <CreateEventSearchBar />
            <TotalEventsAndUsersFilter
              orgById={orgById}
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
                <div className=" w-full h-[70%] flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <CurrentEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                    <PastEventItem />
                  </div>
                </div>
              </>
            ) : (
              <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AcceptedUserItem handleOpenModal={handleOpenModal} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showImageModal && (
        <ImageModal
          imageUrl={`${BASE_URL}/${orgById?.license}`}
          handleCloseImageModal={handleCloseImageModal}
        />
      )}
    </div>
  );
};

export default OrgDetails;
