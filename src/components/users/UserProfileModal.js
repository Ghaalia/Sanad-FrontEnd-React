import React from "react";
import defaultProfilePhoto from "../../assets/all-users/default-profile.svg";
import { Mail, Phone, XCircle, Check, X, CheckCheck, Ban } from "lucide-react";
import { getUserById } from "../../api/users";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../api";
import AgeCalculation from "./AgeCalculation";

const UserProfileModal = ({
  userById,
  user,
  showUserProfileModal,
  handleAcceptedUser,
  handleRejectedUser,
  acceptedUserShow,
  rejectedUserShow,
  handleCloseModal,
}) => {
  const age = AgeCalculation(userById?.bod);
  return (
    <div>
      {showUserProfileModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full h-screen absolute inset-0 flex justify-center items-center pt-[80px]">
          <div className="bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div className="shadow-md shadow-gray-400  rounded-xl bg-RedMain w-full h-[200px] flex relative ">
              <div
                className="absolute top-1 right-1 cursor-pointer"
                onClick={handleCloseModal}
              >
                <XCircle color={"white"} size={28} strokeWidth={1.5} />
              </div>
              <div className="w-full flex flex-col gap-4 text-center h-full items-center justify-center">
                <img
                  className="w-full "
                  src={`${BASE_URL}/${userById?.image}`}
                  alt="UserProfile"
                />
                <div className="text-white font-semibold">
                  {/* {user.first_name} */}
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                  <div className="w-fit flex flex-col text-center text-white text-sm font-semibold">
                    <div>Worked for</div>
                    <div className="text-NavyMain font-bold text-[24px]">4</div>
                    <div>Organisations</div>
                  </div>
                  <div className="h-[1px] w-[100px] bg-NavyMain bg-opacity-40"></div>
                  <div className="w-fit flex flex-col text-center text-white text-sm font-semibold">
                    <div>Volunteered</div>
                    <div className="text-NavyMain font-bold text-[24px]">
                      {userById?.volunteer_points}
                    </div>
                    <div>Times</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-3 px-4 py-4 ">
              <div className="flex gap-8 justify-center text-NavyMain bg-Grey0 rounded-full py-1">
                <div className="flex flex-col text-center">
                  <div className="text-Grey3 text-sm ">Gender</div>
                  <p className="font-semibold">{userById?.gender}</p>
                </div>
                <div className="flex flex-col text-center">
                  <div className="text-Grey3 text-sm ">Age</div>
                  <p className="font-semibold">{age}</p>
                </div>
                {/* <div className="flex flex-col text-center">
                  <div className="text-Grey3 text-sm ">Gender</div>
                  <p className="font-semibold">Male</p>
                </div> */}
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
                <div
                  className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                  // ? "bg-RedMain border-RedMain text-white"
                  // : "border-[#cecece] text-[#cecece]"

                  onClick={handleRejectedUser}
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
                <button
                  // onClick={login_mutate}
                  type="submit"
                  className="text-white flex justify-center items-center gap-2 w-full text-center rounded-full font-bold text-1xl p-2 pb-2 h-[50px] bg-NavyMain hover:bg-RedMain"
                >
                  Confirm
                  <CheckCheck />
                </button>
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
