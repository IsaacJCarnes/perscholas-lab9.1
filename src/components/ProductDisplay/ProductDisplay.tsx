import "./ProductDisplay.css";
import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay(props: ProductDisplayProps) {
  return (
    <div className="product-display">
      <img className="product-image" src={props.product.imageUrl} />
      <div className="product-name">{props.product.name}</div>
      <div className="product-price">${props.product.price}</div>
      {props.showDescription && (
        <div className="product-description text-sm">
          {props.product.description}
        </div>
      )}
      {props.showStockStatus && (
        <div
          className={
            "product-stock text-sm" +
            (props.product.inStock ? " success" : " error")
          }
        >
          {props.product.inStock ? "In Stock" : "Out of Stock"}
        </div>
      )}

      {props.children}
      <button
        className="product-button txt-sm"
        onClick={() => {
          if (props.onAddToCart) props.onAddToCart(props.product.id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
