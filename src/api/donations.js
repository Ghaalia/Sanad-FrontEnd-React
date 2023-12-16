import { instance } from ".";

const getImages = async (userId) => {
  const res = await instance.get(`/image-gallery/${userId}`);
  return res.data;
};

const sendSelectedImages = async (userId, selectedImages, unselectedImages) => {
  try {
    const response = await instance.post(
      `/images/selected-unselected/${userId}`,
      {
        selectedImages,
        unselectedImages,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending selected and unselected images:", error);
    throw error;
  }
};

const updateImageSelection = async (imageId, isSelected) => {
  try {
    const response = await instance.post(`/update-image-selection/${imageId}`, {
      isSelected,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating image selection:", error);
    throw error;
  }
};

export { getImages, sendSelectedImages, updateImageSelection };
