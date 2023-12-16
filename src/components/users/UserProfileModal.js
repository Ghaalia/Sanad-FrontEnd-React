import React, { useState } from "react";
import defaultProfilePhoto from "../../assets/all-users/default-profile.svg";
import {
  Mail,
  Phone,
  XCircle,
  Check,
  X,
  CheckCheck,
  Ban,
  Undo2,
} from "lucide-react";
import { BASE_URL } from "../../api";
import AgeCalculation from "./AgeCalculation";
import { useMutation } from "@tanstack/react-query";
import { userBlockById } from "../../api/users";

const UserProfileModal = ({
  userById,
  showUserProfileModal,
  handleAcceptedUser,
  handleRejectedUser,
  acceptedUserShow,
  rejectedUserShow,
  handleCloseModal,
}) => {
  const age = AgeCalculation(userById?.dob);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const { mutate: block, isPending } = useMutation({
    mutationKey: ["block"],
    mutationFn: () => userBlockById(userById),
    onSuccess: () => {
      //Close modal
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
  // const profielImage = async (user) => {
  //   if (!userById?.image.includes("http")) {
  //     return `${BASE_URL}${userById?.image}`;
  //   } else {
  //     return "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg";
  //   }
  // };
  // const profileImage = async (userById) => {
  //   if (!(userById?.image && userById?.image.includes("http"))) {
  //     return `${BASE_URL}${userById?.image}`;
  //   } else {
  //     return "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg";
  //   }
  // };
  // const profileImage = async (userById) => {
  //   if (!(userById?.image && userById?.image.includes("http"))) {
  //     return `${BASE_URL}${userById?.image}`;
  //   } else {
  //     return "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg";
  //   }
  // };

  return (
    <div>
      {showUserProfileModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full h-screen absolute inset-0 flex justify-center items-center pt-[80px]">
          <div className="bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div className="shadow-md shadow-gray-400  rounded-xl bg-RedMain w-full h-[150px] flex relative ">
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={handleCloseModal}
              >
                <X
                  className="text-white hover:text-RedMain hover:bg-white hover:rounded-full "
                  size={20}
                  strokeWidth={1}
                />
              </div>
              <div className="w-full flex flex-col gap-4 text-center h-full items-center justify-center">
                <img
                  className="w-full  "
                  // src={
                  //   `${BASE_URL}/${userById?.image}` ||
                  //   "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                  // }
                  // src={
                  //   userById?.image
                  //     ? `${BASE_URL}/${userById.image}`
                  //     : "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                  // }
                  src={
                    userById?.image
                      ? `${BASE_URL}/${userById.image}`
                      : require(".././../assets/all-users/profileimg.png")
                  }
                  // src={userById?.image}
                  // src={profileImage}
                  // alt="UserProfile"
                  // src={profileImage(userById)}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                  <div className="text-white text-lg">
                    {userById?.first_name} {userById?.last_name}
                  </div>
                  <div className="flex gap-2  text-center">
                    <div className="text-white text-md ">Age</div>
                    <p className="font-semibold text-sm">{age}</p>
                  </div>

                  <div className="flex gap-2 text-center">
                    <div className="text-white text-md ">Gender</div>
                    <p className="font-semibold text-sm">
                      {userById?.gender?.toLowerCase() === "female"
                        ? "F"
                        : userById?.gender?.toLowerCase() === "male"
                        ? "M"
                        : "Undefined"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-3 px-4 py-4 ">
              <div className="flex gap-4">
                <div className="shadow-lg shadow-Gray3  flex w-[150px] h-[80px] justify-center text-NavyMain bg-Grey0 rounded-xl items-center">
                  <div className=" flex flex-col text-center text-white text-sm font-semibold gap-0">
                    <div className="text-Grey3 text-sm ">Worked for</div>
                    <div className="text-NavyMain font-semibold text-2xl">
                      4
                    </div>
                    <div className="text-Grey3 text-sm">Organisations</div>
                  </div>
                </div>
                <div className="shadow-lg shadow-Gray3 flex w-[150px] h-[80px] justify-center text-NavyMain bg-Grey0 rounded-xl items-center">
                  <div className="w-fit flex flex-col text-center text-white text-sm font-semibold">
                    <div className="text-Grey3 text-sm ">Total Volunteers</div>
                    <div className="text-NavyMain font-semibold text-2xl">
                      {userById?.volunteer_points}
                    </div>
                    <div className="text-Grey3 text-sm ">Times</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Phone Number</div>
                  <div className="font-semibold text-md">
                    +965 {userById?.phone_number}
                  </div>
                </div>
                <div className="w-[32px] h-[32px] border-2 border-RedMain rounded-full flex justify-center items-center">
                  <Phone size={20} strokeWidth={2} className="text-RedMain" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Email</div>
                  <div className="font-semibold text-md">{userById?.email}</div>
                </div>
                <div className="w-[32px] h-[32px] border-2 border-RedMain rounded-full flex justify-center items-center">
                  <Mail size={20} strokeWidth={2} className="text-RedMain" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Skills / Biography</div>
                  <div className="font-semibold text-md">
                    {userById?.skills}
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-NavyMain bg-opacity-40"></div>
              <div className="w-full h-fit flex flex-row gap-4 px-8 py-2">
                {userById?.isBlocked == "false" ? (
                  <div
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={() => {
                      handleRejectedUser();
                      handleButtonClick();
                    }}
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
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={() => {
                      handleRejectedUser();
                      handleButtonClick();
                    }}
                  >
                    UnBlock
                    <span>
                      <Undo2
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                )}
              </div>
              <>
                {rejectedUserShow ? (
                  <div className="w-full h-fit">
                    <label
                      htmlFor="description"
                      className="block text-Grey3 text-sm font-medium mb-2"
                    >
                      Reason of Rejection
                    </label>
                    <textarea
                      id="ReasonOfRejection"
                      // value={description}
                      // onChange={handleDesciptionChange}
                      className="w-full px-4 py-2 border border-[#cecece] rounded-md focus:outline-none focus:ring-1 focus:ring-[#910808]"
                      rows={6}
                    />
                  </div>
                ) : (
                  ""
                )}

                {isButtonClicked && (
                  <div
                    onClick={() => {
                      block();
                    }}
                    className="text-white flex justify-center items-center gap-2 w-full text-center rounded-full font-bold text-1xl p-2 pb-2 h-[50px] bg-NavyMain hover:bg-RedMain"
                  >
                    Confirm
                    <CheckCheck />
                  </div>
                )}
              </>
            </div>
          </div>
          <div />
        </div>
      )}
    </div>
  );
};

export default UserProfileModal;
