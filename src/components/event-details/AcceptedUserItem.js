import React from "react";
import { ArrowRight, CheckCircle, Circle } from "lucide-react";
import { parAttended } from "../../api/participation";
import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "../../api";

const AcceptedUserItem = ({
  refetch,
  setParticipation,
  handleOpenModal,
  Acceptedparticipation,
  handleCloseModal,
  HandelParticepantModal,
  showUserProfileModal,
  handleRejectedUser,
}) => {
  setParticipation(Acceptedparticipation);

  const { mutate: attendance } = useMutation({
    mutationKey: ["attendace"],
    mutationFn: () => parAttended(Acceptedparticipation),
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  return (
    <div
      // onClick={handleOpenModal}
      className="justify-between w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-full overflow-hidden shadow-md shadow-black"
    >
      <div className="flex gap-4">
        <div className="w-[80px] text-NavyMain h-[80px] rounded-full flex justify-center items-center text-center ">
          <img
            onClick={handleOpenModal}
            className="object-contain h-full w-full"
            src={
              Acceptedparticipation?.user?.image
                ? `${BASE_URL}/${Acceptedparticipation?.user?.image}`
                : require(".././../assets/all-users/profileimg.png")
            }
          />
        </div>
        <div className="flex flex-col justify-around">
          <div className="text-white font-semibold text-[18px]">
            {Acceptedparticipation?.user?.first_name}
            {Acceptedparticipation?.user?.last_name}
          </div>
          <div className="flex flex-col md:justify-between">
            <div className="text-white font-semibold text-[14px] flex gap-4 md:justify-start">
              <span className="flex items-center gap-1 justify-between">
                Gender - {Acceptedparticipation?.user?.gender}
              </span>
            </div>
            <div className="text-white text-opacity-50 font-normal text-xs flex gap-4">
              phone number: {Acceptedparticipation?.user?.phone_number}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          attendance();
        }}
        className=" w-fit h-full px-4 flex items-center"
      >
        {Acceptedparticipation?.attended == false ? (
          <Circle size={28} strokeWidth={2} color={"white"} />
        ) : (
          <CheckCircle size={28} strokeWidth={2} color={"white"} />
        )}
      </div>
    </div>
  );
};

export default AcceptedUserItem;
