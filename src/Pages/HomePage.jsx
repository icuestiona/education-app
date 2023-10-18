import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { TutorContext } from "../Context/TutorContex";

const HomePage = () => {
  const [all_tutors] = useState(TutorContext);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
