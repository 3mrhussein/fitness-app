import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack gap={2} direction="row" m="10px 10px 0 10px">
        <Button
          p="0"
          variant="contained"
          size="small"
          sx={{
            background: '#ffa9a9',
            textTransform: 'capitalize',
            borderRadius: '40px',
            fontSize: '10px',
            ':hover': {
              background: '#ff8585',
            },
            fontWeight: 'bold',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          p="0"
          variant="contained"
          size="small"
          sx={{
            background: '#fcc757',
            textTransform: 'capitalize',
            borderRadius: '40px',
            fontSize: '10px',
            fontWeight: 'bold',
            ':hover': {
              background: '#fcc575',
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="black"
        fontWeight="600"
        textTransform={'capitalize'}
        fontSize="12px"
        p="10px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
