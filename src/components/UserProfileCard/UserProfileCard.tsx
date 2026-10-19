import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps) {
  return (
    <div data-id={props.user.id}>
      <img src={props.user.avatarUrl} />
      <div>{props.user.name}</div>
      {props.showEmail != false && <span>{props.user.role}</span>}
      {props.showEmail != false && <span>{props.user.email}</span>}
      {props.children}
    </div>
  );
}
