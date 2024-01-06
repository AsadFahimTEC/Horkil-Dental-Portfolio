import Banner from "../Banner/Banner";
import Banners from "../Banners/Banners";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Banners></Banners>
      <Slider></Slider>
      <Banner></Banner>
      <ContactUs></ContactUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
