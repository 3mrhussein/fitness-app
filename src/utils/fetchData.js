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
export const fetchExercises = async (searchTerm) => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises';

  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    const filteredData = data.filter(
      (exercise) =>
        exercise?.name.toLowerCase().includes(searchTerm) ||
        exercise?.target.toLowerCase().includes(searchTerm) ||
        exercise?.bodyPart.toLowerCase().includes(searchTerm) ||
        exercise?.equipment.toLowerCase().includes(searchTerm)
    );
    return filteredData;
  } catch (e) {
    console.log(e.message);
  }
};
export const fetchExercisesByBodyPart = async (bodyPart) => {
  const url =
    bodyPart === 'all'
      ? `https://exercisedb.p.rapidapi.com/exercises`
      : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;

  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchExerciseById = async (Id) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${Id}`;

  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchBodyParts = async () => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const rapidYoutubeSearchAndDownloadUrl = `
https://youtube-search-and-download.p.rapidapi.com
`;

export const searchYoutubeVideo = async (searchTerm) => {
  const url = `${rapidYoutubeSearchAndDownloadUrl}/search?query=${searchTerm}`;
  try {
    const response = await fetch(url, rapidYoutubeSearchAndDownloadOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    alert(e.message);
  }
};

export const fetchExercisesByTargetMuscle = async (taget) => {
  const url = `${exercisesUrl}/target/${taget}`;
  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    alert(e.message);
  }
};

export const fetchExercisesByEquipment = async (equipment) => {
  const url = `${exercisesUrl}/equipment/${equipment}`;
  try {
    const response = await fetch(url, rapidExercisesOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    alert(e.message);
  }
};
