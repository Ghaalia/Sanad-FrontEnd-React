// import React, { useState } from "react";
// import AcceptedOrgItem from "../components/organizations.js/AcceptedOrgItem";
// import { ClipboardList, Delete } from "lucide-react";
// import AcceptedOrgSearchBar from "../components/organizations.js/AcceptedOrgSearchBar";
// import DeletedOrgItem from "../components/organizations.js/DeletedOrgItem";
// import RejectedOrgSearchBar from "../components/organizations.js/RejectedOrgSearchBar";
// import { useQuery } from "@tanstack/react-query";
// import { getAllOrganizations } from "../api/organization";

// const AllOrganizations = () => {
//   const [acceptClicked, setAcceptClicked] = useState(true);
//   const [deletedClicked, setDeletedClicked] = useState(false);
//   const [acceptedSearchQuery, setAcceptedSearchQuery] = useState("");
//   const [rejectedSearchQuery, setRejectedSearchQuery] = useState("");

//   const { data: organizations, isLoading: isLoading } = useQuery({
//     queryKey: ["organizations"],
//     queryFn: () => getAllOrganizations(),
//   });

//   if (isLoading) return <p className="text-white">Loading ...</p>;

//   const handleAcceptClick = () => {
//     setAcceptClicked(true);
//     setDeletedClicked(false);
//   };

//   const handleDeletedClick = () => {
//     setDeletedClicked(true);
//     setAcceptClicked(false);
//   };

//   const handleAcceptedSearch = (query) => {
//     setAcceptedSearchQuery(query);
//   };

//   const handleRejectedSearch = (query) => {
//     setRejectedSearchQuery(query);
//   };

//   const filteredAcceptedOrganizations = organizations.filter(
//     (org) =>
//       org.name.toLowerCase().includes(acceptedSearchQuery.toLowerCase()) &&
//       org.isAccepted === "Accepted" &&
//       !org.isAdmin
//   );

//   const filteredRejectedOrganizations = organizations.filter(
//     (org) =>
//       org.name.toLowerCase().includes(rejectedSearchQuery.toLowerCase()) &&
//       org.isAccepted === "Rejected" &&
//       !org.isAdmin
//   );

//   return (
//     <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
//       <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
//         <h1 className="text-white font-semibold text-2xl pb-4">All Partners</h1>
//         <div className="w-full flex flex-col gap-4 md:flex-row items-center">
//           <div className="w-full md:w-[600px] flex flex-row gap-4 shadow-sm shadow-black rounded-full p-1 items-center">
//             <div
//               className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
//                 acceptClicked
//                   ? "bg-RedMain border-RedMain text-white"
//                   : "border-transparent text-[#4D497D]"
//               }`}
//               onClick={handleAcceptClick}
//             >
//               Accepted
//               <span>
//                 <ClipboardList
//                   color={acceptClicked ? "white" : "#4D497D"}
//                   size={20}
//                   strokeWidth={2}
//                 />
//               </span>
//             </div>
//             <div
//               className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
//                 deletedClicked
//                   ? "bg-RedMain border-RedMain text-white"
//                   : "border-transparent text-[#4D497D]"
//               }`}
//               onClick={handleDeletedClick}
//             >
//               Rejected
//               <span>
//                 <Delete
//                   color={deletedClicked ? "white" : "#4D497D"}
//                   size={20}
//                   strokeWidth={2}
//                 />
//               </span>
//             </div>
//           </div>
//           {acceptClicked ? (
//             <AcceptedOrgSearchBar onSearch={handleAcceptedSearch} />
//           ) : (
//             <RejectedOrgSearchBar onSearch={handleRejectedSearch} />
//           )}
//         </div>
//         {acceptClicked ? (
//           <div className="w-full h-[350px] md:h-[450px] overflow-y-scroll no-scrollbar">
//             <div className="grid grid-row-1 md:grid-row-2 gap-3 ">
//               {filteredAcceptedOrganizations.map((el, index) => (
//                 <AcceptedOrgItem
//                   organization={el}
//                   key={`organization-${index}`}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="w-full h-[350px] md:h-[450px] overflow-y-scroll no-scrollbar">
//             <div className="grid grid-row-1 md:grid-row-2 gap-3">
//               {filteredRejectedOrganizations.map((el, index) => (
//                 <DeletedOrgItem
//                   organization={el}
//                   key={`organization-${index}`}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllOrganizations;

import React, { useState } from "react";
import AcceptedOrgItem from "../components/organizations.js/AcceptedOrgItem";
import { ClipboardList, Delete } from "lucide-react";
import AcceptedOrgSearchBar from "../components/organizations.js/AcceptedOrgSearchBar";
import DeletedOrgItem from "../components/organizations.js/DeletedOrgItem";
import RejectedOrgSearchBar from "../components/organizations.js/RejectedOrgSearchBar";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizations } from "../api/organization";

const AllOrganizations = () => {
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [deletedClicked, setDeletedClicked] = useState(false);
  const [acceptedSearchQuery, setAcceptedSearchQuery] = useState("");
  const [rejectedSearchQuery, setRejectedSearchQuery] = useState("");

  const { data: organizations, isLoading: isLoading } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => getAllOrganizations(),
  });

  if (isLoading) return <p className="text-white">Loading ...</p>;

  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setDeletedClicked(false);
    setRejectedSearchQuery(""); // Clear rejected search query
  };

  const handleDeletedClick = () => {
    setDeletedClicked(true);
    setAcceptClicked(false);
    setAcceptedSearchQuery(""); // Clear accepted search query
  };

  const handleAcceptedSearch = (query) => {
    setAcceptedSearchQuery(query);
  };

  const handleRejectedSearch = (query) => {
    setRejectedSearchQuery(query);
  };

  const filteredAcceptedOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(acceptedSearchQuery.toLowerCase()) &&
      org.isAccepted === "Accepted" &&
      !org.isAdmin
  );

  const filteredRejectedOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(rejectedSearchQuery.toLowerCase()) &&
      org.isAccepted === "Rejected" &&
      !org.isAdmin
  );

  return (
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl pb-4">All Partners</h1>
        <div className="w-full flex flex-col gap-4 md:flex-row items-center">
          <div className="w-full md:w-[600px] flex flex-row gap-4 shadow-sm shadow-black rounded-full p-1 items-center">
            <div
              className={`w-full h-[40px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                acceptClicked
                  ? "bg-RedMain border-RedMain text-white"
                  : "border-transparent text-[#4D497D]"
              }`}
              onClick={handleAcceptClick}
            >
              Accepted
              <span>
                <ClipboardList
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
              Rejected
              <span>
                <Delete
                  color={deletedClicked ? "white" : "#4D497D"}
                  size={20}
                  strokeWidth={2}
                />
              </span>
            </div>
          </div>
          {acceptClicked ? (
            <AcceptedOrgSearchBar onSearch={handleAcceptedSearch} />
          ) : (
            <RejectedOrgSearchBar onSearch={handleRejectedSearch} />
          )}
        </div>
        {acceptClicked ? (
          <div className="w-full h-[350px] md:h-[450px] overflow-y-scroll no-scrollbar">
            <div className="grid grid-row-1 md:grid-row-2 gap-3 ">
              {filteredAcceptedOrganizations.map((el, index) => (
                <AcceptedOrgItem
                  organization={el}
                  key={`organization-${index}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-[350px] md:h-[450px] overflow-y-scroll no-scrollbar">
            <div className="grid grid-row-1 md:grid-row-2 gap-3">
              {filteredRejectedOrganizations.map((el, index) => (
                <DeletedOrgItem
                  organization={el}
                  key={`organization-${index}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrganizations;
