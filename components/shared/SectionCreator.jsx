import Link from "next/link";
import Image from "next/image";

import { Box, Grid, Typography } from "@mui/material";
import ButtonMedica from "./ButtonMedica";

const SectionCreator = (props) => {
  const {
    imgOrder,
    mainOrder,
    image,
    title,
    description,
    text,
    linkHref,
    btnText,
    children,
    className,
  } = props;

  return (
    <Grid container mb={10} className={`${className}`}>
      <Grid item xs={12} md={6} order={imgOrder}>
        <Image src={image} alt={title} width={1000} height={1000} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        order={mainOrder}
        className="flex flex-col justify-center"
      >
        <Typography
          component="h4"
          className="text-blue-500 font-bold border-b-4 border-blue-400 w-fit mb-5"
        >
          {title}
        </Typography>
        <Typography component="p" className="text-5xl font-extrabold mb-5">
          {description}
        </Typography>
        <Typography component="p" className="text-lg text-slate-500 mb-6">
          {text}
        </Typography>

        {linkHref && (
          <Link href={linkHref}>
            <ButtonMedica variant="contained">{btnText}</ButtonMedica>
            <Box className="inline ml-2">{children}</Box>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default SectionCreator;
