import React, { useState } from "react";
import { useQuery } from "react-query";
import CreateEventSearchBar from "../components/create-event/CreateEventSearchBar";
import DraftEventDetails from "../components/create-event/DraftEventDetails";
import RequestsAndAccepted from "../components/event-details/RequestsAndAccepted";
import RequestsUserItem from "../components/event-details/RequestsUseritem";
import UserProfileModal from "../components/users/UserProfileModal";

const EventDetails = () => {
  const { eventId } = useParams();

  //geteventbyID

  const { data: event, isLoading: isLoading } = useQuery({
    queryKey: ["event"],
    queryFn: () => getOneEvent(eventId),
  });

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  //console.log(users);

  // const { data: par1 } = useQuery({
  //   queryKey: ["par1"],
  //   queryFn: () => getParticipationsByUser(userId),
  // });
  // console.log("par1");
  // console.log(par1);

  // const parId = event?.volunteer_list[0] || [];
  // console.log(event?.volunteer_list);
  // console.log("parId is :");
  // console.log(parId);

  // const { data: participationObj } = useQuery({
  //   queryKey: ["participationObj"],
  //   queryFn: () => getParticipationsbyId(parId),
  // });

  // const { data: participationObj } = useQuery(
  //   ["participationObj", { parId }], // Set a unique query key based on parId
  //   () => getParticipationsbyId({ parId }), // Provide the query function
  //   {
  //     enabled: !!parId, // Enable the query only when parId is truthy
  //   }
  // );

  // console.log("participationObj");
  // console.log(participationObj?.user);
  // console.log(participationObj?.status);

  //console.log("event?.volunteer_list[0]");
  //console.log(event?.volunteer_list[0]);
  //console.log(event?.volunteer_list);
  // console.log("event?.volunteer_list[1]");
  // console.log(event?.volunteer_list[1]);
  //  const c = await event?.map((el, index) => (
  //     <RequestsUserItem event={el} key={`participation-${index}`} />
  //   ));

  const [requests, setRequests] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const [participationId, setParticipationId] = useState(null);

  // Example useQuery for fetching event details
  const { data: currentEvent } = useQuery(
    ["event", currentEventId],
    fetchEventById
  );

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

  // console.log("volunteer listttttt num 1");
  // console.log(event?.volunteer_list[0]?._id?.status);
  // //undefind
  // const c = event?.volunteer_list.map((participation) => (
  //   <RequestsUserItem id={_id} key={`event-${index}`} />
  // ));

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

                {event?.volunteer_list?.map((el, index) => (
                  <RequestsUserItem
                    eventId={eventId}
                    participation={el}
                    key={`event-${index}`}
                  />
                ))}

                {/*     event={el} key={`organization-${index}`}
                 <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} />
                <RequestsUserItem handleOpenModal={handleOpenModal} /> */}
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
