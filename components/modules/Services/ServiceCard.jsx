import Link from "next/link";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import ButtonMedica from "@/components/shared/ButtonMedica";

const ServicesCard = (props) => {
  const { slug, type, text, image } = props;

  return (
    <Card className="rounded-3xl shadow-2xl shadow-blue-200 p-4 mb-6 hover:-translate-y-2 transition-transform duration-200">
      <CardHeader
        avatar={
          <Avatar
            src={`${image}.png`}
            alt={type}
            sx={{ width: 90, height: 90 }}
          />
        }
        title={
          <Typography component="h4" className="text-xl font-bold">
            {type}
          </Typography>
        }
      />
      <CardContent>
        <Typography component="p" className="text-lg text-slate-500 pl-3">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/services/${slug}`} className="w-full">
          <ButtonMedica variant="outlined" className="w-full">
            LEARN MORE
          </ButtonMedica>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ServicesCard;
