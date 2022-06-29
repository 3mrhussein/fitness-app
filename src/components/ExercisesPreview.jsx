import React, { useState, useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Typography, Box } from '@mui/material';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';
const ExercisesPreview = ({ exercises }) => {
  const ArrowLeft = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  const ArrowRight = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  return (
    <Box
      sx={{
        width: '100%',
        p: '20px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ScrollMenu RightArrow={ArrowRight} LeftArrow={ArrowLeft}>
        {exercises &&
          exercises.map((item) => {
            return (
              <Box key={item.id} mx="20px">
                <ExerciseCard exercise={item} />
              </Box>
            );
          })}
      </ScrollMenu>
    </Box>
  );
};

export default ExercisesPreview;
