import { ArrowRight } from "lucide-react";
import { BASE_URL } from "../../api";

const RequestCompanyItem = ({ organization, setOrgById, setOpenForm }) => {
  return (
    <div
      onClick={() => {
        setOrgById(organization);
        setOpenForm(true);
      }}
      className="hover: cursor-pointer"
    >
      <div className="w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-lg overflow-hidden justify-between shadow-md shadow-black">
        <div className="flex flex-row gap-4">
          <div className="w-[80px] h-[80px] overflow-hidden justify-center items-center text-center ">
            <img
              className=" object-contain h-full "
              src={`${BASE_URL}/${organization.logo}`}
            />
          </div>
          <div className="flex  flex-col justify-around ">
            <div className="text-white font-semibold">
              {organization.name || "test"}
            </div>
            <div className="text-white font-normal text-xs flex gap-4">
              Request Date: 20 / 2 / 2024
              <span>Time: 2:00 PM</span>
            </div>
          </div>
        </div>
        <div className=" w-fit h-full px-2 flex items-center">
          <ArrowRight size={28} strokeWidth={2} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default RequestCompanyItem;
