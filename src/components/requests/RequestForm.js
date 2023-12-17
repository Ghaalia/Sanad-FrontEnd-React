import React, { useState } from "react";
import { Search, ThumbsUp, ThumbsDown, XSquare, X } from "lucide-react";
import contract from "../../assets/new-requests/contract-org.svg";
import AcceptModal from "./AcceptModal";
import RejectModal from "./RejectModal";
import { BASE_URL } from "../../api";

const RequestForm = ({
  orgById,
  setOpenForm,
  handleOpenRejectionModal,
  handleOpenModal,
  handleOpenImageModal,
}) => {
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [rejectClicked, setRejectClicked] = useState(false);
  const [reasonShow, setReasonShow] = useState(false);
  // const [showAcceptModal, setShowAcceptModal] = useState();
  // const [showRejectionModal, setShowRejectionModal] = useState();

  // const handleAcceptClick = () => {
  //   setAcceptClicked(true);
  //   setRejectClicked(false);
  // };

  // const handleRejectClick = () => {
  //   setRejectClicked(true);
  //   setAcceptClicked(false);
  //   setReasonShow(true);
  // };

  return (
    <div className="h-full  md:min-h-screen p-8 ">
      <div className="relative h-[80%] max-w-full max-h-full flex flex-col text-center gap-4 bg-white rounded-lg p-4 ">
        <X
          className="cursor-pointer absolute top-5 right-5 hover:bg-white hover:rounded-full"
          onClick={() => setOpenForm(false)}
          color={"rgb(27,25,49)"}
          size={20}
          strokeWidth={1}
        />

        <div className="text-NavyMain bg-[rgb(206,206,206)] py-2 rounded-md text-2xl text-center font-semibold">
          {orgById ? orgById.name : "Company Name"}
        </div>

        <div className="relative w-full min-h-[70%] overflow-y-scroll overflow-hidden no-scrollbar group">
          <img
            className="relative opacity-100 block w-full h-auto transition-opacity ease-backface-visibility:hidden group-hover:opacity-50"
            src={`${BASE_URL}/${orgById?.license}`}
            alt="SVG"
          />
          <div className="sticky bottom-[40%] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <div
              onClick={handleOpenImageModal}
              className="hover:cursor-pointer bg-black bg-opacity-90 text-white text-center text-base p-4 rounded-md"
            >
              Read More
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-white flex flex-row gap-4 px-8 py-2 md:px-20">
          <div
            className="shadow-md shadow-gray-400  hover:bg-RedMain hover:text-white text-cecece w-full h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer"
            onClick={handleOpenModal}
          >
            Accept
            <span>
              <ThumbsUp
                className="text-cecece hover:text-white"
                size={20}
                strokeWidth={2}
              />
            </span>
          </div>
          <div
            className="shadow-md shadow-gray-400  hover:bg-RedMain hover:text-white text-cecece w-full h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer"
            onClick={handleOpenRejectionModal}
          >
            Reject
            <span>
              <ThumbsDown
                className="text-cecece hover:text-white"
                size={20}
                strokeWidth={2}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
