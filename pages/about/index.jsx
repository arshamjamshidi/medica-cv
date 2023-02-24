import PagesTitle from "@/components/shared/PagesTitle";
import SectionCreator from "@/components/shared/SectionCreator";

const AboutPage = () => {
  return (
    <>
      <PagesTitle
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        linkHref=""
        btnText=""
      />

      <SectionCreator
        imgOrder={{ xs: 1, md: 0 }}
        mainOrder={{ xs: 1, md: 0 }}
        image="/images/HomePage/about.png"
        title="ABOUT US"
        description="Our Qualified Team is Ready to Help You!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium eum similique! Sapiente, tempora nihil?"
        linkHref=""
        btnText=""
      />
    </>
  );
};

export default AboutPage;
