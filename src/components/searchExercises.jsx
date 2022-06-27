import React, { useContext, useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import { fetchExercises } from '../utils/fetchData';
import { ExercisesContext } from '../context/exercisesContextAPI';
import BodyPartsList from './bodyPartsList';
const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const { exercises, setExercises } = useContext(ExercisesContext);
  const handleSearch = async (e) => {
    if (search) {
      e.preventDefault();
      setSearchLoading(true);
      setExercises(fetchExercises(search));
      setSearch('');
      setSearchLoading(false);
    }
  };
  return (
    <Stack mt="20px" alignItems={'center'} justifyContent={'center'}>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '28px',
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: 700,
              border: 'none',
            },
            width: {
              lg: '800px',
              xs: '300px',
            },
            backgroundColor: '#FFFFFF',
          }}
        />
        <LoadingButton
          onClick={(e) => handleSearch(e)}
          className="search-btn"
          loading={searchLoading}
          startIcon={<SearchIcon />}
          loadingPosition="start"
          variant="contained"
          sx={{
            backgroundColor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '100px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
          }}
        >
          Search
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
