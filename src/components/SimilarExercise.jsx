import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import {
  exercisesUrl,
  fetchExercisesByEquipment,
  fetchExercisesByTargetMuscle,
  rapidExercisesOptions,
} from '../utils/fetchData';
import ExercisesPreview from './ExercisesPreview';
import { TailSpin } from 'react-loader-spinner';

const SimilarExercise = ({ Target, Equipment }) => {
  const [similarTarget, setSimilarTarget] = useState(null);
  const [similarEquipment, setSimilarEquipment] = useState(null);

  useEffect(() => {
    const fetchSimilarExercises = async () => {
      const url = `${exercisesUrl}/target/${Target}`;
      try {
        const response = await fetch(url, rapidExercisesOptions);
        if (response.ok) {
          const data = await response.json();

          setSimilarTarget(data);
        }
      } catch (e) {
        setSimilarTarget(null);
        console.log(e.message);
      }
    };
    const fetchSimilarEquipment = async () => {
      const url = `${exercisesUrl}/equipment/${Equipment}`;
      try {
        const response = await fetch(url, rapidExercisesOptions);
        if (response.ok) {
          const data = await response.json();
          setSimilarEquipment(data);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchSimilarExercises();
    fetchSimilarEquipment();
  }, []);
  return (
    <Stack gap="40px">
      <Typography variant={'h5'} fontWeight="bold">
        Similar <span style={{ color: 'red' }}>Target Muscle</span> exercises
      </Typography>
      {similarTarget ? (
        <ExercisesPreview exercises={similarTarget} />
      ) : (
        <Stack
          width="100%"
          height="600px"
          justifyContent={'center'}
          alignItems="center"
        >
          <TailSpin color="#ff2625" height={80} width={80} />
        </Stack>
      )}

      <Typography variant={'h5'} fontWeight="bold">
        Similar <span style={{ color: 'red' }}>Equipment</span> exercises
      </Typography>
      {similarEquipment ? (
        <ExercisesPreview exercises={similarEquipment} />
      ) : (
        <Stack
          width="100%"
          height="600px"
          justifyContent={'center'}
          alignItems="center"
        >
          <TailSpin color="#ff2625" height={80} width={80} />
        </Stack>
      )}
    </Stack>
  );
};

export default SimilarExercise;
