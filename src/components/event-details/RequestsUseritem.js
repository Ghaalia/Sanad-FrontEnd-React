import React from "react";
import { PauseCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getParticipationsbyId } from "../../api/users";
import { BASE_URL } from "../../api";

const RequestsUserItem = ({
  refetch,

  handleOpenModal,
  Requetsparticipation,
  setParticipation,
}) => {
  console.log(Requetsparticipation);

  setParticipation(Requetsparticipation);
  return (
    <div
      onClick={handleOpenModal}
      className="w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-full overflow-hidden border border-1-white cursor-pointer"
    >
      <div className="bg-white w-[80px] text-NavyMain h-[80px] rounded-full text-sm p-6 flex justify-center items-center text-center ">
        <img
          src={
            Requetsparticipation?.user?.image
              ? `${BASE_URL}/${Requetsparticipation?.user?.image}`
              : require(".././../assets/all-users/profileimg.png")
          }
        />
      </div>
      <div className="flex w-full flex-col justify-around">
        <div className="text-white font-semibold text-[18px]">
          {Requetsparticipation?.user?.first_name}
          {Requetsparticipation?.user?.last_name}
        </div>
        <div className="flex flex-col md:justify-between">
          <div className="text-white font-semibold text-[14px] flex gap-4 md:justify-start">
            <span className="flex items-center gap-1 justify-between">
              Gender - {Requetsparticipation?.user?.gender}
            </span>
          </div>
          <div className="text-white text-opacity-50 font-normal text-xs flex gap-4">
            phone number: {Requetsparticipation?.user?.phone_number}
          </div>
        </div>
      </div>
      <div className=" w-fit h-full px-4 flex items-center">
        <PauseCircle size={28} strokeWidth={2} className="text-white" />
      </div>
    </div>
  );
};

export default RequestsUserItem;

// email: { type: String, required: true, unique: true },
// password: { type: String, required: true },
// first_name: { type: String },
// last_name: { type: String },
// gender: { type: String },
// civil_id: { type: String },
// dob: { type: String },
// phone_number: { type: Number, required: true },
// image: { type: String },
// // default: require("../media/user/profileimg.png")
// volunteer_events: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Participation",
//   },
// ],
// skills: { type: String },
// donation_album: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "DonationAlbum",
//   },
// ],
// volunteer_record: { type: Number },
// generated_link: { type: Number },
// volunteer_points: { type: Number },
