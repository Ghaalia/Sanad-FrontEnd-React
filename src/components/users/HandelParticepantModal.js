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
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { BASE_URL } from "../../api";
import AgeCalculation from "./AgeCalculation";
import { useMutation } from "@tanstack/react-query";
import { userBlockById } from "../../api/users";
import { parApproveById, parRejectById } from "../../api/participation";

const HandelParticepantModal = ({
  refetch,
  participation,
  showUserProfileModal,
  handleAcceptedUser,
  handleRejectedUser,
  acceptedUserShow,
  rejectedUserShow,
  handleCloseModal,
}) => {
  const age = AgeCalculation(participation?.user?.dob);
  const [isButtonClicked, setButtonClicked] = useState(false);
  console.log(participation?.user?.gender);

  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const { mutate: accept } = useMutation({
    mutationKey: ["accept"],
    mutationFn: () => parApproveById(participation),
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  const { mutate: reject, isPending } = useMutation({
    mutationKey: ["reject"],
    mutationFn: () => parRejectById(participation),
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
  console.log("userById is vvv");
  console.log(participation?.user?._id);
  return (
    <div>
      {showUserProfileModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full h-screen absolute inset-0 flex justify-center items-center pt-[80px]">
          <div className="bg-white h-[72%] w-[350px] relative rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div className="shadow-md shadow-gray-400  rounded-xl bg-RedMain w-full h-[150px] flex relative ">
              <div
                className="sticky top-0 z-50 cursor-pointer"
                onClick={handleCloseModal}
              >
                <X
                  className="text-white hover:text-RedMain hover:bg-white hover:rounded-full fixed top-0 z-50  "
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
                    participation?.user?.image
                      ? `${BASE_URL}/${participation?.user?.image}`
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
                    {participation?.user?.first_name}{" "}
                    {participation?.user?.last_name}
                  </div>
                  <div className="flex gap-2  text-center">
                    <div className="text-white text-md ">Age</div>
                    <p className="font-semibold text-sm">{age}</p>
                  </div>

                  <div className="flex gap-2 text-center">
                    <div className="text-white text-md ">Gender</div>
                    <p className="font-semibold text-sm">
                      {participation?.user?.gender?.toLowerCase() === "female"
                        ? "F"
                        : participation?.user?.gender?.toLowerCase() === "male"
                        ? "M"
                        : "Undefined"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-3 px-4 py-4 ">
              <div className="flex gap-4">
                <div className="shadow-lg shadow-Gray3  flex w-[150px] h-[80px] justify-center text-NavyMain bg-Grey0 rounded-xl items-center"></div>
                <div className="shadow-lg shadow-Gray3 flex w-[150px] h-[80px] justify-center text-NavyMain bg-Grey0 rounded-xl items-center">
                  <div className="w-fit flex flex-col text-center text-white text-sm font-semibold">
                    <div className="text-Grey3 text-sm ">Total Volunteers</div>
                    <div className="text-NavyMain font-semibold text-2xl">
                      {participation?.user?.volunteer_points || 0}
                    </div>
                    <div className="text-Grey3 text-sm ">Times</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Phone Number</div>
                  <div className="font-semibold text-md">
                    +965 {participation?.user?.phone_number}
                  </div>
                </div>
                <div className="w-[32px] h-[32px] border-2 border-RedMain rounded-full flex justify-center items-center">
                  <Phone size={20} strokeWidth={2} className="text-RedMain" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Email</div>
                  <div className="font-semibold text-md">
                    {participation?.user?.email}
                  </div>
                </div>
                <div className="w-[32px] h-[32px] border-2 border-RedMain rounded-full flex justify-center items-center">
                  <Mail size={20} strokeWidth={2} className="text-RedMain" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-NavyMain">
                  <div className="text-Grey3 text-sm ">Skills / Biography</div>
                  <div className="font-semibold text-md">
                    {participation?.user?.skills}
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-NavyMain bg-opacity-40"></div>

              {participation?.status === "Accepted" ? (
                <div className="w-full h-fit flex flex-row gap-4 px-8 py-2">
                  <div
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={() => {
                      reject();
                      handleButtonClick();
                      handleCloseModal();
                    }}
                  >
                    Reject
                    <span>
                      <ThumbsDown
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-fit flex flex-row gap-4 px-8 py-2">
                  <div
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={() => {
                      accept();
                      handleButtonClick();
                      handleCloseModal();
                    }}
                  >
                    Accepte
                    <span>
                      <ThumbsUp
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  <div
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={() => {
                      reject();
                      handleButtonClick();
                      handleCloseModal();
                    }}
                  >
                    Reject
                    <span>
                      <ThumbsDown
                        className="text-cecece hover:text-white"
                        size={20}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              )}

              <></>
            </div>
          </div>
          <div />
        </div>
      )}
    </div>
  );
};

export default HandelParticepantModal;

// {userById?.isBlocked == "false" ? (
//     <div
//       className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
//       onClick={() => {
//         handleRejectedUser();
//         handleButtonClick();
//       }}
//     >
//       Block
//       <span>
//         <Ban
//           className="text-cecece hover:text-white"
//           size={20}
//           strokeWidth={2}
//         />
//       </span>
//     </div>
//   ) : (
//     <div
//       className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
//       onClick={() => {
//         handleRejectedUser();
//         handleButtonClick();
//       }}
//     >
//       UnBlock
//       <span>
//         <Undo2
//           className="text-cecece hover:text-white"
//           size={20}
//           strokeWidth={2}
//         />
//       </span>
//     </div>
//   )}
