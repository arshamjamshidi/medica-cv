import SectionCreator from "@/components/shared/SectionCreator";

const AboutUs = () => {
  return (
    <SectionCreator
      imgOrder={{ xs: 1, md: 0 }}
      mainOrder={{ xs: 1, md: 0 }}
      image="/images/HomePage/about.png"
      title="ABOUT US"
      description="Our Qualified Team is Ready to Help You!"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium eum similique! Sapiente, tempora nihil?"
      linkHref="/about"
      btnText="About Us"
    />
  );
};

export default AboutUs;
