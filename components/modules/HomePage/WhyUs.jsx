import SectionCreator from "@/components/shared/SectionCreator";

const WhyUs = () => {
  return (
    <SectionCreator
      imgOrder={{ xs: 0, md: 1 }}
      mainOrder={{ xs: 1, md: 0 }}
      image="/images/HomePage/whyus.png"
      title="WHY US"
      description="Your Well-Being is our Main Priority."
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium eum similique! Sapiente, tempora nihil?"
      linkHref="/about"
      btnText="Why Us"
    />
  );
};

export default WhyUs;
