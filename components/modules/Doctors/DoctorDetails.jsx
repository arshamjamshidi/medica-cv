import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

import { Box, Grid, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BlogCard from "../Blogs/BlogCard";

const DoctorDetails = ({ doctor }) => {
  const { name, expertise, description, image } = doctor;

  const { data: doctorBlogs } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?writer=${name}`,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <>
      <Grid container spacing={4} my={24}>
        {/* OFFSET */}
        <Grid item xs={1} md={2}></Grid>

        <Grid item xs={10} md={4}>
          <Image
            src={`${image}.jpeg`}
            alt={name}
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl shadow-blue-400"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="p-4">
            <Typography
              component="h6"
              className="text-blue-500 font-bold border-b-4 border-blue-400 w-fit mb-4"
            >
              {expertise}
            </Typography>
            <Typography component="h6" className="text-4xl font-extrabold">
              {name}
            </Typography>
            <Box>
              <Box className="flex gap-x-2 mt-4 text-white">
                <Link
                  href="#"
                  className="hover:bg-blue-400 transition bg-blue-500 p-1 rounded-md"
                >
                  <PhoneOutlinedIcon />
                </Link>
                <Link
                  href="#"
                  className="hover:bg-blue-400 transition bg-blue-500 p-1 rounded-md"
                >
                  <MailOutlineRoundedIcon />
                </Link>
              </Box>
              <Typography
                component="p"
                className="text-lg font-medium text-slate-500 mt-4"
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 0, sm: 2 }}
        my={14}
        className="bg-blue-50 p-4 rounded-3xl shadow-2xl shadow-blue-500"
      >
        <Grid item xs={12}>
          <Typography
            component="h6"
            className="text-3xl font-bold text-center py-5 text-blue-600"
          >
            Articles by {name}
          </Typography>
        </Grid>

        {doctorBlogs && doctorBlogs.length ? (
          doctorBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <BlogCard {...blog}></BlogCard>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              component="p"
              className="text-2xl text-slate-600 bg-blue-100 font-bold text-center py-5 rounded-lg"
            >
              The doctor havent uploaded any post yet
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default DoctorDetails;
