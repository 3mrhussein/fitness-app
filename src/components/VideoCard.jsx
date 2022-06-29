import React, { useEffect } from 'react';
import { Typography, Box, Stack, Link } from '@mui/material';
export const VideoCard = ({ Video }) => {
  const { title, channelName, thumbnails, videoId } = Video;

  console.log(Video);
  return (
    <Stack gap={'10px'} width="250px">
      <Box
        sx={{
          borderTopLeftRadius: '15px',
          overflow: 'hidden',
          boxShadow: '1px 1px 3px gray',
          cursor: 'pointer',
        }}
        height="150px"
      >
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={thumbnails[0].url} alt="video" height="100%" width="100%" />
        </a>
      </Box>
      <Typography variant={'h6'} fontSize="16px" fontWeight="bold">
        {title}
      </Typography>
      <Typography fontSize="12px">{channelName}</Typography>
    </Stack>
  );
};
