import { jwtDecode } from "jwt-decode";
import { instance } from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(`/api/org/signin`, userInfo);
  storeToken(data?.token);
  return data;
};

const register = async (userInfo) => {
  // console.log(userInfo);
  const formData = new FormData();

  for (let key in userInfo) {
    if (!(key == "logo" || key == "license")) {
      formData.append(key, userInfo[key]);
    }
  }

  formData.append("files", userInfo["license"]);
  formData.append("files", userInfo["logo"]);
  const res = await instance.post(`/api/org/register`, formData);
  return res.data;
};

const logout = (setUser) => {
  localStorage.removeItem("token");
};

// const getMyProfile = async () => {
//   const { data } = await instance.get("/user/profile");
//   return data;
// };

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checktoken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    } else return true;
  }
  return false;
};

export { login, register, checktoken, logout };
