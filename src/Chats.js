import React from "react";
import "./Chats.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
function Chats() {
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder="Friends" types="text" />
          <ChatBubbleIcon className="chats__chatIcon" />
        </div>
      </div>
    </div>
  );
}

export default Chats;
