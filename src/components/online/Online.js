import "./online.css";


export default function Online({ user }) {

  return (
    <li className="rightbarFriend">

      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={"/avatar.png"}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>

      <span className="rightbarUsername">{user.username}</span>
    </li>

    
    
  );
}
