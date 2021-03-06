import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AddUser from "./components/add-user";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:add" element={<AddUser />} />
          <Route path="/:edit/:id" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
