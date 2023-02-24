import PagesTitle from "@/components/shared/PagesTitle";
import { Box, Typography } from "@mui/material";

const ServicesDetails = ({ service }) => {
  const { type, text, image, description } = service;

  return (
    <>
      <PagesTitle
        title={type}
        text={text}
        linkHref="/contact"
        btnText="Contact Us"
        image={image}
      />

      <Box
        my={10}
        className="flex flex-col items-center justify-center gap-12 max-w-2xl mx-auto"
      >
        <Typography component="h6" className="text-4xl font-extrabold">
          Why do you need a {type}?
        </Typography>

        {description.map((item, index) => (
          <Typography
            key={index}
            component="p"
            className="text-xl text-slate-600 border-l-4 border-blue-500 rounded-sm pl-5"
          >
            {item}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default ServicesDetails;
