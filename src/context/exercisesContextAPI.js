import { createContext, useContext, useState } from 'react';

export const ExercisesContext = createContext(null);

export const ExercisesContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  return (
    <ExercisesContext.Provider
      value={{
        exercises,
        setExercises,
        filteredExercises,
        setFilteredExercises,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};
