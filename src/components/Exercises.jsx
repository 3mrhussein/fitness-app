import React, { useContext, useState } from 'react';
import { Box, Stack, Pagination, Typography } from '@mui/material';
import { ExercisesContext } from '../context/exercisesContextAPI';
import ExerciseCard from './ExerciseCard';
const Exercises = () => {
  const { exercises } = useContext(ExercisesContext);
  const [page, setPage] = useState(1);
  console.log(page, exercises);
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  let subExercises = exercises.slice(page - 1, page + 5);
  return (
    <Box px="20px" mt="50px">
      <Typography fontSize="38px" fontWeight={'500'} p="10px 50px">
        Showing Results
      </Typography>
      <Box direction="row" m="50px auto 50px auto">
        {exercises.length > 6 ? (
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
        ) : null}
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
          <Box>
            <ExerciseCard key={exercise.id} exercise={exercise} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
