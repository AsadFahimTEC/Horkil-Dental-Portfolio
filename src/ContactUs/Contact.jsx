import "./Contact.css";
const Contact = () => {
  return (
    <div className="CV-page mt-3">
      <div className="CV-grid">
        <div className="CV-grid-column">
          <div className="CV-jobs">
            <h2 className="CV-secondaryHeading CV-jobs-heading">
              Relevant Experience
            </h2>
            <section className="CV-timeline CV-job">
              <h3 className="CV-timeline-heading">
                <span className="CV-timeline-heading-title">
                  Learning Web Design and Development{" "}
                </span>
                &#8211;{" "}
                <span className="CV-timeline-heading-location">
                  Programming Hero{" "}
                </span>
                <small className="CV-timeline-heading-duration">
                  July 2023 - Present
                </small>
              </h3>
              <ul className="CV-timeline-details">
                <li className="CV-job-timeline-item">
                  Developed and maintained code for in-house and client websites
                  utilizing HTML5, CSS3, Javascript, ReactJS, ExpressJS, and
                  MongoDB.
                </li>
                <li className="CV-job-timeline-item">
                  Tested front-end code in multiple browsers to ensure
                  cross-browser compatability.
                </li>
                <li className="CV-job-timeline-item">
                  Coordinated closely with other developers and digital
                  producers to expedite projects.
                </li>
                <li className="CV-job-timeline-item">
                  Responsive webpage designed properly for all devices.
                </li>
              </ul>
            </section>
            <section className="CV-timeline CV-job">
              <h3 className="CV-timeline-heading">
                <span className="CV-timeline-heading-title">
                  Learning Basic Web Development{" "}
                </span>
                &#8211;{" "}
                <span className="CV-timeline-heading-location">
                  OpenClassroom Google
                </span>
                <small className="CV-timeline-heading-duration">
                  June 2023
                </small>
              </h3>
              <ul className="CV-timeline-details">
                <li className="CV-timeline-details-item">
                  Learning basic web development is an essential step for anyone
                  interested in building a strong foundation in creating
                  websites. It typically involves gaining proficiency in
                  fundamental technologies such as HTML for structuring content,
                  CSS for styling and layout, and JavaScript for adding
                  interactivity. Understanding these core languages enables
                  individuals to design visually appealing and responsive web
                  pages.{" "}
                </li>
                <li className="CV-timeline-details-item">
                Many online platforms offer tutorials, interactive coding exercises, and projects that facilitate hands-on learning, making basic web development accessible to individuals with varying levels of technical expertise. With these skills, beginners can embark on a rewarding journey to create their own web projects and further advance into more complex aspects of web development.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
