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
          user={{ id: "023", name: "John", email: "j@g.com", role: "vp" }}
        ></UserProfileCard>
      </Details>
      <Details summary="Alert Box" open={true}>
        <div className="inputDisplay">
          <button
            onClick={() => setAlertBoxOpen(!alertBoxOpen)}
          >
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
          message="Hello"
          open={alertBoxOpen}
          onClose={() => {
            setAlertBoxOpen(false);
          }}
        ></AlertBox>
      </Details>
    </>
  );
}

export default App;
