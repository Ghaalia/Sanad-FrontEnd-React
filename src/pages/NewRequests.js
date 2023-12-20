import React, { useState } from "react";
import RequestCompanyItem from "../components/requests/RequestCompanyItem";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizations } from "../api/organization";
import RequestForm from "../components/requests/RequestForm";
import { Search } from "lucide-react";
import contract from "../assets/new-requests/contract.svg";
import AcceptModal from "../components/requests/AcceptModal";
import RejectModal from "../components/requests/RejectModal";
import RequestsUserItem from "../components/event-details/RequestsUseritem";
import ImageModal from "../components/profile/ImageModal";
import { BASE_URL } from "../api";

const NewRequests = () => {
  const [orgById, setOrgById] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: organizations,
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => getAllOrganizations(),
  });

  if (isLoading) return <p className="text-white">Loading ...</p>;

  const handleOpenImageModal = () => {
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
  };

  const handleCloseModal = () => {
    setShowAcceptModal(false);
  };

  const handleOpenModal = () => {
    setShowAcceptModal(true);
  };

  const handleCloseRejectionModal = () => {
    setShowRejectionModal(false);
  };

  const handleOpenRejectionModal = () => {
    setShowRejectionModal(true);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-w-screen min-h-screen bg-NavyMain md:px-[100px]">
      <div className="h-screen mt-[80px] grid md:grid-cols-2 grid-rows-2">
        <div className="h-full md:min-h-screen p-8 lg:p-11 flex flex-col gap-6 items-center">
          <h1 className="text-white font-semibold text-2xl">
            Organizations Requests
          </h1>
          <div className="text-white w-full h-[40px] md:h-[50px] flex items-center bg-white bg-opacity-30 p-2 rounded-full shadow-sm shadow-black ">
            <input
              type="text"
              id="search"
              className="text-white w-full h-full bg-transparent px-4 focus:outline-none"
              placeholder="Search for Organizations"
              onChange={handleSearch}
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
          <div className="w-full h-full flex flex-col overflow-y-scroll overflow-hidden no-scrollbar">
            <div className="flex flex-col gap-3">
              {filteredOrganizations
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

        <div>
          {openForm ? (
            <RequestForm
              orgById={orgById}
              setOpenForm={setOpenForm}
              handleOpenRejectionModal={handleOpenRejectionModal}
              handleOpenModal={handleOpenModal}
              handleOpenImageModal={handleOpenImageModal}
            />
          ) : (
            <img
              className="fixed w-[50%] max-h-[80%] top-36 right-5 object-contain"
              src={contract}
            />
          )}
        </div>
      </div>

      <AcceptModal
        setOpenForm={setOpenForm}
        showAcceptModal={showAcceptModal}
        handleCloseModal={handleCloseModal}
        orgById={orgById}
        refetch={refetch}
      />

      <RejectModal
        setOpenForm={setOpenForm}
        showRejectionModal={showRejectionModal}
        handleCloseRejectionModal={handleCloseRejectionModal}
        orgById={orgById}
        refetch={refetch}
      />

      {showImageModal && (
        <ImageModal
          imageUrl={`${BASE_URL}/${orgById?.license}`}
          handleCloseImageModal={handleCloseImageModal}
        />
      )}
    </div>
  );
};

export default NewRequests;
