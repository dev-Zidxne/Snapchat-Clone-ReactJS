import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function Chat({ id, username, timeStamp, read, imageUrl, profilePic }) {
  const open = () => {
    if (!read) {
      dispatch(selectImage);
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          Tap to view -{" "}
          <ReactTimeAgo
            date={new Date(timeStamp?.toDate()).toUTCString()}
            locale="en-US"
          />
        </p>
      </div>

      {!read && <StopCircleIcon className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
