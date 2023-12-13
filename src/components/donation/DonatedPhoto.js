import React from "react";

const DonatedPhoto = ({ image }) => {
  return (
    <div className="w-[100px] h-[100px] flex bg-white justify-center items-center text-NavyMain">
      <img src={image.url} alt="Uploaded" className="max-w-full max-h-full" />
    </div>
  );
};

export default DonatedPhoto;
