import React, { useContext, useEffect, useState } from 'react';
import { Box, Stack, Pagination, Typography } from '@mui/material';
import { ExercisesContext } from '../context/exercisesContextAPI';
import ExerciseCard from './ExerciseCard';
import { BodyListContext } from '../context/bodyListContextApi';
import {
  exercisesUrl,
  fetchExercisesByBodyPart,
  rapidExercisesOptions,
} from '../utils/fetchData';
const Exercises = () => {
  const { setExercises, filteredExercises } = useContext(ExercisesContext);
  const { currentExercise } = useContext(BodyListContext);
  const [page, setPage] = useState(1);

  const handlePageChange = (e, value) => {
    setPage(value);
  };
  let subExercises = null;
  if (filteredExercises) {
    subExercises = filteredExercises.slice(page - 1, page + 5);
  }

  useEffect(() => {
    const fetchByBodyParts = async () => {
      const url =
        currentExercise === 'all'
          ? exercisesUrl
          : `${exercisesUrl}/bodyPart/${currentExercise}`;

      try {
        const response = await fetch(url, rapidExercisesOptions);
        console.log('Exercises Data Fetched');
        if (response.ok) {
          const data = await response.json();
          setExercises(data);
        } else setExercises(null);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchByBodyParts();
  }, [currentExercise]);
  return (
    <Box px="20px" mt="50px">
      {console.log('Exercises Rendered')};
      <Typography fontSize="36px" fontWeight={'500'}>
        Showing Results
      </Typography>
      <Stack
        mt={'30px'}
        gap={6}
        direction="row"
        width="100%"
        flexWrap={'wrap'}
        justifyContent="center"
        alignItems={'center'}
      >
        {subExercises &&
          subExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
      </Stack>
      <Box direction="row" m="50px auto 50px auto">
        {filteredExercises && (
          <Pagination
            count={Math.ceil(filteredExercises.length / 6)}
            variant="outlined"
            page={page}
            onChange={handlePageChange}
            sx={{
              ul: {
                width: '100%',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Exercises;
