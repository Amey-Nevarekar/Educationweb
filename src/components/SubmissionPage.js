import React, { useState } from 'react';

function SubmissionPage() {
  const [submission, setSubmission] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Logic to handle submission, like sending data to backend
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Submission</h2>
      <textarea 
        value={submission} 
        onChange={(e) => setSubmission(e.target.value)} 
        placeholder="Write your submission here..."
      />
      {submitted ? (
        <p>Submission Sent ✓</p>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
}

export default SubmissionPage;
