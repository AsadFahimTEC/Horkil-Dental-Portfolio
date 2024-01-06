
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-4">
      <div className="about-me" id="about-me">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-title">About MD. Asaduzzaman</div>

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
                  <img src="https://i.ibb.co/nBYsmzS/Asad.png" />
                  <h3 className="text-center text-blue-500">
                    Name: MD. Asaduzzaman
                  </h3>
                  <h3 className="-ml-3 text-center text-red-500">
                    Nationality: Bangladeshi
                  </h3>
                  <h3 className="-mr-2 text-center text-green-500">
                    Profession: Web Developer
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
                  An ambitious Front-end Developer and designer who takes great
                  pride in the presentation and quality of work.
                  <br />
                  <br />
                  Smit is someone who can design and create simple, beautiful
                  and easy to understand things. He is an expert at taking
                  designs into original, exciting and new directions.
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

      
        <div className="portfolio-link">
          <a
            href="https://657694fe458d3727d144171a--creative-meerkat-68dfbc.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            My Portfolio{" "}
          </a>
        </div>
    </div>
  );
};

export default Banner;
