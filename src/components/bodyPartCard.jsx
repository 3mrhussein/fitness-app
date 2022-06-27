import React, { useContext, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import BackBodyIcon from '../assets/icons/back-body-icon.png';
import CardioIcon from '../assets/icons/cardio-icon.png';
import ChestIcon from '../assets/icons/chest-icon.png';
import { BodyListContext } from '../context/bodyListContextApi';
import LowerArmsIcon from '../assets/icons/lower-arms-icon.png';
const BodyPartCard = ({ Active, children }) => {
  const { setCurrentExercise } = useContext(BodyListContext);
  const icon = (bodyPart) => {
    if (bodyPart === 'back') return BackBodyIcon;
    else if (bodyPart === 'cardio') return CardioIcon;
    else if (bodyPart === 'chest') return ChestIcon;
    else if ((bodyPart === 'lower arms') | (bodyPart === 'upper arms'))
      return LowerArmsIcon;
    else return Icon;
  };
  return (
    <Stack
      gap={2}
      alignItems="center"
      justifyContent={'center'}
      type="button"
      className="bodyPart-card"
      onClick={() => {
        setCurrentExercise(children);
        window.scrollTo({
          top: 1100,
          left: 100,
          behavior: 'smooth',
        });
      }}
      sx={{
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        bgcolor: 'white',
        mx: '20px',
        borderTop: Active ? '4px solid #FF2625' : '',
      }}
    >
      <img
        src={icon(children)}
        alt={'body-part'}
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="18px"
        fontWeight="bold"
        color="#3A1212"
        textTransform={'capitalize'}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
