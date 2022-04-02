import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { TwitterTweetEmbed} from "react-twitter-embed";

export default function Rightbar({ user }) {
  // const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h1 className="rightbarTitle">Trending</h1>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
          <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1509613074260672513"}/>

        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={'/avatar.png'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Drew W.</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={'/avatar.png'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Gabrielle H.</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={'/avatar.png'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Josh T.</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={'/avatar.png'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Virgina G.</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={'/avatar.png'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Meghan L.</span>
          </div>
      </div>
        
      </>
    );
  };
  return (
      <>
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
    </>
    )}