import { Search, ThumbsUp, ThumbsDown, Send } from "lucide-react";
import React from "react";
import RequestCompanyItem from "../components/requests/RequestCompanyItem";
import contract from "../assets/new-requests/contract-org.svg";
import { useState } from "react";

const NewRequests = () => {
  const [acceptClicked, setAcceptClicked] = useState(true);
  const [rejectClicked, setRejectClicked] = useState(false);
  const [reasonShow, setReasonShow] = useState(false);

  const handleAcceptClick = () => {
    setAcceptClicked(true);
    setRejectClicked(false);
  };

  const handleRejectClick = () => {
    setRejectClicked(true);
    setAcceptClicked(false);
    setReasonShow(true);
  };

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
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
              <RequestCompanyItem />
            </div>
          </div>
        </div>
        <div className="h-full md:min-h-screen p-8 ">
          <div className="w-full h-full flex flex-col text-center gap-4 bg-white rounded-lg p-4 overflow-y-scroll overflow-hidden no-scrollbar">
            <div className="text-NavyMain bg-[#cecece] py-2 rounded-md text-2xl text-center font-semibold">
              Company Name
            </div>
            <div className="w-full h-fit">
              <img className="w-full" src={contract} alt="SVG" />
            </div>
            <div className="w-full h-full bg-white flex flex-row gap-4 px-8 py-2 md:px-20">
              <div
                className={`w-full h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center border-2 cursor-pointer ${
                  acceptClicked
                    ? "bg-RedMain border-RedMain text-white"
                    : "border-[#cecece] text-[#cecece]"
                }`}
                onClick={handleAcceptClick}
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
                onClick={handleRejectClick}
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
            {rejectClicked ? (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequests;
