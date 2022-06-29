import React, { useContext, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BodyPartCard from './bodyPartCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from './../assets/icons/right-arrow.png';
import LeftArrowIcon from './../assets/icons/left-arrow.png';
import { BodyListContext } from '../context/bodyListContextApi';
import { fetchBodyParts } from '../utils/fetchData';
import { rapidExercisesOptions } from '../utils/fetchData';
const BodyPartsList = () => {
  const { currentExercise, bodyList, setBodyList } =
    useContext(BodyListContext);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      try {
        const response = await fetch(url, rapidExercisesOptions);
        const data = await response.json();
        setBodyList(['all', ...data]);
        console.log('body Part Data Fetched');
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchBodyParts();
  }, []);

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
      }}
    >
      <ScrollMenu RightArrow={ArrowRight} LeftArrow={ArrowLeft}>
        {bodyList.map((item) => {
          return (
            <BodyPartCard key={item} Active={currentExercise === item}>
              {item}
            </BodyPartCard>
          );
        })}
      </ScrollMenu>
    </Box>
  );
};

export default BodyPartsList;
