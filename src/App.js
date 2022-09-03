import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="appy">
      <Router>
        <div className="app__body">
          <Routes>
            <Route exact path="/preview" element={<Preview />}></Route>

            <Route exact path="/"></Route>
          </Routes>
          <WebcamCapture />
        </div>
      </Router>
    </div>
  );
}

export default App;
