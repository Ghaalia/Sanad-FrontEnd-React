import instance from ".";

const getAllUsers = async () => {
  const { data } = await instance.get("/user");
  return data;
};

const getUserById = async (userId) => {
    const { data } = await instance.get(`/user/${userId}`);
    return data;
  };

const createUser = async (userInfo) => {
  const { data } = await instance.post(`/user`, {
userInfo
  });
  return data;
};

const updateIngedient = async (ingredientId, name) => {
    const { data } = await instance.put(`/ingredients/${ingredientId}`, {
      name,
    });
    return data;
  };

export { getAllUsers, createUser, updateIngedient, deleteIngedient };
