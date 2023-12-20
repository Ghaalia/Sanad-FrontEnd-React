import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrgApproveById } from "../../api/organization";
import { useMutation } from "@tanstack/react-query";
import { Ban, CheckCircle, X } from "lucide-react";

const UnBlockOrgModal = ({
  handleCloseUnBlockModal,
  showUnBlockModal,
  orgById,
  refetch,
}) => {
  const { mutate: UnBlock, isPending: isPending2 } = useMutation({
    mutationKey: ["UnBlock"],
    mutationFn: () => OrgApproveById(orgById),
    onSuccess: () => {
      handleCloseUnBlockModal();
      refetch();
      toast.success("UnBlock done successfully!", {
        style: { background: "white", color: "NavyMain" },
        progressStyle: { background: "#4CAF50" },
        icon: <CheckCircle size={24} strokeWidth={2} color="#4CAF50" />,
      });
    },
  });

  return (
    <div>
      {showUnBlockModal && (
        <div className="bg-NavyMain bg-opacity-70 w-full max-h-full absolute inset-0 flex justify-center items-center pt-[80px] ">
          <div className="relative bg-white h-[72%] w-[350px] rounded-2xl overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] overflow-y-scroll no-scrollbar">
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={handleCloseUnBlockModal}
            >
              <X
                className="text-white hover:text-RedMain hover:bg-white hover:rounded-full "
                size={20}
                strokeWidth={1}
              />
            </div>

            <div className="shadow-md shadow-gray-400  rounded-2xl text-center font-semibold text-3xl pt-9 text-white bg-RedMain h-1/4">
              UnBlock
            </div>

            <div className="text-center text-NavyMain flex flex-col font-sans justify-center align-middle content-center h-1/2 text-xl">
              <div>Are you sure you want to UnBlock</div>
              <div className="flex gap-3 justify-center align-middle">
                <div className="font-bold text-RedMain">{orgById?.name} </div>
                <div> ? </div>
              </div>
            </div>

            <div className="absolute  bottom-6 left-1/4">
              <div
                onClick={() => {
                  UnBlock();
                }}
                className="shadow-md shadow-gray-400  hover:bg-RedMain hover:text-white text-cecece w-[160px] h-[30px] md:h-[40px] text-center rounded-full flex gap-4 px-4 justify-center font-semibold items-center cursor-pointer"
              >
                UnBlock
                <span>
                  <Ban className="hover:white" size={20} strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnBlockOrgModal;
