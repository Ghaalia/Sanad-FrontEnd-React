import React, { useState } from "react";
import { BASE_URL } from "../../api";
import AgeCalculation from "./AgeCalculation";
import { useMutation } from "@tanstack/react-query";
import { userBlockById, userUnBlockedById } from "../../api/users";
import { Ban, Phone, Mail, Undo2, X, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfileModal = ({
  userById,
  showUserProfileModal,
  handleCloseModal,
  refetch,
}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const age = AgeCalculation(userById?.dob);

  const { mutate: block } = useMutation({
    mutationKey: ["block"],
    mutationFn: () => userBlockById(userById),
    onSuccess: () => {
      handleCloseModal();
      refetch();
      toast.success("Block done successfully!", {
        style: { background: "white", color: "NavyMain" },
        progressStyle: { background: "#FF0000" },
        icon: <Ban size={24} strokeWidth={2} color="#FF0000" />,
      });
    },
  });

  const { mutate: Unblock } = useMutation({
    mutationKey: ["Unblock"],
    mutationFn: () => userUnBlockedById(userById),
    onSuccess: () => {
      handleCloseModal();
      refetch();
      toast.success("UnBlock done successfully!", {
        style: { background: "white", color: "NavyMain" },
        progressStyle: { background: "#4CAF50" },
        icon: <CheckCircle size={24} strokeWidth={2} color="#4CAF50" />,
      });
    },
  });

  const openConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

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
                  className="w-[100px] "
                  src={
                    userById?.image
                      ? `${BASE_URL}/${userById.image}`
                      : require(".././../assets/all-users/profileimg.png")
                  }
                  alt="Profile"
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
                {userById?.isBlocked === "false" ? (
                  <div
                    className="border-[#cecece] text-[#cecece] hover:bg-RedMain hover:border-RedMain hover:text-white w-full h-[30px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer"
                    onClick={openConfirmationModal}
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
                    onClick={openConfirmationModal}
                  >
                    Unblock
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

              {isConfirmationModalOpen && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-md shadow-md">
                    <p>
                      Are you sure you want to{" "}
                      {userById?.isBlocked === "false" ? "block" : "unblock"}{" "}
                      this user?
                    </p>
                    <div className="flex justify-end gap-4 mt-4">
                      <button
                        onClick={() => {
                          if (userById?.isBlocked === "false") {
                            block();
                          } else {
                            Unblock();
                          }
                          closeConfirmationModal();
                        }}
                        className="text-white bg-NavyMain px-4 py-2 rounded-full"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={closeConfirmationModal}
                        className="text-NavyMain border border-NavyMain px-4 py-2 rounded-full"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div />
        </div>
      )}
    </div>
  );
};

export default UserProfileModal;
