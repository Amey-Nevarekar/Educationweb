import './Home.css'
import React from 'react';
import Search from './Search';


function HomePage() {
  return (
    <>
      <div className='home-container'>
        <div className='left-content'>
          <div className='name-home'>
            <div className='name-title'><h1>WebClass</h1></div>
            <div className='name-para'><p> Welcome to our E learning platform. It is built for students for online education. This website is created by Amey Nevarekar.</p></div>
            <div><Search/></div>
          </div>
        </div>

        <div className='right-content'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p className='rightp'> Personalized Learning Paths: The app offers personalized learning paths tailored to each user's individual learning goals, preferences, and skill level. Through assessments and user input, the app identifies areas of strength and weakness and recommends specific courses, lessons, or learning activities to help users achieve their learning objectives more effectively.Comprehensive Learning Resources: In addition to interactive modules, the app offers a wide range of learning resources such as reading materials, case studies, and practical exercises. These resources complement the interactive content and provide users with a comprehensive understanding of the subject matter.</p>
              </div>
              <div className="carousel-item">
                <p className='rightp'>Real-time Collaboration and Feedback: The app facilitates real-time collaboration and feedback between students and instructors through features such as live chat, discussion forums, and virtual classrooms. Users can interact with instructors and peers, ask questions, participate in group discussions, and receive timely feedback on their progress, assignments, and assessments, fostering a sense of community and support in the online learning environment Adaptive Learning Technology: The app utilizes adaptive learning technology to dynamically adjust the difficulty level and pace of learning based on each user's performance and progress. .</p>
              </div>
              <div className="carousel-item">
                <p className='rightp'>Interactive Learning Modules: The app provides interactive learning modules that engage users with multimedia content such as videos, interactive quizzes, and simulations. These modules offer a dynamic learning experience that caters to different learning styles and keeps users actively engaged in the learning process. Goal Setting and Tracking: Users can set learning goals within the app and track their progress towards achieving them. The app provides visual representations of progress, such as progress bars or milestone badges, to motivate users and keep them engaged in their learning journey.</p>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="previous-button "></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="next-button"></span>
            </button>
          </div>
        </div>

      </div>

      <div className='cards'>

        <div className="card text-bg-secondary mb-3" style={{ width: '18rem' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlINWJh9CkPca226pD60ttQamTFqoYrK7oTw&s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Learn</h5>
            <p className="card-text"> Offline class is boaring!learn new concept on the internet via youtube it will be a amazing experience </p>
            <a href="https://www.youtube.com/" className="btn btn-primary">Free Learning</a>
          </div>
        </div>

        <div className="card text-bg-secondary mb-3" style={{ width: '18rem' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ91Obp5sKjSSp4xyQq1SJtIcZvTxU8ubPSA&s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chatgpt</h5>
            <p className="card-text">Use and experience artificial intellegence with the help of free AI tool improve your knowledge  and skills.</p>
            <a href="https://chat.openai.com/c/bca05e13-5e3c-43fe-b74a-fa49b1e9bafc" className="btn btn-primary">Helping you</a>
          </div>
        </div>


        <div className="card text-bg-secondary mb-3" style={{ width: '18rem' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnBC4Hn9HaOQwqNRJhECzszcg5v2tOJ2a6g&s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developement Team</h5>
            <p className="card-text">This website build by Amey Dipak Nevarekar with the help of html/css, React.js Node.js</p>
            <a href="https://www.linkedin.com/in/amey-nevarekar-604a42245" className="btn btn-primary">linkedin profile</a>
          </div>
        </div>

        <div className="card text-bg-secondary mb-3" style={{ width: '18rem' }}>
          <img src="https://static.theprint.in/wp-content/uploads/2023/04/Untitled-design-30-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Games</h5>
            <p className="card-text">Everyone like playing games its better to learn  with playing games that improve your focus on study and give you fun.</p>
            <a href="#" className="btn btn-primary">Start play</a>
          </div>
        </div>

      </div>



    </>
  );
}

export default HomePage;


