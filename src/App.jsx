import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import BackupPage from "./pages/BackupPage";
import SucessPage from "./pages/SucessPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/success" element={<SucessPage />} />
        <Route path="/connect/:id" element={<BackupPage />} />
      </Routes>
    </div>
  );
};

export default App;
