import React, { useState } from "react";
import { BASE_URL } from "../../api";

const DonatedPhoto = ({ image, index, onSelect, isSelected }) => {
  const [selected, setSelected] = useState(isSelected);

  const handleSelect = () => {
    const newSelectedStatus = !selected;
    setSelected(newSelectedStatus);
    onSelect(index, newSelectedStatus);
  };

  return (
    <div
      className={`w-[125px] h-[125px] flex justify-center items-center text-NavyMain rounded-[12px] relative overflow-hidden cursor-pointer bg-white bg-opacity-10 ${
        selected ? "border-4 border-RedMain" : ""
      }`}
      onClick={handleSelect}
    >
      <img
        src={`${BASE_URL}/${image}`}
        alt="Uploaded"
        className="max-w-full "
      />
      <div className="absolute top-1 left-1 bg-RedMain text-white rounded-full w-6 h-6 flex justify-center items-center text-sm">
        {index + 1}
      </div>
    </div>
  );
};

export default DonatedPhoto;
