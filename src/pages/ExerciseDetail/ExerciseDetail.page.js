import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchExerciseById } from '../../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercise = async () => {
      setExerciseDetail(await fetchExerciseById(id));
    };
    fetchExercise();
  }, [id]);
  console.log(exerciseDetail, id);
  const { target, name } = exerciseDetail;
  return (
    <Stack
      my={'70px'}
      p="20px"
      flexWrap={'wrap'}
      direction="row"
      gap={2}
      justifyContent="center"
    >
      <Box
        sx={{
          minWidth: '350px',
          bgcolor: 'white',
          // height: '500px',
          height: { md: '500px', xs: '400px' },
          // width: { md: '450px', xs: '400px' },
        }}
      >
        <img
          loading="lazy"
          src={exerciseDetail?.gifUrl}
          alt="exercise-gif"
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Stack
        sx={{
          px: '20px',
          width: { sm: '800px', md: '400px' },
          // height: { md: '500px', xs: '450px' },
          // width: { md: '450px', xs: '400px' },
        }}
        gap={3}
      >
        <Typography
          // sx={{ wordWrap: 'break-word' }}
          textTransform={'capitalize'}
          // fontSize="36px"
          // fontWeight={'bold'}
          variant="h3"
        >
          {name}
        </Typography>
        <Typography
          // sx={{ wordWrap: 'break-word' }} fontSize="14px"
          variant="h6"
        >
          Exercise keep you strong.
          {name} {` `}bup is one of the best <br /> exercises to target your
          {target}. it will help you improve your mood and gain energy
        </Typography>
        <Stack direction={'row'}></Stack>
        <Stack direction={'row'}></Stack>
        <Stack direction={'row'}></Stack>
      </Stack>
    </Stack>
  );
};

export default ExerciseDetail;
