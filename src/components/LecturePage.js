import React, { useState } from 'react';

function LecturePage() {
  const [lectureRead, setLectureRead] = useState(false);

  const handleCompleteLecture = () => {
    setLectureRead(true);
  };

  return (
    <div>
      <h2>Lecture</h2>
      <p>This is the text-based lecture content.</p>
      {lectureRead ? (
        <p>Lecture Completed ✓</p>
      ) : (
        <button onClick={handleCompleteLecture}>Mark as Complete</button>
      )}
    </div>
  );
}

export default LecturePage;
