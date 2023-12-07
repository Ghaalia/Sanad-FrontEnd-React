import React, { useContext } from "react";
import { X, ThumbsDown } from "lucide-react";
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
  const navigate = useNavigate();
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
              <X color={"black"} size={28} strokeWidth={1.5} />
            </div>
            <div>Rejection</div>
            <div> Are you sure you want to Reject {orgById?.name}</div>
            <div> Please write the reason of rejection? </div>
            <div
              onClick={() => {
                rejection();
                setOpenForm(false);
              }}
              className={`w-[150px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center align-middle font-semibold items-center border-2 cursor-pointer`}
            >
              Reject
              <span>
                <ThumbsDown color="white" size={20} strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RejectModal;
