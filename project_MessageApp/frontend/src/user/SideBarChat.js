import React from "react";
import "../css/SideBarChat.css";
import Avatar from "@material-ui/core/Avatar";

const SidebarChat = () => {
  return (
    <div className="sidebar__chatroom">
      <Avatar />
      <div className="sidebar__chatroom--info">
        <h2>Room</h2>
        <p>This is last chat...</p>
      </div>
    </div>
  );
};

export default SidebarChat;
