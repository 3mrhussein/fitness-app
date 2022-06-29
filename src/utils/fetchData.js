export const rapidExercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const rapidYoutubeSearchAndDownloadOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};
export const exercisesUrl = `https://exercisedb.p.rapidapi.com/exercises`;

export const rapidYoutubeSearchAndDownloadUrl = `
https://youtube-search-and-download.p.rapidapi.com
`;
