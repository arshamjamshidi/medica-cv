import Link from "next/link";

import { Box, Typography } from "@mui/material";
import ButtonMedica from "@/components/shared/ButtonMedica";

const NotFound = () => {
  return (
    <Box mt={24} className="flex flex-col items-center">
      <Typography
        component="p"
        className="font-black text-slate-300"
        fontSize={200}
        lineHeight={1}
      >
        404
      </Typography>
      <Typography
        component="p"
        className="text-4xl font-extrabold text-blue-500"
      >
        Page Not Found
      </Typography>
      <Typography component="p" className="my-10">
        The page youre looking for isnt available. Try with another page or
        use the go home button below
      </Typography>
      <Link href="/">
        <ButtonMedica variant="contained">Go Home</ButtonMedica>
      </Link>
    </Box>
  );
};

export default NotFound;
