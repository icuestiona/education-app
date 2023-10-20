import React, { createContext } from "react";
import all_tutors from "../Components/Assets/all_tutors";

export const TutorContext = createContext(null);

const TutorContextProvider = (tutor) => {
  const contextValue = { all_tutors };

  return (
    <TutorContext.Provider value={contextValue}>
      {tutor.children}
    </TutorContext.Provider>
  );
};
export default TutorContextProvider;
