import { useState } from "react";

import "./App.css";
import { type AlertType } from "./types";

import Details from "./components/Details/Details";

import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

const userExample = {
  id: "023",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl:
    "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png",
};

const productExample = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl:
    "https://media.istockphoto.com/id/2162431408/photo/sleek-blue-headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=WyQ-bUslLSnirpxZ6zJNQnht7jnEtCz0bSkfasG1cSc=",
  inStock: true,
};

function App() {
  const [alertBoxOpen, setAlertBoxOpen] = useState(true);
  const [alertStatus, setAlertStatus] = useState<AlertType>("success");

  const [showProductDescription, setShowProductDescription] = useState(true);
  const [productInStock, setProductInStock] = useState(productExample.inStock);
  const [showProductStock, setShowProductStock] = useState(true);

  return (
    <>
      <h3>React Components</h3>
      <Details summary="Alert Box">
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
      <Details summary="User Profile Card">
        <UserProfileCard
          user={userExample}
          showRole={true}
          showEmail={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        ></UserProfileCard>
      </Details>
      <Details summary="Product Display">
        <div className="inputDisplay">
          <button
            onClick={() => setShowProductDescription(!showProductDescription)}
          >
            Show Description: {showProductDescription ? "True" : "False"}
          </button>
          <button onClick={() => setShowProductStock(!showProductStock)}>
            Show Stock: {productInStock ? "True" : "False"}
          </button>
          <button onClick={() => setProductInStock(!productInStock)}>
            In Stock: {productInStock ? "True" : "False"}
          </button>
        </div>
        <ProductDisplay
          product={{ ...productExample, inStock: productInStock }}
          showDescription={showProductDescription}
          showStockStatus={showProductStock}
          onAddToCart={(productId) =>
            alert(`Added product ${productId} to cart`)
          }
        ></ProductDisplay>
      </Details>
    </>
  );
}

export default App;
