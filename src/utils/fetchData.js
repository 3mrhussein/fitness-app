export const rapidExercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
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
