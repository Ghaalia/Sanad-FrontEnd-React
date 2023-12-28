import { instance } from ".";

const getAllCategories = async () => {
  const { data } = await instance.get("api/categories");
  return data;
};

const getCategoryId = async (categoryId) => {
  const { data } = await instance.get(`/categories/${categoryId}`);
  return data;
};

const createCategory = async (name) => {
  const { data } = await instance.post(`/ingredients`, {
    name,
  });
  return data;
};

const updateCategory = async (categoryId, name) => {
  const { data } = await instance.put(`/categories/${categoryId}`, {
    name,
  });
  return data;
};

const deleteCategory = async (categoryId) => {
  const { data } = await instance.delete(`/categories/${categoryId}`);
  return data;
};

const getCategoryById = async (categoryId) => {
  const { data } = await instance.get(`/categoryID`, categoryId);
  return data;
};

export {
  getCategoryById,
  getAllCategories,
  getCategoryId,
  createCategory,
  updateCategory,
  deleteCategory,
};
