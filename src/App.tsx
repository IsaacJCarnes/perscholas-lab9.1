import { useState } from "react";

import "./App.css";
import { type AlertType } from "./types";

import Details from "./components/Details/Details";

import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

function App() {
  const [alertBoxOpen, setAlertBoxOpen] = useState(true);
  const [alertStatus, setAlertStatus] = useState<AlertType>("success");

  return (
    <>
      <h3>React Components</h3>
      <Details summary="User Profile Card">
        <UserProfileCard
          user={{
            id: "023",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Software Engineer",
            avatarUrl:
              "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png",
          }}
          showRole={true}
          showEmail={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        ></UserProfileCard>
      </Details>
      <Details summary="Alert Box" open={true}>
        <div className="inputDisplay">
          <button onClick={() => setAlertBoxOpen(!alertBoxOpen)}>
            Alert Box: {alertBoxOpen ? "Open" : "Closed"}
          </button>
          <select onChange={(e) => setAlertStatus(e.target.value as AlertType)}>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>
        <AlertBox
          type={alertStatus}
          message="Your profile has been updated successfully!"
          open={alertBoxOpen}
          onClose={() => {
            setAlertBoxOpen(false);
          }}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </Details>
    </>
  );
}

export default App;
