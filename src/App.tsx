import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";

function App() {
  return (
    <>
      <UserProfileCard
        user={{ id: "023", name: "John", email: "j@g.com", role: "vp" }}
      ></UserProfileCard>
      <AlertBox type="success" message="Hello"></AlertBox>
    </>
  );
}

export default App;
