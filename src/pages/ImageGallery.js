import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonatedPhoto from "../components/donation/DonatedPhoto";

const ImageGallery = () => {
  const { uniqueId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images using the uniqueId
    fetch(`http://localhost:3000/image-gallery/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => setImages(data.images));
  }, [uniqueId]);

  // Functionality to handle image selection and confirmation...

  return (
    <div className="min-h-screen gap-8 w-full mt-[80px] flex flex-col bg-NavyMain mx-120 text-white justify-start items-center ">
      <div className="pt-[40px] text-[28px]">Choose Donated Items</div>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <DonatedPhoto key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
