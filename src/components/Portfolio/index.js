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
               info here
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
                Info here{" "}
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
                info here.{" "}
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
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
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
                Nomad Nebula info.{" "}
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
                Employee Tracker info.{" "}
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
                Info about coding quiz{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;