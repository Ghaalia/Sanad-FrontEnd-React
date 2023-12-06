import React, { useContext } from "react";
import { X, ThumbsUp } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { OrgApproveById, approveOrg } from "../../api/organization";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const AcceptModal = ({ showAcceptModal, handleCloseModal, orgById }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { mutate: approval, isPending } = useMutation({
    mutationKey: ["approval"],
    mutationFn: () => OrgApproveById(orgById),
    onSuccess: () => {
      navigate("/create_event");
      setUser(true);
    },
  });

  return (
    <div>
      {showAcceptModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full h-screen absolute inset-0 flex justify-center items-center pt-[80px]">
          <div className="bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleCloseModal}
            >
              <X color={"black"} size={28} strokeWidth={1.5} />
            </div>
            <div>Acceptance</div>
            <div> Are you sure you want to Accept {orgById?.name}</div>
            <div> as a Partner? </div>
            <div
              onClick={approval}
              className={`w-[150px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center align-middle font-semibold items-center border-2 cursor-pointer`}
            >
              Accept
              <span>
                <ThumbsUp color="white" size={20} strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceptModal;
