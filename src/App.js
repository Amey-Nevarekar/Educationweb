import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HomeworkPage from './components/HomeworkPage';
import LecturePage from './components/LecturePage';
import SubmissionPage from './components/SubmissionPage';
import Login from './components/Login';
import SignUpPage from './components/Signup';
import HomeworkProvider from './components/HomeworkProvider';

function App() {
  return (
    <HomeworkProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/lecture" element={<LecturePage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/submission" element={<SubmissionPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </Router>
    </HomeworkProvider>
  );
}

export default App;


