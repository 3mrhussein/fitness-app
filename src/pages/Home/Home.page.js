import React from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../../components/herobanner';
import SearchExercises from '../../components/searchExercises';
import { ExercisesContextProvider } from '../../context/exercisesContextAPI';
import BodyPartsList from '../../components/bodyPartsList';
import { BodyListContextProvider } from '../../context/bodyListContextApi';
import Exercises from '../../components/Exercises';
export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExercisesContextProvider>
        <BodyListContextProvider>
          <SearchExercises />
          <BodyPartsList />
          <Exercises />
        </BodyListContextProvider>
      </ExercisesContextProvider>
    </Box>
  );
};
