import React, { useState } from 'react';
import HomeworkContext from './HomeworkContext';

const HomeworkProvider = ({ children }) => {
  const [homework, setHomework] = useState('');
  const [homeworkAssigned, setHomeworkAssigned] = useState(false);

  const assignHomework = (newHomework) => {
    setHomework(newHomework);
    setHomeworkAssigned(true);
  };

  return (
    <HomeworkContext.Provider value={{ homework, assignHomework, homeworkAssigned }}>
      {children}
    </HomeworkContext.Provider>
  );
};

export default HomeworkProvider;