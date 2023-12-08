import React, { useContext } from "react";
import { X, ThumbsUp, XSquare } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { OrgApproveById } from "../../api/organization";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const AcceptModal = ({
  showAcceptModal,
  handleCloseModal,
  orgById,
  setOpenForm,
}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { mutate: approval, isPending } = useMutation({
    mutationKey: ["approval"],
    mutationFn: () => OrgApproveById(orgById),
    onSuccess: () => {
      handleCloseModal();
      setUser(true);
    },
  });

  return (
    <div>
      {showAcceptModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full max-h-full absolute inset-0 flex justify-center items-center pt-[80px] ">
          <div className="relative bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleCloseModal}
            >
              <XSquare color={"white"} size={25} strokeWidth={1} />
            </div>

            <div className="text-center font-semibold text-3xl pt-9 text-white bg-RedMain h-1/4">
              Acceptance
            </div>

            <div className="text-center text-NavyMain flex flex-col font-sans justify-center align-middle content-center h-1/2 text-xl">
              <div>Are you sure you want to Accept</div>
              <div className="flex gap-3 justify-center align-middle">
                <div className="font-bold text-RedMain">{orgById?.name} </div>
                <div> as a Partner? </div>
              </div>
            </div>

            <div className="absolute  bottom-6 left-1/4">
              <div
                onClick={() => {
                  approval();
                  setOpenForm(false);
                }}
                className="text-NavyMain hover:bg-RedMain  w-[150px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center align-middle font-semibold items-center border-NavyMain hover:border-RedMain border-2 cursor-pointer"
              >
                Accept
                <span>
                  <ThumbsUp color="rgb(27,25,49)" size={20} strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceptModal;
