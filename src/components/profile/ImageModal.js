import { Minimize2 } from "lucide-react";
import React from "react";

const ImageModal = ({ imageUrl, handleCloseImageModal }) => {
  return (
    <div className="fixed top-9 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="relative max-w-screen-md max-h-[85%] overflow-hidden bg-white p-4 rounded-md overflow-y-scroll">
        <img
          className="w-full h-auto max-h-full object-contain"
          src={imageUrl}
          alt="Image"
        />
      </div>

      {/* Minimize Icon outside the image container */}
      <Minimize2
        className="absolute top-[55px] right-[210px] text-white cursor-pointer item-start"
        size={30}
        onClick={handleCloseImageModal}
      />
    </div>
  );
};

export default ImageModal;
