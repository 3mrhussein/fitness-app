import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from './pages/Home/Home.page';
import Footer from './components/footer';
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail.page';
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
