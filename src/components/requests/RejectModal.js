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
            <div className="text-center font-semibold text-3xl pt-9 text-white bg-RedMain h-1/4">
              Rejection
            </div>

            <div className="text-center text-NavyMain flex flex-col font-sans justify-center  content-center h-1/4 text-lg">
              <div> Are you sure you want to Reject</div>
              <div className="font-bold text-RedMain">{orgById?.name}</div>
              <div className="text-sm">
                Please write the reason of rejection?
              </div>
            </div>
            <div className="flex  justify-center align-middle ">
              <textarea
                rows={20}
                className="text-sm text-[#cecece] border-2 border-[#cecece] w-[80%] max-h-30 rounded-xl p-3"
              ></textarea>
            </div>

            <div className="absolute  bottom-6 left-1/4">
              <div
                onClick={() => {
                  rejection();
                  setOpenForm(false);
                }}
                className="text-NavyMain hover:bg-RedMain  w-[150px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center align-middle font-semibold items-center border-NavyMain  hover:border-RedMain border-2 cursor-pointer"
              >
                Reject
                <span>
                  <ThumbsDown color="rgb(27,25,49)" size={20} strokeWidth={2} />
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
