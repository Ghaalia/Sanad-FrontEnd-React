import React from "react";
import { BookCheck, BookX } from "lucide-react";
import { useState } from "react";
import UsersSearchBar from "../components/users/SignedUsersSearchBar";
import UserItem from "../components/users/UserItem";
import DeletedUserItem from "../components/users/DeletedUserItem";
import UserProfileModal from "../components/users/UserProfileModal";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/users";
import SignedUsersSearchBar from "../components/users/SignedUsersSearchBar";
import BlockedUsersSearchBar from "../components/users/BlockedUsersSearchBar";

const AllUsers = () => {
  const [userById, setUserById] = useState(null);
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [deletedClicked, setDeletedClicked] = useState(false);
  const [acceptedUserShow, setAcceptedUserShow] = useState(false);
  const [rejectedUserShow, setRejectedUserShow] = useState(false);
  const [showRejectionReason, setShowRejectionReason] = useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [signedSearchQuery, setSignedSearchQuery] = useState("");
  const [bannedSearchQuery, setBannedSearchQuery] = useState("");

  const {
    data: users,
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  if (isLoading) return <p className="text-white">Loading ...</p>;

  //Handle signed-in users
  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setDeletedClicked(false);
    setSignedSearchQuery("");
  };

  //Handle banned users
  const handleDeletedClick = () => {
    setDeletedClicked(true);
    setAcceptClicked(false);
    setBannedSearchQuery("");
  };

  //User Profile Modal (accept / reject) buttons
  const handleRejectedUser = () => {
    setRejectedUserShow(true);
    setAcceptedUserShow(false);
    setShowRejectionReason(true);
  };

  //Inside Modal: This function is to let you either click accept or reject not both
  const handleAcceptedUser = () => {
    setAcceptedUserShow(true);
    setRejectedUserShow(false);
  };

  //Handle the user profile modal : OFF
  const handleCloseModal = () => {
    setShowUserProfileModal(false);
  };

  //Handle the user profile modal : ON
  const handleOpenModal = () => {
    setShowUserProfileModal(true);
  };

  const handleSignedSearch = (query) => {
    setSignedSearchQuery(query);
  };

  const handleBannedSearch = (query) => {
    setBannedSearchQuery(query);
  };

  const filteredSignedUsers = users.filter(
    (user) =>
      (user.first_name || user.last_name)
        .toLowerCase()
        .includes(signedSearchQuery.toLowerCase()) && user.isBlocked === "false"
  );

  const filteredBannedUsers = users.filter(
    (user) =>
      (user.first_name || user.last_name)
        .toLowerCase()
        .includes(bannedSearchQuery.toLowerCase()) && user.isBlocked === "true"
  );

  return (
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px] flex justify-center">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl pb-4">All Users</h1>
        <div className="w-full flex flex-col gap-4 md:flex-row items-center">
          <div className="w-full h-[50px] flex flex-row gap-4  md:w-[600px] shadow-sm shadow-black rounded-full p-1 items-center">
            <div
              className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                acceptClicked
                  ? "bg-RedMain border-RedMain text-white"
                  : "border-transparent text-[#4D497D]"
              }`}
              onClick={handleAcceptClick}
            >
              Signed
              <span>
                <BookCheck
                  color={acceptClicked ? "white" : "#4D497D"}
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
              onClick={handleDeletedClick}
            >
              Banned
              <span>
                <BookX
                  color={deletedClicked ? "white" : "#4D497D"}
                  size={20}
                  strokeWidth={2}
                />
              </span>
            </div>
          </div>
          {acceptClicked ? (
            <SignedUsersSearchBar onSearch={handleSignedSearch} />
          ) : (
            <BlockedUsersSearchBar onSearch={handleBannedSearch} />
          )}
        </div>
        {acceptClicked ? (
          <div
            onClick={handleOpenModal}
            className="w-full grid grid-row-1 md:grid-row-3 gap-3 overflow-y-auto max-h-[450px] scroll-y-overflow no-scrollbar"
          >
            {filteredSignedUsers.map((el, index) => (
              <UserItem
                user={el}
                key={`uesers-${index}`}
                setUserById={setUserById}
              />
            ))}
          </div>
        ) : (
          <div
            onClick={handleOpenModal}
            className="w-full grid grid-row-1 md:grid-row-3 gap-3 overflow-y-auto max-h-[450px] scroll-y-overflow no-scrollbar"
          >
            {filteredBannedUsers.map((el, index) => (
              <DeletedUserItem
                user={el}
                key={`uesers-${index}`}
                setUserById={setUserById}
              />
            ))}
          </div>
        )}
      </div>

      <UserProfileModal
        refetch={refetch}
        userById={userById}
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

export default AllUsers;
