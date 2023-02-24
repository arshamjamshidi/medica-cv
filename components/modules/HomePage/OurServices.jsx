import Link from "next/link";

import { Grid, Typography } from "@mui/material";
import Services from "@/components/templates/Services";
import ButtonMedica from "@/components/shared/ButtonMedica";

const OurServices = ({ services }) => {
  return (
    <Grid container mt={10}>
      <Grid item xs={12} className="flex flex-col items-center">
        <Typography
          component="h6"
          className="text-slate-500 font-semibold tracking-wide"
        >
          OUR SERVICES
        </Typography>
        <Typography component="h6" className="font-black text-4xl mt-2 mb-5">
          Specialties
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

      <Services services={services} />

      <Grid item xs={12} className="text-center mt-10">
        <Link href="/services">
          <ButtonMedica variant="contained">OUR SERVICES</ButtonMedica>
        </Link>
      </Grid>
    </Grid>
  );
};

export default OurServices;
