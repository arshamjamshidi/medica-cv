import Link from "next/link";
import Image from "next/image";

import { Grid, Typography } from "@mui/material";
import ButtonMedica from "@/components/shared/ButtonMedica";

const Banner = () => {
  return (
    <Grid container className="mt-44">
      <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }}>
        <Typography
          component="h4"
          className="text-blue-500 font-semibold border-b-4 border-blue-400 w-fit mb-5"
        >
          HOSPITAL CENTER
        </Typography>
        <Typography component="p" className="text-6xl font-black mb-5">
          Healthcare for Family`s Health
        </Typography>
        <Typography component="p" className="text-lg text-slate-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium eum similique! Sapiente, tempora nihil?
        </Typography>
        <Link href="/contact">
          <ButtonMedica variant="contained">Book an Appointment</ButtonMedica>
        </Link>
      </Grid>
      <Grid item xs={12} md={6} mb={6}>
        <Image
          src="/images/HomePage/banner.png"
          alt="banner"
          width={1000}
          height={1000}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
