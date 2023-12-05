import React from "react";
import sanadLogoRed from "../assets/navbar/sanad_red_logo.svg";
import topHand from "../assets/navbar/top-hand.svg";
import bottomHand from "../assets/navbar/bottom-hand.svg";
import { Link } from "react-router-dom";
import { Eye, LogIn, Mail, Phone } from "lucide-react";

const Register = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="flex w-full h-full flex-col lg:flex-row md:flex-col ">
        <div className="flex flex-col justify-between h-1/2 lg:w-1/2 md:w-full lg:min-h-screen bg-NavyMain pt-[80px] ">
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
              to="/login"
              className="text-RedMain font-semibold items-center mt-4 lg:mt-8 flex gap-[30px] w-fit bg-white px-4 py-2 rounded-full hover:bg-RedMain hover:text-white"
            >
              Login
              <span>
                <LogIn size={28} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="h-fit flex justify-start items-end">
            <img className="h-[100px] md:h-full " src={bottomHand} alt="SVG" />
          </div>
        </div>
        <div className="h-1/2 lg:pt-[80px] overflow-y-scroll overflow-hidden flex lg:justify-center lg:items-center px-[50px] lg:h-screen lg:w-1/2 lg:px-[180px]">
          <form
            className="w-full flex flex-col py-[40px] pt-[40px] gap-4 justify-center items-center"
            // onSubmit={handleFormSubmit}
          >
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-col gap-2 relative">
                <input
                  placeholder="Official Comapany Name"
                  type="text"
                  id="name"
                  name="name"
                  // onChange={handleChange}
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
                  name="phoneNumber"
                  // onChange={handleChange}
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
                // onChange={handleChange}
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
                type="password"
                id="password"
                name="password"
                // onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span className="absolute inset-y-0 right-2 flex items-center pr-2">
                <Eye color="#6B6893" size={28} strokeWidth={1.5} />
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <input
                placeholder="Confirm Your Password"
                type="password"
                id="password"
                name="password"
                // onChange={handleChange}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
              <span className="absolute inset-y-0 right-2 flex items-center pr-2">
                <Eye color="#6B6893" size={28} strokeWidth={1.5} />
              </span>
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
                id="image"
                name="image"
                placeholder="Upload Profile Photo"
                // onChange={handleUserImage}
                className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
                required
              />
            </div>
            <div className="w-full flex justify-center pt-4">
              <button
                // onClick={login_mutate}
                type="submit"
                className="text-white w-full text-center rounded-full font-bold text-1xl p-2 h-[50px] bg-NavyMain hover:bg-RedMain"
              >
                REGISTER
              </button>
            </div>
            <h1 className="text-center text-red-700 p-5">
              {/* {error?.message} */}
            </h1>
            <div className="flex flex-row gap-4 justify-center">
              <div className="text-NavyMain">Already a Partner?</div>
              <Link className="hover:font-bold text-RedMain" to="/login">
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
