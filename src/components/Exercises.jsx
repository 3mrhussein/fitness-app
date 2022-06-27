import React, { useContext, useEffect, useState } from 'react';
import { Box, Stack, Pagination, Typography } from '@mui/material';
import { ExercisesContext } from '../context/exercisesContextAPI';
import ExerciseCard from './ExerciseCard';
import { BodyListContext } from '../context/bodyListContextApi';
import { fetchExercisesByBodyPart } from '../utils/fetchData';
const Exercises = () => {
  const { exercises, setExercises, filteredExercises } =
    useContext(ExercisesContext);
  const { currentExercise } = useContext(BodyListContext);
  const [page, setPage] = useState(1);

  const handlePageChange = (e, value) => {
    setPage(value);
  };
  let subExercises = filteredExercises.slice(page - 1, page + 5);

  useEffect(() => {
    const fetchByBodyParts = async () => {
      setExercises(await fetchExercisesByBodyPart(currentExercise));
    };

    fetchByBodyParts();
  }, [currentExercise]);
  return (
    <Box px="20px" mt="50px">
      <Typography fontSize="38px" fontWeight={'500'}>
        Showing Results
      </Typography>
      <Box direction="row" m="50px auto 50px auto">
        {filteredExercises.length > 6 && (
          <Pagination
            count={Math.ceil(exercises.length / 10)}
            variant="outlined"
            page={page}
            onChange={handlePageChange}
            sx={{
              ul: {
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          />
        )}
      </Box>
      <Stack
        mt={'30px'}
        gap={6}
        direction="row"
        width="100%"
        flexWrap={'wrap'}
        justifyContent="center"
        alignItems={'center'}
      >
        {subExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
