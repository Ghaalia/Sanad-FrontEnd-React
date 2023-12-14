import { instance } from ".";

const getImages = async (userId) => {
  const res = await instance.get(`/image-gallery/${userId}`);
  return res.data;
};

export { getImages };
