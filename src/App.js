import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import TutorCategory from "./Pages/TutorCategory";
import LoginSignUp from "./Pages/LoginSignUp";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import JoinUs from "./Pages/JoinUs";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";
import DonationForm from "./Pages/DonationForm";
import TutorRegistrationForm from "./Pages/TutorRegistrationForm";
import StudentRegistrationForm from "./Pages/StudentRegistrationForm";
import MatchMePage from "./Pages/MatchMePage";
import SessionDashboard from "./Pages/SessionDashboard";
import VideoCallPage from "./Pages/VideoCallPage";
import StudentDashboard from "./Pages/StudentDashboard";
import TutorProfile from "./Pages/TutorProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutors" element={<TutorCategory category="tutor" />} />
        <Route
          path="/subjects"
          element={<TutorCategory category="subject" />}
        />
        <Route
          path="/availability"
          element={<TutorCategory category="availability" />}
        />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/match" element={<MatchMePage />} />
        <Route path="/sessions" element={<SessionDashboard />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/tutor/:tutorId" element={<TutorProfile />} />
        <Route path="/video-call" element={<VideoCallPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate-now" element={<DonationForm />} />
        <Route path="/tutor-register" element={<TutorRegistrationForm />} />
        <Route path="/student-register" element={<StudentRegistrationForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
