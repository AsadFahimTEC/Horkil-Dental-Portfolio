import { useState } from "react";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image:
        "https://i.ibb.co/dfRf3qs/IMG-20240105-160708920.jpg",
      title: "Your Perfect Smile",
      description:
        "A confident smile reflects self-assurance, positivity, and a sense of inner happiness. It is a universal symbol of approachability, warmth, and assurance. When you smile confidently, you not only express joy but also radiate a sense of self-worth and assurance to those around you.",
    },
    {
      image: "https://i.ibb.co/QFxTpGD/IMG-20240105-152654203-BURST000-COVER.jpg",
      title: "Your Best Smile",
      description:
        "Unlock Your Best Smile is an empowering and inviting phrase that encourages individuals to discover and embrace the full potential of their smiles. This succinct message conveys the idea that each person holds the key to a confident, radiant, and genuinely captivating smile.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);

    // Use react-toastify for an attractive notification
    toast.success("Slide Changed!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="slider-container text-white mt-6 ml-6 mr-6 flex flex-col md:flex-row relative">
      <div className="slider-content w-full md:w-3/4">
        <Slider {...settings} afterChange={handleSlideChange}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-details w-full md:w-1/4 p-6">
        <div className="slider-details-inner">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg text-white font-montserrat font-bold mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="ml-2 bg-green-500 text-white font-medium text-sm px-6 py-3 rounded-md transition duration-300 hover:bg-red-500">
            Book NOW
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Sliders;
