import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RequestCompanyItem = ({ organization, setOrgById }) => {
  console.log(organization);
  return (
    <div
      onClick={() => setOrgById(organization)}
      className="hover: cursor-pointer"
    >
      <div className="w-full h-[80px] flex gap-4 bg-white bg-opacity-30 rounded-lg overflow-hidden border border-1-white">
        <div className="bg-white w-[80px] h-[80px] text-sm p-6 flex justify-center items-center text-center ">
          Company Logo
        </div>
        <div className="flex w-full flex-col justify-around">
          <div className="text-white font-semibold">
            {organization.name || "test"}
          </div>
          <div className="text-white font-normal text-xs flex gap-4">
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
