import React, { useState } from 'react';
import HomeworkContext from './HomeworkContext';

function SubmissionPage() {
  const { homework } = React.useContext(HomeworkContext);
  const [submission, setSubmission] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Add your logic to handle submission, such as sending data to backend
    setSubmitted(true);
  };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
            
          >
            Submission
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Write your submission here..."
              className="form-control" // Add Bootstrap class for styling
            />
            {submitted ? (
              <p>Submission Sent ✓</p>
            ) : (
              <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                Submit
              </button>
            )}
            <p>Homework: {homework}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionPage;

