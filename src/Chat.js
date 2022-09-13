import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { useDispatch } from "react-redux";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

TimeAgo.addDefaultLocale(en);

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      navigate("/chats/view");
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view - "}
          <ReactTimeAgo date={new Date(timestamp?.toDate())} />
        </p>
      </div>
      {!read && <StopCircleIcon className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
