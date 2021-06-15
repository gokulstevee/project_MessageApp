import React from "react";
import "../css/SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Chat from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import SideBarChat from "./SideBarChat";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div
          className="sidebar__
        
        header--right"
        >
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search--container">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or Chat with" />
        </div>
      </div>
      <div className="sidebar__chat--addchat">
        <IconButton>
          <AddOutlinedIcon />
        </IconButton>
        <h2>Add Chat</h2>
      </div>
      <div className="sidebar__chats">
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
