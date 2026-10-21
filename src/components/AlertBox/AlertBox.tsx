import "./AlertBox.css";
import type { AlertBoxProps } from "../../types";

export default function AlertBox(props: AlertBoxProps) {
  return (
    <dialog open={props.open} className={"alert " + props.type}>
      <span>{props.message}</span>
      {props.children}
      <button
        onClick={() => {
          if (props.onClose) props.onClose();
        }}
      >
        x
      </button>
    </dialog>
  );
}
