import BlogDetails from "@/components/modules/Blogs/BlogDetails";

const Blog = ({ blog }) => {
  return <BlogDetails blog={blog[0]} />;
};

export default Blog;

export async function getServerSideProps({ query: { slug } }) {
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?slug=${slug}`
  ).then((res) => res.json());

  return {
    props: {
      blog,
    },
  };
}
