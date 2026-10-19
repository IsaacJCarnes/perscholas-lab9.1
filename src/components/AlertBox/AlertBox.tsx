import "./AlertBox.css";
import { useState } from "react";
import type { AlertBoxProps } from "../../types";

export default function AlertBox(props: AlertBoxProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <dialog open={isOpen} className={"alert " + props.type}>
      <span>{props.message}</span>
      {props.children}
      <button
        onClick={() => {
          setIsOpen(false);
          if (props.onClose) props.onClose();
        }}
      >
        x
      </button>
    </dialog>
  );
}
