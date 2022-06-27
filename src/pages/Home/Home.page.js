import React from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../../components/herobanner';
import SearchExercises from '../../components/searchExercises';
import { ExercisesContextProvider } from '../../context/exercisesContextAPI';
import BodyPartsList from '../../components/bodyPartsList';
import { BodyListContextProvider } from '../../context/bodyListContextApi';
export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExercisesContextProvider>
        <SearchExercises />
      </ExercisesContextProvider>
      <BodyListContextProvider>
        <BodyPartsList />
      </BodyListContextProvider>
    </Box>
  );
};
