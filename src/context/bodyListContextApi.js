import { useState, createContext } from 'react';

export const BodyListContext = createContext([]);
export const BodyListContextProvider = ({ children }) => {
  const [bodyList, setBodyList] = useState(['all']);
  const [currentExercise, setCurrentExercise] = useState('all');

  return (
    <BodyListContext.Provider
      value={{ bodyList, setBodyList, currentExercise, setCurrentExercise }}
    >
      {children}
    </BodyListContext.Provider>
  );
};
