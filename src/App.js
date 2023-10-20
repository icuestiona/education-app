import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import TutorCategory from "./Pages/TutorCategory";
import Hero from "./Components/Hero/Hero";
import LoginSignUp from "./Pages/LoginSignUp";
import Popular from "./Components/Popular/Popular";
import Offers from "./Components/Offers/Offers";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Popular />
      <Offers />
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/tutor" element={TutorCategory} />
        <Route path="/subject" element={TutorCategory} />
        <Route path="/availability" element={TutorCategory} />
        <Route path="/login" element={LoginSignUp} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
