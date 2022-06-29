import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import BodyPartIcon from '../assets/icons/body-part.png';
import EquipmentIcon from '../assets/icons/equipment.png';
import TargetIcon from '../assets/icons/target.png';
const Detail = ({ ExerciseDetail }) => {
  const { bodyPart, target, equipment, name, gifUrl } = ExerciseDetail;
  const extraDetail = [
    {
      name: bodyPart,
      icon: BodyPartIcon,
    },
    {
      name: target,
      icon: TargetIcon,
    },
    {
      name: equipment,
      icon: EquipmentIcon,
    },
  ];
  return (
    <Stack
      justifyContent={'center'}
      flexWrap={'nowrap'}
      sx={{
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
      }}
      gap="30px"
    >
      <Box
        sx={{
          bgcolor: 'white',
          height: 'fit-content',
          minWidth: { md: '450px' },
        }}
        mx="auto"
      >
        <img width="100%" loading="lazy" src={gifUrl} alt="exercise-gif" />
      </Box>
      <Stack gap={3}>
        <Typography textTransform={'capitalize'} variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise keep you strong.
          {name} {` `}bup is one of the best <br /> exercises to target your
          {target}. it will help you improve your mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} alignItems="center" direction={'row'} gap={3}>
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
              }}
            >
              <img src={item.icon} alt="body-part-icon" />
            </Button>
            <Typography
              textTransform={'capitalize'}
              fontWeight="bold"
              variant="h6"
              noWrap
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
