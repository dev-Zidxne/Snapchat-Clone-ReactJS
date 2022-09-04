import React from "react";
import { useSelector } from "react-redux";
import { selectCameraImage } from "./features/cameraSlice";
import "./Preview.css";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  return (
    <div className="preview">
      <img src={cameraImage} alt="" />
    </div>
  );
}

export default Preview;
