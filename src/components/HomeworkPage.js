import React, { useState } from 'react';

function HomeworkPage() {
  const [homework, setHomework] = useState('');
  const [homeworkAssigned, setHomeworkAssigned] = useState(false);

  const handleAssignHomework = () => {
    // Logic to assign homework, like sending data to backend
    setHomeworkAssigned(true);
  };

  return (
    <div>
      <h2>Homework</h2>
      <p>{homeworkAssigned ? 'Homework Assigned ✓' : 'No homework assigned yet.'}</p>
      {homeworkAssigned || (
        <div>
          <textarea 
            value={homework} 
            onChange={(e) => setHomework(e.target.value)} 
            placeholder="Write homework here..."
          />
          <button onClick={handleAssignHomework}>Assign Homework</button>
        </div>
      )}
    </div>
  );
}

export default HomeworkPage;
