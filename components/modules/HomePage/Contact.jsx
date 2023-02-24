import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SectionCreator from "@/components/shared/SectionCreator";
import ButtonMedica from "@/components/shared/ButtonMedica";

const Contact = () => {
  return (
    <SectionCreator
      imgOrder={{ xs: 1, md: 0 }}
      mainOrder={{ xs: 1, md: 0 }}
      image="/images/HomePage/contact.png"
      title="BOOK AN APPOINTMENT"
      description="Our Medical Team is Ready to Help You."
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium eum similique! Sapiente, tempora nihil?"
      linkHref="/contact"
      btnText="Contact Us"
    >
      <ButtonMedica variant="outlined">
        <PhoneOutlinedIcon className="mr-2" />
        (404) 850 - 7080
      </ButtonMedica>
    </SectionCreator>
  );
};

export default Contact;
