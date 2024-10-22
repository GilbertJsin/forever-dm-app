import React from "react";
import CharacterSheet from "./components/CharacterSheet/CharacterSheet";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
