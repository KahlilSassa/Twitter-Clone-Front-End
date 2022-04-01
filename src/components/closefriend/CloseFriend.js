import "./closefriend.css";

export default function CloseFriend({ user }) {

  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={'/avatar.png'}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
