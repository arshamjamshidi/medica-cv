import Link from "next/link";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ButtonMedica from "@/components/shared/ButtonMedica";

const BlogCard = (props) => {
  const { slug, name, text, image } = props;

  return (
    <Card className="mb-6 rounded-3xl shadow-2xl shadow-blue-200 hover:-translate-y-2 transition-transform duration-200">
      <CardMedia sx={{ height: 180 }} image={`${image}.jpeg`} title={name} />
      <CardContent className="p-4">
        <Typography component="h5" className="text-xl font-semibold mb-3">
          {name}
        </Typography>
        <Typography component="p" className="text-lg text-slate-500">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blogs/${slug}`} className="w-full text-right">
          <ButtonMedica variant="text">
            READ MORE
            <KeyboardArrowRightRoundedIcon
              className="align-top font-semibold"
              fontSize="large"
            />
          </ButtonMedica>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
