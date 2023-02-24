import Link from "next/link";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

const BlogDetails = ({ blog }) => {
  const { name, writer, publication, description, image } = blog;

  return (
    <>
      <Box mt={24} className="flex flex-col items-center">
        <Typography component="h5" className="text-4xl font-bold">
          {name}
        </Typography>
        <div className="my-6">
          <Typography
            component="span"
            className="text-lg font-medium text-slate-500 pr-4"
          >
            Written by{" "}
            <Link
              href={`/doctors/${writer.split(" ")[0].toLowerCase()}-${writer
                .split(" ")[1]
                .toLowerCase()}`}
              className="border-b-2 text-blue-400"
            >
              {writer}
            </Link>
          </Typography>
          <Typography
            component="span"
            className="text-lg font-medium text-slate-500 border-l-2 pl-4"
          >
            {publication}
          </Typography>
        </div>
        <Image src={`${image}.jpeg`} alt={name} width={1000} height={1000} />
      </Box>

      <Box
        my={10}
        className="flex flex-col items-center justify-center gap-12 max-w-2xl mx-auto"
      >
        <Typography component="p" className="text-4xl font-extrabold">
          Et quo saepe debitis qui in assumenda nihil consequuntur quibusdam.
        </Typography>
        <Typography component="p" className="text-xl text-slate-600">
          {description[0]}
        </Typography>
        <Typography
          component="p"
          className="text-2xl font-extrabold text-slate-800"
        >
          Pariatur et qui sit deserunt iste voluptatibus ratione et consectetur.
        </Typography>
        {description.map((item, index) => (
          <Typography
            key={index}
            component="p"
            className="text-xl text-slate-600 border-l-4 border-blue-500 rounded-sm pl-5"
          >
            {index !== 0 && item}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default BlogDetails;
