import { createContext, useContext, useState } from 'react';

export const ExercisesContext = createContext(null);

export const ExercisesContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExercisesContext.Provider>
  );
};
