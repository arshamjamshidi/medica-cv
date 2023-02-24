import HomePage from "@/components/templates/HomePage";

const Home = ({ services, blogs }) => {
  return <HomePage services={services} blogs={blogs} />;
};

export default Home;

export async function getStaticProps() {
  const services = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services`
  ).then((res) => res.json());
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`).then(
    (res) => res.json()
  );

  return {
    props: {
      services,
      blogs,
    },
  };
}
