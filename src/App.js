import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Chats from "./Chats";

import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("yes auth");
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://seeklogo.com/images/S/snapchat-logo-2D9C3E7ADA-seeklogo.com.png"
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Routes>
                  <Route
                    exact
                    path="/chats/view"
                    element={<ChatView />}
                  ></Route>
                  <Route exact path="/preview" element={<Preview />}></Route>
                  <Route exact path="/chats" element={<Chats />}></Route>
                  <Route exact path="/" element={<WebcamCapture />}></Route>
                </Routes>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
