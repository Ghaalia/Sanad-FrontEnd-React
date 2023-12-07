import React, { useState } from "react";
import { Search, ThumbsUp, ThumbsDown, Send } from "lucide-react";
import contract from "../../assets/new-requests/contract-org.svg";
import AcceptModal from "./AcceptModal";
import RejectModal from "./RejectModal";
import { BASE_URL } from "../../api";

const RequestForm = ({ orgById, setOpenForm }) => {
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [rejectClicked, setRejectClicked] = useState(false);
  const [reasonShow, setReasonShow] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState();
  const [showRejectionModal, setShowRejectionModal] = useState();
  // const [isAccepted, setIsAccepted] = useState(orgById);

  // console.log(isAccepted);

  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setRejectClicked(false);
  };

  const handleRejectClick = () => {
    setRejectClicked(true);
    setAcceptClicked(false);
    setReasonShow(true);
  };

  //Handle the Accept modal : OFF
  const handleCloseModal = () => {
    setShowAcceptModal(false);
  };

  //Handle the Accept modal : ON
  const handleOpenModal = () => {
    setShowAcceptModal(true);
  };

  //Handle the Rejection  modal : OFF
  const handleCloseRejectionModal = () => {
    setShowRejectionModal(false);
  };

  //Handle the Rejection modal : ON
  const handleOpenRejectionModal = () => {
    setShowRejectionModal(true);
  };

  return (
    <div>
      <div className="text-NavyMain bg-[rgb(206,206,206)] py-2 rounded-md text-2xl text-center font-semibold">
        {/* Company Name */}

        {orgById ? orgById.name : "Company Name"}
      </div>
      <div className="w-full h-fit">
        <img
          className="w-full"
          src={`${BASE_URL}/${orgById?.license}`}
          alt="SVG"
        />
      </div>
      <div className="w-full h-full bg-white flex flex-row gap-4 px-8 py-2 md:px-20">
        <div
          className={`w-full h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
            acceptClicked
              ? "bg-RedMain border-RedMain text-white"
              : "border-[#cecece] text-[#cecece]"
          }`}
          onClick={handleOpenModal}
        >
          Accept
          <span>
            <ThumbsUp
              color={acceptClicked ? "white" : "#cecece"}
              size={20}
              strokeWidth={2}
            />
          </span>
        </div>
        <div
          className={`w-full h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
            rejectClicked
              ? "bg-RedMain border-RedMain text-white"
              : "border-[#cecece] text-[#cecece]"
          }`}
          onClick={handleOpenRejectionModal}
        >
          Reject
          <span>
            <ThumbsDown
              color={rejectClicked ? "white" : "#cecece"}
              size={20}
              strokeWidth={2}
            />
          </span>
        </div>
      </div>

      <AcceptModal
        setOpenForm={setOpenForm}
        showAcceptModal={showAcceptModal}
        handleCloseModal={handleCloseModal}
        orgById={orgById}
      />

      <RejectModal
        setOpenForm={setOpenForm}
        showRejectionModal={showRejectionModal}
        handleCloseRejectionModal={handleCloseRejectionModal}
        orgById={orgById}
      />

      {/* {rejectClicked ? (
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-NavyMain text-sm font-medium mb-2"
          >
            Reason of Rejection
          </label>
          <textarea
            id="ReasonOfRejection"
            // value={description}
            // onChange={handleDesciptionChange}
            className="w-full px-4 py-2 border border-[#cecece] rounded-md focus:outline-none focus:ring-1 focus:ring-[#910808]"
            rows={4}
          />
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex justify-center items-center pt-4">
        <div
          // onClick={login_mutate}
          type="submit"
          className="text-white flex justify-center items-center gap-4 w-full text-center rounded-full font-semibold text-2xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
        >
          Send
          <span className="flex items-center pr-2">
            <Send size={24} strokeWidth={1.5} className="text-white" />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default RequestForm;
