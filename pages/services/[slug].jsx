import ServicesDetails from "@/components/modules/Services/ServiceDetails";

const Service = ({ service }) => {
  return <ServicesDetails service={service[0]} />;
};

export default Service;

export async function getStaticPaths() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`).then(
    (res) => res.json()
  );
  const services = data.slice(0, 2);
  const paths = services.map((service) => ({ params: { slug: service.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const service = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services?slug=${slug}`
  ).then((res) => res.json());

  return {
    props: {
      service,
    },
    revalidate: +process.env.REVALIDATE,
  };
}
