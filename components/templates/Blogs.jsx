import { Grid } from "@mui/material";
import BlogCard from "../modules/Blogs/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <Grid container spacing={2} my={5}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <BlogCard {...blog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
