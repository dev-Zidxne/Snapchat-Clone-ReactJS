import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import "./App.css";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route exact path="/preview" element={<Preview />}></Route>

            <Route exact path="/" element={<WebcamCapture />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
