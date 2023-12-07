import React, { useEffect } from "react";
import RequestCompanyItem from "../components/requests/RequestCompanyItem";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizations } from "../api/organization";
import RequestForm from "../components/requests/RequestForm";
import { Search } from "lucide-react";
import contract from "../assets/new-requests/contract.svg";

const NewRequests = () => {
  const [orgById, setOrgById] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const { data: organizations, isLoading: isLoading } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => getAllOrganizations(),
  });

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="min-w-screen min-h-screen bg-NavyMain md:px-[100px]">
      <div className="h-screen mt-[80px] grid md:grid-cols-2 grid-rows-2">
        <div className="h-full md:min-h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
          <h1 className="text-white font-semibold text-2xl">
            Organizations Requests
          </h1>
          <div className="text-white w-full h-[40px] md:h-[50px] flex items-center border bg-white bg-opacity-30 p-2 rounded-full">
            <input
              type="text"
              id="search"
              className=" text-white w-full h-full bg-transparent px-4 focus:outline-none "
              placeholder="Search for Organizations"
              // onChange={handleSearch}
            />
            <span>
              <Search
                color="white"
                size={28}
                strokeWidth={2}
                className="bg-RedMain p-1 rounded-full"
              />
            </span>
          </div>
          <div className=" w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
            <div className="flex flex-col gap-3 ">
              {organizations
                .filter((el) => el.isAccepted === "Pending")
                .map((el, index) => (
                  <RequestCompanyItem
                    organization={el}
                    setOrgById={setOrgById}
                    setOpenForm={setOpenForm}
                    key={`organization-${index}`}
                  />
                ))}
            </div>
          </div>
        </div>
        {openForm ? (
          <div className="h-full md:min-h-screen p-8 ">
            <div className="w-full h-full flex flex-col text-center gap-4 bg-white rounded-lg p-4 overflow-y-scroll overflow-hidden no-scrollbar">
              <RequestForm orgById={orgById} setOpenForm={setOpenForm} />
            </div>
          </div>
        ) : (
          <img src={contract} />
        )}
      </div>
    </div>
  );
};

export default NewRequests;
