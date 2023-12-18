import React, { useContext, useState } from "react";
import sanadLogoRed from "../assets/navbar/sanad_red_logo.svg";
import topHand from "../assets/navbar/top-hand.svg";
import bottomHand from "../assets/navbar/bottom-hand.svg";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, Mail, Phone } from "lucide-react";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { checktoken, register } from "../api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "logo") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else if (e.target.name === "license") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
    // Check if it's the confirm password field
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);

      // Check if the passwords match
      setPasswordMatchError(
        (prev) => prev || userInfo.password !== e.target.value
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
    if (userInfo.password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);
    register_mutate();
  };

  const { mutate: register_mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigate("/");
      setUser(checktoken());
    },
  });

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="flex w-full h-full flex-col lg:flex-row md:flex-col ">
        <div className="flex flex-col justify-between h-1/2 lg:w-1/2 md:w-full lg:min-h-screen bg-NavyMain ">
          <div className="w-full flex justify-end">
            <img className="h-[100px] md:h-full" src={topHand} alt="SVG" />
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <div className="text-[24px] lg:text-[32px] font-bold">Join Us</div>
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
              to="/"
              className="text-RedMain font-semibold items-center mt-4 lg:mt-8 flex gap-[30px] w-fit bg-white px-4 py-2 rounded-full hover:bg-RedMain hover:text-white"
            >
              Login
              <span>
                <LogIn size={28} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="h-fit flex justify-start items-end pt-3">
            <img className="h-[100px] md:h-full " src={bottomHand} alt="SVG" />
          </div>
        </div>

        <div className="h-1/2 lg:pt-[180px] lg:pb-[180px] flex lg:justify-center lg:items-center px-[50px] lg:h-screen lg:w-1/2 lg:px-[180px]">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center"
          >
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-col gap-2 relative">
                <input
                  placeholder="Official Comapany Name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                  required
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-2 font-medium flex items-center pl-2 text-RedMain">
                  +965
                </span>
                <input
                  placeholder="Enter Phone Number"
                  type="number"
                  id="phoneNumber"
                  name="phone_number"
                  onChange={handleChange}
                  className="w-full h-[50px] px-4 py-2 pl-[70px] border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                  required
                />
                <span className="absolute inset-y-0 right-2 flex items-center pr-2">
                  <Phone color="#6B6893" size={24} strokeWidth={1.5} />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <input
                placeholder="Enter Your Email"
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span className="absolute inset-y-0 right-2 flex items-center pr-2">
                <Mail color="#6B6893" size={26} strokeWidth={1.5} />
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <input
                placeholder="Enter a Secure Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center pr-2"
              >
                {showPassword ? (
                  <EyeOff color="#6B6893" size={25} strokeWidth={1} />
                ) : (
                  <Eye color="#6B6893" size={25} strokeWidth={1} />
                )}
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <input
                placeholder="Confirm Your Password"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center pr-2"
              >
                {showPassword ? (
                  <EyeOff color="#6B6893" size={25} strokeWidth={1} />
                ) : (
                  <Eye color="#6B6893" size={25} strokeWidth={1} />
                )}
              </span>

              {passwordMatchError && (
                <div className="text-red-500">Passwords do not match</div>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="image"
                className="block text-NavyMain text-center text-sm font-medium mb-2"
              >
                Upload Company Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                placeholder="Upload Profile Photo"
                onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="image"
                className="block text-NavyMain text-center text-sm font-medium mb-2"
              >
                Upload Company License
              </label>
              <input
                type="file"
                id="license"
                name="license"
                placeholder="Upload Profile Photo"
                onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
            </div>
            <div className="w-full flex justify-center pt-4">
              {isPending ? (
                <button className="text-white w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain">
                  Loading ....
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
                >
                  REGISTER
                </button>
              )}
            </div>

            <div className="flex flex-row gap-4 justify-center">
              <div className="text-NavyMain">Already a Partner?</div>
              <Link className="hover:font-bold text-RedMain" to="/">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
