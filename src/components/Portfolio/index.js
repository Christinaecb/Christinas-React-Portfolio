import React from "react";
import codingQuizImage from "../../assets/Projects/Coding-Quiz.jpg";
import employeeTrackerImage from "../../assets/Projects/Employee-Tracker.png";
import nomadNebulaImage from "../../assets/Projects/Nomad-Nebula.png";
import noteTakerImage from "../../assets/Projects/Note-Taker.png";
import teamProfileGeneratorImage from "../../assets/Projects/Team-Profile-Generator.png";
import textEditorImage from "../../assets/Projects/Text-Editor.png";
import workDayImage from "../../assets/Projects/Work-Day-Scheduler.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://christinaecb.github.io/Work-Day-Scheduler/">
                {" "}
                <img
                  src={workDayImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Day-Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
              In this assignment we are creating a daily planner that displays the current day and any events planned for that day. Here we'll be able to colour code past, present and future events, select certain time blocks and create a new event, save new events for that time block and insure that new time events stay after refreshing the page!
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Christinaecb/Text-Editor">
                {" "}
                <img
                  src={textEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text-Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              This is a basic text editing tool that can be accessed without an internet connection. It's designed as a Progressive Web App (PWA) and can be installed on your device. The application utilizes IndexedDB to save data locally, webpack to bundle files, and service workers to store files in cache for offline access.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Christinaecb/Professional-README-Generator">
                {" "}
                <img
                  src={teamProfileGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Team-Profile"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Team Profile Generator</h4>
              <p>
              This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://christinaecb-note-taker.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              This application is a note taking application utilizing Express.js as the back end and will save and retrieve the note data from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://the-nomad-nebula.herokuapp.com/">
                {" "}
                <img
                  src={nomadNebulaImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="NomadNebula"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Nomad Nebula</h4>
              <p>
                Nomad Nebula is an interactive full-stack web application that serves as a stargazing companion and social platform for stargazers. Users can discover stars and planets visible in the night sky in their area, get daily updates on stargazing and visibility conditions, create and manage their profiles, view and interact with posts from other stargazers on the community page, and access detailed information about their zodiac signs.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Christinaecb/Employee-Tracker">
                {" "}
                <img
                  src={employeeTrackerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="EmployeeTracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
              This is a command-line application that allows a company to manage its employee database. The application is built using Node.js, Inquirer, MySQL, and console.table/Chalk for styling.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://christinaecb.github.io/Coding-quiz-challenge/">
                {" "}
                <img
                  src={codingQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="CodingQuiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              Welcome to THE online quiz app! To start the quiz, please select the start button. From there you will be asked a series of questions with multiple choice answers. You must answer each question correctly or else time will be deducted from the timer! UH OH, no pressure! Once you answer all the questions, or the timer reaches 0 the game is over. Please enter you initials after to save your score! Thank you!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;