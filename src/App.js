import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Chats from "./Chats";
import Chat from "./Chat";
import ChatView from "./ChatView";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route exact path="/preview" element={<Preview />}></Route>

            <Route exact path="/" element={<WebcamCapture />}></Route>
            <Route exact path="/chats/view" element={<ChatView />}></Route>
            <Route exact path="/chats" element={<Chats />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
