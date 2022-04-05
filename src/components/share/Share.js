import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext, useRef, useState } from "react";
// import { Users } from "../../dummyData";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share({ setPosts }) {
  const user = useContext(AuthContext);
  const post = useRef();
  const [file, setFile] = useState(null);

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user.user._id,
      post: post.current.value,
    };
    console.log(user);
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_SERVER}/post`,
          {
            userId: user.user._id,
            post: post.current.value,
          },
          axiosConfig
        )
        .then((res) => {
          setPosts((posts) => [res.data, ...posts]);
          console.log(res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={"/avatar.png"} alt="" />
          <input
            placeholder={"What's in your mind " + user.user.username + "?"}
            className="shareInput"
            ref={post}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
}
