import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewRequests from "./pages/NewRequests";
import AllUsers from "./pages/AllUsers";
import AllOrganizations from "./pages/AllOrganizations";
import Profile from "./pages/Profile";
import AllEvents from "./pages/AllEvents";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import OrgDetails from "./pages/OrgDetails";
import { checktoken } from "./api/auth";
import NotFound from "./pages/NotFound";
import ImageGallery from "./pages/ImageGallery";
import Location from "./components/create-event/Location";
import DemoLocation from "./components/create-event/DemoLocation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checktoken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user && (
        <NavBar
          style={{
            zIndex: 100000,
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/requests" element={<NewRequests />} />
        <Route path="/all_organizations" element={<AllOrganizations />} />
        <Route path="/all_users" element={<AllUsers />} />
        <Route path="/all_events" element={<AllEvents />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route
          path="/current_event_details/:eventId"
          element={<EventDetails />}
        />
        <Route path="/org_details/:orgId" element={<OrgDetails />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/image-gallery/:userId" element={<ImageGallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="bottom-left" style={{ zIndex: 100000 }} />
    </UserContext.Provider>
  );
}

export default App;
