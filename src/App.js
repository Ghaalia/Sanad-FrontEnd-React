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

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checktoken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App min-w-screen min-h-screen">
        {user && <NavBar />}
        <Routes>
          <Route path="*" Component={NotFound} />
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />
          <Route path="/requests" Component={NewRequests} />
          <Route path="/all_organizations" Component={AllOrganizations} />
          <Route path="/all_users" Component={AllUsers} />
          <Route path="/all_events" Component={AllEvents} />
          <Route path="/create_event" Component={CreateEvent} />
          <Route
            path="/current_event_details/:eventId"
            Component={EventDetails}
          />
          <Route path="/org_details/:orgId" Component={OrgDetails} />
          <Route path="/image-gallery" Component={ImageGallery} />
          <Route path="/image-gallery/:userId" Component={ImageGallery} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
