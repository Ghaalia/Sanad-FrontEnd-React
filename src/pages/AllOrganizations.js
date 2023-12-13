import React from "react";
import AcceptedOrgItem from "../components/organizations.js/AcceptedOrgItem";
import { ClipboardList, Delete } from "lucide-react";
import { useState } from "react";
import AcceptedOrgSearchBar from "../components/organizations.js/AcceptedOrgSearchBar";
import DeletedOrgItem from "../components/organizations.js/DeletedOrgItem";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizations } from "../api/organization";

const AllOrganizations = () => {
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [deletedClicked, setDeletedClicked] = useState(false);
  const [AcceptedShow, setAcceptedShow] = useState(false);

  const { data: organizations, isLoading: isLoading } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => getAllOrganizations(),
  });
  if (isLoading) return <p className="text-white">Loading ...</p>;

  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setDeletedClicked(false);
    setAcceptedShow(true);
  };

  const handleDeletedClick = () => {
    setDeletedClicked(true);
    setAcceptClicked(false);
  };

  return (
    <div className="bg-NavyMain min-h-screen pt-[80px] md:px-[120px]">
      <div className="w-full h-full pt-8 px-8 flex flex-col gap-4 items-center">
        <h1 className="text-white font-semibold text-2xl pb-4">All Partners</h1>
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
          <AcceptedOrgSearchBar />
        </div>
        {acceptClicked ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            {organizations
              ?.filter((el) => el.isAccepted === "Accepted")
              ?.map((el, index) => (
                <AcceptedOrgItem
                  organization={el}
                  key={`organization-${index}`}
                />
              ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            {organizations
              ?.filter((el) => el.isAccepted === "Rejected")
              ?.map((el, index) => (
                <DeletedOrgItem
                  organization={el}
                  key={`organization-${index}`}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllOrganizations;
