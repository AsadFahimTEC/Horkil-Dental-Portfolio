
import Banner from "../Banner/Banner";
import Banners from "../Banners/Banners";
import Contact from "../ContactUs/Contact";
import ContactUs from "../ContactUs/ContactUs";
import Education from "../Education/Education";
import Slider from "../Slider/Slider";
// import Services from "../Services/Services";
import Tabs from "../Tabs/Tabs";
import TouristStories from "../TourStory/TourStory";
// import Type from "../Type/Type";



const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Slider></Slider>
            <Banner></Banner>
            <Tabs></Tabs>
            <TouristStories></TouristStories>
            <Contact></Contact>
            {/* <Type></Type> */}
            <Education></Education>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;