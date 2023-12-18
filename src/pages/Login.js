import React, { useContext, useState } from "react";
import sanadLogoRed from "../assets/navbar/sanad_red_logo.svg";
import topHand from "../assets/navbar/top-hand.svg";
import bottomHand from "../assets/navbar/bottom-hand.svg";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { checktoken, login } from "../api/auth";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const { mutate: login_mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      // if (user.isAdmin) navigate("/requests"); // admin
      // else navigate("/profile"); // org

      // setUser(checktoken());

      const updatedUser = checktoken();
      setUser(updatedUser);

      if (updatedUser.isAdmin) {
        navigate("/requests"); // admin
      } else {
        navigate("/profile"); // org
      }
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login_mutate();
  // };

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="flex w-full h-full flex-col lg:flex-row md:flex-col ">
        <div className="flex flex-col justify-between h-1/2 lg:w-1/2 md:w-full lg:min-h-screen bg-NavyMain ">
          <div className="w-full flex justify-end">
            <img className="h-[100px] md:h-full" src={topHand} alt="SVG" />
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="text-[24px] lg:text-[32px] font-bold">
              Welcome to
            </div>
            <div className="text-[15px] lg:[20px] font-bold">
              Sanad Partners Portal
            </div>
            <div>
              <img
                className="h-[60px] mt-4 lg:mt-8 lg:h-[100px]"
                src={sanadLogoRed}
                alt="SVG"
              />
            </div>
            <Link
              to="/register"
              className="text-RedMain font-semibold items-center mt-4 lg:mt-8 flex gap-[30px] w-fit bg-white px-4 py-2 rounded-full hover:bg-RedMain hover:text-white"
            >
              Join Us
              <span>
                <ArrowRight size={28} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="h-fit flex justify-start items-end pt-3">
            <img className="h-[100px] md:h-full " src={bottomHand} alt="SVG" />
          </div>
        </div>

        <div className="h-1/2  lg:pt-[180px] lg:pb-[180px] flex justify-center items-center px-[50px] lg:h-full lg:w-1/2 lg:px-[220px]">
          <form
            // onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 justify-center items-center"
          >
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className=" text-NavyLight text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                {/* <span className="absolute inset-y-0 left-2 font-medium flex items-center pl-2 text-RedMain">
                  +965
                </span> */}
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full h-[50px] px-4 py-2 pl-[20px] border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className=" text-NavyLight text-sm font-medium"
              >
                Password
              </label>
              <input
                placeholder="Enter Your Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full h-[50px] text-lg px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 top-6 right-2 flex items-center pr-2"
              >
                {showPassword ? (
                  <EyeOff color="#6B6893" size={20} strokeWidth={1} />
                ) : (
                  <Eye color="#6B6893" size={20} strokeWidth={1} />
                )}
              </span>
            </div>
            {isPending ? (
              <div className="w-full flex justify-center pt-4">
                <button className="text-white w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain">
                  Loading ...
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center pt-4">
                <button
                  type="button"
                  onClick={login_mutate}
                  className="text-white w-full text-center rounded-full font-medium hover:font-bold text-lg p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
                >
                  Login
                </button>
              </div>
            )}

            <h1 className="text-center text-red-700 p-5">
              {/* {error?.message} */}
            </h1>
            <div className="flex flex-row gap-4 justify-center">
              <div className="text-NavyMain">Not a Partner?</div>
              <Link className="hover:font-bold text-RedMain" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
