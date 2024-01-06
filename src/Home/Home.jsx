
import Banner from "../Banner/Banner";
import Banners from "../Banners/Banners";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Education from "../Education/Education";
import Slider from "../Slider/Slider";





const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Slider></Slider>
            <Banner></Banner>
            <Contact></Contact>
            {/* <Type></Type> */}
            <Education></Education>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;