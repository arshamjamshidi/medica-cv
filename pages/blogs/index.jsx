import PagesTitle from "@/components/shared/PagesTitle";
import Blogs from "@/components/templates/Blogs";

const BlogsPage = ({ blogs }) => {
  return (
    <>
      <PagesTitle
        title="Our Stories"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        linkHref="/contact"
        btnText="Contact Us"
      />

      <Blogs blogs={blogs} />
    </>
  );
};

export default BlogsPage;

export async function getStaticProps() {
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`).then(
    (res) => res.json()
  );

  return {
    props: {
      blogs,
    },
    revalidate: +process.env.REVALIDATE,
  };
}
