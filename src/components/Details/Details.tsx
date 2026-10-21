import "./Details.css";
import { type DetailsProps } from "../../types";

export default function Details(props:DetailsProps) {
  return (
    <details className="animated-details" open={props.open || false}>
      <summary><h4>{props.summary}</h4></summary>
      {props.children}
    </details>
  );
}
