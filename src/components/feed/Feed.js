import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";


export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const  user = useContext(AuthContext);

  useEffect(() => {
    console.log(user)

    // define fetchposts in app.js and its pass fetch down as props here and to where ever Im creating create post

// pass setpost to the share component as a prop, and then inside of the share component when you amke a new post, then take the new post and setPost add it to the current post array.

    const fetchPosts = async (user) => {
      let res = await axios.get('post/timeline/' + user.user._id)
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      })
      )
    } 
    fetchPosts(user)
  }, [user])

  let handleDeleteSubmit = async(id) => {
    // navigate("/");
    console.log(user);
    console.log("this was hit");
    let postToDelete = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + `/post/${id}/delete/`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", credentials: "include" },
        body: JSON.stringify({ userId: user.user._id }),
      },
      setPosts(posts.filter(post => post._id !== id))
    );
    console.log(postToDelete);
    let deletedPost = await postToDelete.json();
    console.log(deletedPost);
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) &&  <Share setPosts={setPosts}/>}
        
        {posts && posts.map((post) => (
          <Post key={post._id} post={post} handleDeleteSubmit={handleDeleteSubmit} />
        ))}
      </div>

      
    </div>
  );
}