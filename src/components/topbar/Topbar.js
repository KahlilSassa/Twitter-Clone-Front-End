import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'

import {AuthContext} from '../../context/AuthContext'

import React from "react";

export default function Topbar({ openLogoutDialog, setOpenLogoutDialog }) {
  const user = useContext(AuthContext)

  let navigate = useNavigate();

  const handleLogout = () => {
    console.log("clicked");
    fetch(`http://localhost:3333/auth/logout`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", credentials: "include" },
    }).then((res) => {
      console.log(res);
      localStorage.removeItem("currentUsername");
      localStorage.removeItem("currentUserId");
      navigate("/login");
      console.log("success");
    });
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo"> <TwitterIcon/> </span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks"></div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src='/avatar.png' alt="" className="topbarImg" />
        </Link>
        <div className="logoutIcon">
          <LogoutIcon onClick={handleLogout}></LogoutIcon>
        </div>
      </div>
    </div>
  );
}
