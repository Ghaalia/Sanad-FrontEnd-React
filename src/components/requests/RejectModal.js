import React, { useContext } from "react";
import { X, ThumbsDown, XSquare } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { OrgRejectById } from "../../api/organization";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const RejectModal = ({
  showRejectionModal,
  handleCloseRejectionModal,
  orgById,
  setOpenForm,
}) => {
  const { user, setUser } = useContext(UserContext);
  const { mutate: rejection, isPending } = useMutation({
    mutationKey: ["rejection"],
    mutationFn: () => OrgRejectById(orgById),
    onSuccess: () => {
      handleCloseRejectionModal();
      setUser(true);
    },
  });
  return (
    <div>
      {showRejectionModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full h-screen absolute inset-0 flex justify-center items-center pt-[80px]">
          <div className="bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleCloseRejectionModal}
            >
              <XSquare color={"white"} size={25} strokeWidth={1} />
            </div>
            <div className="shadow-md shadow-gray-400  rounded-2xl text-center font-semibold text-3xl pt-9 text-white bg-RedMain h-1/4">
              Rejection
            </div>

            <div className="text-center text-NavyMain flex flex-col font-sans justify-center  content-center h-1/4 text-lg">
              <div> Are you sure you want to Reject</div>
              <div className="font-bold text-RedMain">{orgById?.name}</div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center">
              <label className="text-sm text-gray-600">
                Please write the reason of rejection?
              </label>
              <textarea className="text-sm  border-2 border-[#cecece] w-[80%] max-h-30 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#910808]"></textarea>
            </div>

            <div className="absolute  bottom-6 left-1/4">
              <div
                onClick={() => {
                  rejection();
                  setOpenForm(false);
                }}
                className="shadow-md shadow-gray-400  hover:bg-RedMain hover:text-white text-cecece w-[160px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer"
              >
                Reject
                <span>
                  <ThumbsDown
                    className="hover:text-white"
                    size={20}
                    strokeWidth={2}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RejectModal;
