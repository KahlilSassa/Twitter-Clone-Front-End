import "./online.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default function Online({ user }) {
  return (
    <>
      {/* <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img className="rightbarProfileImg" src={"/avatar.png"} alt="" />
          <span className="rightbarOnline"></span>
        </div>

        <span className="rightbarUsername">{user.username}</span>
      </li> */}

      <div>
        <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1509613074260672513"}
        />

        <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1489644928690909184"}
        />

        <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1508866748195356673"}
        />

        <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1508888892753260547"}
        />

        <TwitterTweetEmbed
          sourceType="profile"
          tweetId={"1509631643522195458"}
        />
      </div>
    </>
  );
}
