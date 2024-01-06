
import './Contact.css'; // Import your custom styles

const Contact = () => {
  return (
    <div className="mt-4">
      {/* Image Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {/* Group 1 */}
          <div className="marquee-group">
            <img
              src="https://i.ibb.co/6tb7yr1/pexels-photo-5355894.webp"
              alt="Image 1"
              className="marquee-item"
            />
            {/* Add a gap between images */}
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/42wsXXj/pexels-photo-5355900-1.jpg"
              alt="Image 2"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/WsZh5PD/pexels-photo-5355829.webp"
              alt="Image 3"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/42wsXXj/pexels-photo-5355900-1.jpg"
              alt="Image 4"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/5nYc8mC/pexels-photo-3881449.jpg"
              alt="Image 5"
              className="marquee-item"
            />
          </div>

          {/* Group 2 (hidden for continuous scrolling) */}
          <div aria-hidden="true" className="marquee-group">
            {/* Duplicate of Group 1 for continuous scrolling effect */}
            <img
              src="https://i.ibb.co/KNvctLw/pexels-photo-6502544.webp"
              alt="Image 1"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/FWnbwB8/pexels-photo-6528861-1.jpg"
              alt="Image 2"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/n3q3SxG/pexels-photo-6529110.jpg"
              alt="Image 3"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/FWnbwB8/pexels-photo-6528861-1.jpg"
              alt="Image 4"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/ThSX2Jg/pexels-photo-6629414.jpg"
              alt="Image 5"
              className="marquee-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
