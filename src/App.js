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
import { useState } from "react";
import UserContext from "./context/UserContext";
import OrgDetails from "./pages/OrgDetails";

function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App min-w-screen min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
          <Route path="/requests" Component={NewRequests} />
          <Route path="/all_organizations" Component={AllOrganizations} />
          <Route path="/all_users" Component={AllUsers} />
          <Route path="/all_events" Component={AllEvents} />
          <Route path="/create_event" Component={CreateEvent} />
          <Route path="/current_event_details" Component={EventDetails} />
          <Route path="/org_details" Component={OrgDetails} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
