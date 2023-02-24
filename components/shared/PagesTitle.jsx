import Link from "next/link";
import { useRouter } from "next/router";

import { Avatar, Box, Typography } from "@mui/material";
import ButtonMedica from "./ButtonMedica";

const PagesTitle = (props) => {
  const { title, text, linkHref, btnText, image } = props;

  return (
    <>
      <Box
        mt={21}
        mb={10}
        className=" bg-blue-500 text-white rounded-3xl flex flex-col gap-6 items-center py-10 shadow-2xl shadow-blue-500"
      >
        {image && (
          <Avatar src={`${image}.png`} sx={{ width: 125, height: 125 }} />
        )}

        <Typography component="h5" className="text-4xl font-bold">
          {title}
        </Typography>
        <Typography
          component="p"
          className="text-xl text-slate-200 text-center w-1/2"
        >
          {text}
        </Typography>

        {linkHref && (
          <Link href={linkHref} className="mt-4">
            <ButtonMedica
              variant="contained"
              className="text-blue-500 bg-white hover:bg-white"
            >
              {btnText}
            </ButtonMedica>
          </Link>
        )}
      </Box>
    </>
  );
};

export default PagesTitle;
