import Link from "next/link";

import { Grid, Typography } from "@mui/material";
import ButtonMedica from "@/components/shared/ButtonMedica";
import Blogs from "@/components/templates/Blogs";

const Stories = ({ blogs }) => {
  return (
    <Grid container mt={10}>
      <Grid item xs={12} className="flex flex-col items-center mb-8">
        <Typography
          component="h6"
          className="text-slate-500 font-semibold tracking-wide"
        >
          RECENT NEWS
        </Typography>
        <Typography component="h6" className="font-black sm:text-4xl text-3xl mt-2 mb-5">
          Our Latest Stories
        </Typography>
        <Typography
          component="p"
          className="text-slate-500 font-semibold text-center"
          width="50%"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium eum similique! Sapiente, tempora nihil?
        </Typography>
      </Grid>

      <Blogs blogs={blogs} />

      <Grid item xs={12} className="text-center mt-10">
        <Link href="/blog">
          <ButtonMedica variant="contained">OUR STORIES</ButtonMedica>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Stories;
