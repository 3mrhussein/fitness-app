import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import {
  rapidYoutubeSearchAndDownloadOptions,
  rapidYoutubeSearchAndDownloadUrl,
  searchYoutubeVideo,
} from '../utils/fetchData';
import { VideoCard } from './VideoCard';

const YoutubeVideos = ({ Exercise }) => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      const url = `${rapidYoutubeSearchAndDownloadUrl}/search?query=${Exercise?.name}`;
      try {
        const response = await fetch(url, rapidYoutubeSearchAndDownloadOptions);
        console.log('YoutubeVideo Data Fetched');
        if (response.ok) {
          const data = await response.json();
          setVideos(data);
        } else {
          setVideos(null);
        }
      } catch (e) {
        alert(e.message);
      }
    };

    fetchYoutubeVideos();
  }, [Exercise]);
  return (
    <Stack gap={'40px'}>
      <Typography variant="h5" fontWeight="bold">
        Watch{' '}
        <span style={{ color: 'red', textTransform: 'capitalize' }}>
          {Exercise.name}
        </span>{' '}
        exercise videos
      </Typography>
      {videos && (
        <Stack
          sx={{
            justifyContent: {
              xs: 'center',
              md: 'flex-start',
            },
          }}
          mx="20px"
          gap="30px"
          direction={'row'}
          flexWrap="wrap"
        >
          {videos.contents.slice(0, 3).map((item, index) => (
            <VideoCard key={index} Video={item.video} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default YoutubeVideos;
