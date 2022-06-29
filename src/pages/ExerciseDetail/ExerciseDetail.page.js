import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  exercisesUrl,
  fetchExerciseById,
  rapidExercisesOptions,
} from '../../utils/fetchData';
import Detail from '../../components/Detail';
import YoutubeVideos from '../../components/YoutubeVideos';
import SimilarExercise from '../../components/SimilarExercise';
import { TailSpin } from 'react-loader-spinner';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercise = async (Id) => {
      const url = `${exercisesUrl}/exercise/${Id}`;
      try {
        const response = await fetch(url, rapidExercisesOptions);
        if (response.ok) {
          const data = await response.json();
          setExerciseDetail(data);
        } else {
          setExerciseDetail(null);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchExercise();
  }, [id]);

  return exerciseDetail ? (
    <Stack p="20px" gap="40px">
      <Detail ExerciseDetail={exerciseDetail} />
      <YoutubeVideos Exercise={exerciseDetail} />
      <SimilarExercise
        Target={exerciseDetail?.target}
        Equipment={exerciseDetail?.equipment}
      />
    </Stack>
  ) : (
    <Stack
      width="100%"
      height="600px"
      justifyContent={'center'}
      alignItems="center"
    >
      <TailSpin color="#ff2625" height={80} width={80} />
    </Stack>
  );
};

export default ExerciseDetail;
