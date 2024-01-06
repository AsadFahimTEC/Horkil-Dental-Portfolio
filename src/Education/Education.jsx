
import "./Education.css";

const Education = () => {
  return (
    <div>
      <div className="mt-3">
        <h3 className="section-title text-3xl text-green-600 text-center">A summary of My Resume</h3>
        <div className="resume-container ml-10 mr-10">
          <div className="resume-column">
            <h3 className="resume-column-title">My Education</h3>

            <div className="resume-item">
              <h2 className="resume-item-title">
                BSC in Computer Science & Engineering
              </h2>
              <h3 className="resume-item-info">
                University of Rajshahi / 2017-2022
              </h3>
              <p className="resume-item-description">
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="resume-item">
              <h2 className="resume-item-title">
                Higher Secondary School Certificate
              </h2>
              <h3 className="resume-item-info">
                Joypurhat Govt. College / 2013-2024
              </h3>
              <p className="resume-item-description">
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="resume-item">
              <h2 className="resume-item-title">
                Secondary School Certificate
              </h2>
              <h3 className="resume-item-info">
                Omar Garten Academy / 2004-2013
              </h3>
              <p className="resume-item-description">
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Education;
