import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonatedPhoto from "../components/donation/DonatedPhoto";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getImages,
  sendSelectedImages,
  updateImageSelection,
} from "../api/donations";

const ImageGallery = () => {
  const { userId } = useParams();
  const [selectedImages, setSelectedImages] = useState(new Set());

  const handleSelectImage = (category, index, isSelected, imageId) => {
    setSelectedImages((prevSelectedImages) => {
      const newSelectedImages = { ...prevSelectedImages };
      if (!newSelectedImages[category]) {
        newSelectedImages[category] = new Set();
      }

      if (isSelected) {
        newSelectedImages[category].add(index);
      } else {
        newSelectedImages[category].delete(index);
      }

      updateImageSelection(imageId, isSelected) // Update selection status in the backend
        .then(() => console.log(`Image ${imageId} selection updated`))
        .catch((error) =>
          console.error(`Error updating selection for image ${imageId}:`, error)
        );

      return newSelectedImages;
    });
  };

  const { data } = useQuery({
    queryKey: ["images"],
    queryFn: () => getImages(userId),
  });

  const mutation = useMutation({
    mutationKey: "sendSelectedImages",
    mutationFn: (data) =>
      sendSelectedImages(userId, data.selectedImages, data.unselectedImages),
    onSuccess: (data) => {
      console.log("Images sent successfully:", data);
    },
    onError: (error) => {
      console.error("Error sending images:", error);
    },
  });

  const handleImageSelection = () => {
    const preparedData = {
      selectedImages: [],
      unselectedImages: [],
    };

    data?.forEach((categoryData) => {
      categoryData.imageData.forEach((image, index) => {
        const arrayKey = selectedImages[categoryData.category]?.has(index)
          ? "selectedImages"
          : "unselectedImages";
        preparedData[arrayKey].push(image);
      });
    });

    console.log("Sending data:", preparedData);
    mutation.mutate(preparedData);
  };

  // const handleImageSelection = () => {
  //   const selectedData = Object.keys(selectedImages).reduce(
  //     (acc, category) => {
  //       const categoryImages =
  //         data.find((item) => item.category === category)?.imageData || [];
  //       acc.selectedImages = acc.selectedImages.concat(
  //         categoryImages.filter((_, index) =>
  //           selectedImages[category].has(index)
  //         )
  //       );
  //       acc.unselectedImages = acc.unselectedImages.concat(
  //         categoryImages.filter(
  //           (_, index) => !selectedImages[category].has(index)
  //         )
  //       );
  //       return acc;
  //     },
  //     { selectedImages: [], unselectedImages: [] }
  //   );

  //   console.log("Sending data:", selectedData);
  //   mutation.mutate({ userId, ...selectedData });
  // };

  return (
    <div className="min-h-screen w-full mt-[80px] pb-[100px] flex flex-col bg-NavyMain md:px-[120px] px-[30px] text-white justify-center items-center gap-4">
      {data?.map((categoryData, categoryIndex) => (
        <div
          key={categoryData.category}
          className="flex flex-col py-4 px-6 gap-4 items-center border-white border-[1px] rounded-xl border-opacity-50 "
        >
          <div className="text-[18px]">{categoryData.category}</div>
          <div className="flex flex-wrap justify-between gap-4">
            {categoryData.imageData.map((image, imageIndex) => (
              <DonatedPhoto
                key={imageIndex}
                image={image}
                index={imageIndex}
                category={categoryData.category}
                onSelect={(index, isSelected) =>
                  handleSelectImage(categoryData.category, index, isSelected)
                }
                isSelected={selectedImages[categoryData.category]?.has(
                  imageIndex
                )}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="bg-white sticky bottom-[40px] w-[300px] h-[50px] flex justify-center items-center rounded-full cursor-pointer text-RedMain hover:bg-RedMain hover:text-white drop-shadow-lg ">
        <div onClick={handleImageSelection} className="font-semibold">
          Confirm
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

// const handleImageSelection = () => {
//   const selectedFurnitureImages = furnitureImages.filter((_, index) =>
//     selectedImages.has(index)
//   );
//   const selectedDeviceImages = devicesImages.filter((_, index) =>
//     selectedImages.has(index)
//   );
//   const selectedElectronicImages = electronicsImages.filter((_, index) =>
//     selectedImages.has(index)
//   );
//   const selectedClothesImages = electronicsImages.filter((_, index) =>
//     selectedImages.has(index)
//   );
//   const unselectedFurnitureImages = furnitureImages.filter(
//     (_, index) => !selectedImages.has(index)
//   );
//   const unselectedDeviceImages = devicesImages.filter(
//     (_, index) => !selectedImages.has(index)
//   );
//   const unselectedElectronicImages = electronicsImages.filter(
//     (_, index) => !selectedImages.has(index)
//   );
//   const unselectedClothesImages = electronicsImages.filter(
//     (_, index) => !selectedImages.has(index)
//   );

//   mutation.mutate({
//     selectedFurnitureImages,
//     selectedDeviceImages,
//     selectedElectronicImages,
//     selectedClothesImages,
//     unselectedFurnitureImages,
//     unselectedDeviceImages,
//     unselectedElectronicImages,
//     unselectedClothesImages,
//   });
// };
