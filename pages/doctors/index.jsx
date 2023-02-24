import PagesTitle from "@/components/shared/PagesTitle";
import Doctors from "@/components/templates/Doctors";

const DoctorsPage = ({ doctors }) => {
  return (
    <>
      <PagesTitle
        title="Our Doctors"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        linkHref="/contact"
        btnText="Contact Us"
      />

      <Doctors doctors={doctors} />
    </>
  );
};

export default DoctorsPage;

export async function getStaticProps() {
  const doctors = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/doctors`
  ).then((res) => res.json());

  return {
    props: {
      doctors,
    },
  };
}
