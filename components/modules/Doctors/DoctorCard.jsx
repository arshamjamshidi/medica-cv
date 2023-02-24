import Link from "next/link";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import ButtonMedica from "@/components/shared/ButtonMedica";

const DoctorCard = (props) => {
  const { slug, name, expertise, text, image } = props;

  return (
    <Card className="rounded-3xl shadow-2xl shadow-blue-500 pb-4 mb-6 hover:-translate-y-2 transition-transform duration-200">
      <CardMedia sx={{ height: 450 }} image={`${image}.jpeg`} />
      <CardContent className="p-6">
        <Typography component="h6" className="text-lg font-bold mb-1">
          {name}
        </Typography>
        <Typography
          component="p"
          className="text-md font-semibold text-blue-500"
        >
          {expertise}
        </Typography>
        <Typography
          component="p"
          className="text-lg font-semibold text-slate-500 mt-4"
        >
          {text}
        </Typography>
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
      </CardContent>
      <CardActions className="px-5">
        <Link href={`/doctors/${slug}`} className="w-full">
          <ButtonMedica variant="outlined" className="w-full">
            LEARN MORE
          </ButtonMedica>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DoctorCard;
