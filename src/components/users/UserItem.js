import React from "react";
import { MoreHorizontal } from "lucide-react";
import { BASE_URL } from "../../api";
import AgeCalculation from "./AgeCalculation";

const UserItem = ({ user, setUserById }) => {
  const age = AgeCalculation(user?.dob);
  // const profielImage = async (user) => {
  //   if (user.image.includes("http")) {
  //     return user.image;
  //   } else {
  //     return (user.image = `${BASE_URL}${user.image}`);
  //   }
  // };

  return (
    <div
      onClick={() => {
        setUserById(user);
      }}
      className="hover:cursor-pointer w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-full overflow-hidden shadow-md shadow-black "
    >
      <div className=" text-NavyMain w-[100px] h-full rounded-full  flex justify-center items-center text-center ">
        {/* User Profile */}
        <img
          className="object-contain h-full"
          src={
            user?.image
              ? `${BASE_URL}/${user.image}`
              : require("../../assets/all-users/profileimg.png")
          }
          alt="UserProfile"
        />
      </div>

      <div className="flex w-full flex-col justify-around">
        <div className="text-white font-semibold text-[18px]">
          {user?.first_name} {user?.last_name}
        </div>
        <div className="flex flex-col md:justify-between">
          <div className="text-white font-semibold text-[14px] flex gap-4 md:justify-start">
            <span className="flex items-center gap-1 justify-between">
              {/* Age - */}
              {age}
            </span>
            <span className="flex items-center gap-1 justify-between">
              {/* Gender - */}

              {user?.gender?.toLowerCase() == "female"
                ? "F"
                : user?.gender?.toLowerCase() == "male"
                ? "M"
                : "Undefined"}
            </span>
          </div>
          <div className="text-white text-opacity-50 font-normal text-xs flex gap-4">
            Joined: 22 / 2 / 2024
            <span>Time: 4:00 PM</span>
          </div>
        </div>
      </div>
      <div className=" w-fit h-full px-3 flex items-center">
        <MoreHorizontal color="white" size={25} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default UserItem;
