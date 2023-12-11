import { instance } from ".";

const getAllUsers = async () => {
  const { data } = await instance.get(`/api/user/allusers`);
  return data;
};

const getUserById = async (userId) => {
  const { data } = await instance.get(`/user/${userId}`);
  return data;
};

const createUser = async (userInfo) => {
  const { data } = await instance.post(`/user`, {
    userInfo,
  });
  return data;
};

const updateIngedient = async (ingredientId, name) => {
  const { data } = await instance.put(`/ingredients/${ingredientId}`, {
    name,
  });
  return data;
};

const userUnBlockedById = async (userId) => {
  const res = await instance.put(`/api/user/UnBlocked`, userId);
  return res.data;
};

const userBlockById = async (userId) => {
  const res = await instance.put(`/api/user/Blocked`, userId);
  return res.data;
};

export {
  getAllUsers,
  createUser,
  updateIngedient,
  getUserById,
  userUnBlockedById,
  userBlockById,
};
