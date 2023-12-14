// DraftEventItem.js
import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const DraftEventItem = ({ event }) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = () => {
    navigate(`/profile/${event?._id}`);
  };

  return (
    <div onClick={handleViewDetailsClick}>
      <div className="w-full h-[200px] flex flex-col bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black">
        <div className="bg-white w-full text-NavyMain h-[80%] text-sm  flex justify-center items-center text-center ">
          <img
            className="w-[100%]"
            src={`${event?.event_image}`}
            alt={event?.event_title}
          />
        </div>
        <div className="flex w-full h-[20%] justify-between px-8 items-center">
          <div className="text-white font-semibold text-[18px]">
            {event?.event_title}
          </div>
          <div>
            <div className="text-white font-semibold text-[14px] flex gap-4 justify-between">
              <span className="flex items-center gap-1 justify-between">
                View Details
              </span>
              <div className=" w-fit h-full flex items-center">
                <ArrowRight size={28} strokeWidth={2} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftEventItem;

// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { Link, NavLink } from "react-router-dom";
// import EventDetails from "../../pages/EventDetails";
// import { useNavigate } from "react-router-dom";

// const DraftEventItem = ({ event }) => {
//   const navigate = useNavigate();
//   const eventId = event?._id;

//   const handleViewDetailsClick = () => {
//     navigate(`/handling_par_reqs/${eventId}`);
//   };
//   return (
//     <div onClick={handleViewDetailsClick}>
//       <div className="w-full h-[200px] flex flex-col  bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black">
//         <div className="bg-white w-full text-NavyMain h-[80%] text-sm  flex justify-center items-center text-center ">
//           <img className="w-[100%]" src={`${event?.event_image}`} />
//         </div>
//         <div className="flex w-full h-[20%] justify-between px-8 items-center">
//           <div className="text-white font-semibold text-[18px]">
//             {event?.event_title}
//           </div>
//           <div className="text-white font-semibold text-[14px] flex gap-4 justify-between">
//             <NavLink onClick={handleViewDetailsClick}>
//               <span className="flex items-center gap-1 justify-between">
//                 View Details
//               </span>
//             </NavLink>

//             <div className=" w-fit h-full flex items-center">
//               <ArrowRight size={28} strokeWidth={2} className="text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DraftEventItem;
