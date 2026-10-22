import type { UserProfileCardProps } from "../../types";
import "./UserProfileCard.css";

export default function UserProfileCard(props: UserProfileCardProps) {
  return (
    <div className="profileCard" data-id={props.user.id}>
      <div className="flx-row justify-between">
        <img src={props.user.avatarUrl} />
        <div className="flx-col">
          <span className="card-name">{props.user.name}</span>
          {props.showEmail && (
            <span className="card-email text-sm">{props.user.email}</span>
          )}
          {props.showRole && (
            <span className="text-sm">{props.user.role}</span>
          )}
          {props.children}
        </div>
      </div>
      <button
        onClick={() => {
          if (props.onEdit) props.onEdit(props.user.id);
        }}
      >
        Edit Profile
      </button>
    </div>
  );
}
