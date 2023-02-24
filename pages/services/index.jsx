import PagesTitle from "@/components/shared/PagesTitle";
import Services from "@/components/templates/Services";

const ServicesPage = ({ services }) => {
  return (
    <>
      <PagesTitle
        title="Our Services"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        linkHref="/contact"
        btnText="Contact Us"
      />

      <Services services={services} />
    </>
  );
};

export default ServicesPage;

export async function getStaticProps() {
  const services = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services`
  ).then((res) => res.json());

  return {
    props: {
      services,
    },
    revalidate: +process.env.REVALIDATE,
  };
}
