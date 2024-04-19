import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HomeworkPage from './components/HomeworkPage';
import LecturePage from './components/LecturePage';
import SubmissionPage from './components/SubmissionPage';
import Login from './components/Login';
import SignUpPage from './components/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your routes here */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/homework" element={<HomeworkPage />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


