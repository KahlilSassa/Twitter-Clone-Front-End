import "./post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForkRef } from "@mui/material";

export default function Post({ post, handleDeleteSubmit }) {
  const [like, setLike] = useState(post && post.likes ? post.likes.length : 0);
  const [isLiked, setIsLiked] = useState(false);
  const [retweet, setRetweet] = useState(
    post && post.retweets ? post.retweets.length : 0
  );
  const [isRetweet, setIsRetweet] = useState(false);
  const [user, setUser] = useState({});
  const [ps, setPs] = useState([]);
  const [img, setImg] = useState([]);
  const [retweets, setRetweets] = useState([]);
  const [likes, setLikes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [postContent, setPostContent] = useState(post.post);
  const uf = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post._userid}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post._userid]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const retweetHandler = () => {
    setRetweet(isRetweet ? retweet - 1 : retweet + 1);
    setIsRetweet(!isRetweet);
  };

 

  // <------------------ LAST PART

  let handleEditSubmit = async () => {
    console.log("the edit button was hit!");
    setEdit(true);
    let postToEdit = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + `/post/${post._id}/update/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", credentials: "include" },
        body: JSON.stringify({
          userId: uf.user._id,
          posts: ps,
          retweets: retweets,
          likes: likes,
        }),
      },
    );
    let updatedPost = await postToEdit.json();
    console.log(updatedPost);
  };

  // <------------------ LAST PART

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className="postProfileImg" src={"/avatar.png"} alt="" />
            </Link>
            <span className="postUsername">{user.userId}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <ModeEditIcon onClick={handleEditSubmit} />
            <ClearIcon onClick={() => handleDeleteSubmit(post._id)} />
          </div>
        </div>

        <div className="postCenter">



          <form onChange={(e) => {
              setPs(e.target.value);}}>
            <span className="postText">{post.post}</span>
          </form>


          <img className="postImg" src={post.img} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <RepeatRoundedIcon onClick={retweetHandler} />
            <span className="postRetweetCounter">
              {retweet} people retweeted
            </span>
          </div>

          <div className="postBottomCenter">
            <FavoriteBorderIcon onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
