import "./About.css";

const About = () => {
  return (
    <div className="mt-4">
      <div className="about-me" id="about-me">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-title">About Horkil Alom</div>

            <div className="about-me-flex-container">
              <div className="about-me-image">
                <div className="back-div"></div>
                <div className="black-image">
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                    alt="Black Background"
                  />
                </div>
                <div className="main-image">
                  <img src="https://i.ibb.co/BCSjGhz/photo-1667133295308-9ef24f71952e-removebg-preview.png" />
                  <h3 className="text-center text-blue-500">
                    Name: MD. Horkil Alom
                  </h3>
                  <h3 className="-ml-3 text-center text-red-500">
                    Nationality: Bangladeshi
                  </h3>
                  <h3 className="-mr-2 text-center text-green-500">
                    Profession: Dentist
                  </h3>
                </div>
              </div>
              <div className="about-me-content">
                <div className="logo">
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg"
                    alt="Logo"
                  />
                </div>
                <div className="text">
                  Horkil Alom is a dedicated and skilled dentist associated with
                  Anika Dental Point. With a passion for oral health and patient
                  care, Dr. Alom brings expertise and a gentle touch to his
                  practice. Committed to providing personalized and
                  comprehensive dental solutions, he strives to create a
                  comfortable and positive experience for every patient.
                  <br />
                  <br />
                  Dr. Alom's commitment to excellence in dentistry is reflected
                  in his unwavering dedication to helping individuals achieve
                  optimal oral health and a confident smile at Anika Dental
                  Point.
                </div>
              </div>
            </div>

            <div className="mail-button mail-button2">
              <a href="mailto:prajapatismit2906@gmail.com">
                <img
                  src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
                  alt="Mail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
