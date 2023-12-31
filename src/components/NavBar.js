import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import sanadLogo from "../assets/navbar/sanad_white_logo.svg";
import { ChevronsLeft, CircleUserRound, LogOut } from "lucide-react";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleLogout = () => {
    logout();
    setUser(false);
    navigate("/");
  };

  const fixedNavBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  // List of paths where you want to hide the BackButton
  const hiddenBackButtonPaths = [
    "/requests",
    "/all_organizations",
    "/all_users",
    "/all_events",
    "/profile",
    "/create_event",
  ];

  return (
    <div
      className="bg-RedMain min-w-full h-[80px] flex flex-row justify-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.60)] md:drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
      style={fixedNavBarStyle}
    >
      <ul className="flex items-center gap-4 text-white bg-RedMain px-6 border-transparent border-r-2">
        <li className="text-[0px] lg:text-[32px] lg:font-bold">Sanad</li>
      </ul>
      <ul className="w-full flex flex-row items-end overflow-x-scroll no-scrollbar">
        <li className="w-full flex flex-row lg:gap-10 gap-6 lg:justify-center justify-start px-10">
          {!hiddenBackButtonPaths.includes(location.pathname) && (
            <div className="h-[80px] font-medium w-fit flex items-end pb-3 border-transparent">
              <span
                onClick={handleGoBack}
                className="flex gap-2 text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full"
              >
                <ChevronsLeft />
                Back
              </span>
            </div>
          )}
          {user.isAdmin ? (
            <>
              <NavLink
                to="/requests"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
                  Requests
                </span>
              </NavLink>
              <NavLink
                to="/all_organizations"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
                  Partners
                </span>
              </NavLink>
              <NavLink
                to="/all_users"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
                  Users
                </span>
              </NavLink>
              <NavLink
                to="/all_events"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
                  Events
                </span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span>
                  <CircleUserRound color="white" size={20} strokeWidth={2} />
                </span>
              </NavLink>

              <NavLink
                to="/create_event"
                className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
              >
                <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
                  Create
                </span>
              </NavLink>
            </>
          )}

          {/* ******************************* */}
          {/* 
          <NavLink
            to="/image-gallery"
            className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
          >
            <span className="text-white px-4 hover:bg-white hover:bg-opacity-20 hover:px-4 hover:rounded-full">
              Donation
            </span>
          </NavLink> */}

          <Link
            to="/"
            className="h-[80px] font-medium w-fit flex items-end pb-2 border-b-[4px] border-transparent"
          >
            <span
              onClick={() => {
                handleLogout();
              }}
            >
              <LogOut color="white" size={20} strokeWidth={2} />
            </span>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center gap-4 text-white bg-RedMain px-6 border-transparent lg:border-l-2">
        <li>
          <img className="h-0 lg:h-[50px] " src={sanadLogo} alt="SVG" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
