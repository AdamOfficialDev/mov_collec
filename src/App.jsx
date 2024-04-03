// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardMovie from "./components/CardMovie";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardMovie />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie" element={<EditMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
