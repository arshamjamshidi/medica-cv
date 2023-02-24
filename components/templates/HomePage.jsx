import Banner from "../modules/HomePage/Banner";
import Attributes from "../modules/HomePage/Attributes";
import AboutUs from "../modules/HomePage/AboutUs";
import WhyUs from "../modules/HomePage/WhyUs";
import OurServices from "../modules/HomePage/OurServices";
import Contact from "../modules/HomePage/Contact";
import Stories from "../modules/HomePage/Stories";
import WeHelp from "../modules/HomePage/WeHelp";

const HomePage = ({ services, blogs }) => {
  const slicedServices = services.slice(0, 3);

  return (
    <>
      <Banner />
      <Attributes />
      <AboutUs />
      <WhyUs />
      <OurServices services={slicedServices} />
      <Contact />
      <Stories blogs={blogs} />
      <WeHelp />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HomePage;
