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
      <div className="w-full h-[79px] flex gap-4 bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-md shadow-black">
        <div className="w-[120px] h-full bg-white left-5 ">
          <img
            className="w-[90%] ml-1 mt-1"
            src={`${BASE_URL}/${organization.logo}`}
          />
        </div>
        <div className="flex w-full flex-col justify-around">
          <div className="text-white font-semibold">
            {organization.name || "test"}
          </div>
          <div className="text-gray-300 font-normal text-xs flex gap-4">
            Request Date: 20 / 2 / 2024
            <span>Time: 2:00 PM</span>
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
