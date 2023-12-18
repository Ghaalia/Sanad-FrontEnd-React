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

// const getParticipationsbyId = async (parId) => {
//   const res = await instance.get(`/participations/user`, parId);
//   return res.data;
// }; if parId from body

const getParticipationsbyId = async (eventId, parId) => {
  const res = await instance.get(`/current_event_details/${eventId}`, parId);
  return res.data;
};

export {
  getParticipationsbyId,
  getAllUsers,
  createUser,
  updateIngedient,
  getUserById,
  userUnBlockedById,
  userBlockById,
};
