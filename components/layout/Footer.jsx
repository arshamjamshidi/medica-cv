import Link from "next/link";

import { Box, Grid, List, ListItem, Toolbar, Typography } from "@mui/material";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ButtonMedica from "../shared/ButtonMedica";

const Footer = () => {
  const menuItems = {
    Home: "/",
    "About Us": "/about",
    Services: "services",
    Doctors: "/doctors",
    Blogs: "/blogs",
    "Contact Us": "/contact",
  };

  const servicesItems = {
    Cardiology: "/services/cardiology",
    Gastroenterologist: "/services/gastroenterologist",
    Orthopedic: "/services/orthopedic",
    "Plastic Surgeons": "/services/plastic-surgeons",
  };

  return (
    <>
      <Toolbar className="flex justify-between items-center p-0">
        <Link href="/">
          <Typography
            component="h1"
            className="hover:scale-95 transition-transform"
          >
            <HealingRoundedIcon className="text-blue-500 text-5xl mr-2" />
            <span className="font-bold text-2xl">Medica</span>
          </Typography>
        </Link>
        <Box className="flex gap-x-4">
          <Link href="#">
            <TwitterIcon className="text-blue-500 text-4xl hover:text-blue-400 transition" />
          </Link>
          <Link href="#">
            <FacebookRoundedIcon className="text-blue-500 text-4xl hover:text-blue-400 transition" />
          </Link>
          <Link href="#">
            <InstagramIcon className="text-blue-500 text-4xl hover:text-blue-400 transition" />
          </Link>
        </Box>
      </Toolbar>

      <Grid container my={5}>
        <Grid item xs={12} md={6} lg={3}>
          <Typography component="p" className="text-md font-semibold mb-5">
            Menu
          </Typography>
          <List>
            {Object.keys(menuItems).map((item, index) => (
              <ListItem key={index} className="font-semibold text-slate-500">
                <Link
                  href={Object.values(menuItems)[index]}
                  className="hover:text-blue-500 transition"
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography component="p" className="text-md font-semibold mb-5">
            Services
          </Typography>
          <List>
            {Object.keys(servicesItems).map((item, index) => (
              <ListItem key={index} className="font-semibold text-slate-500">
                <Link
                  href={Object.values(servicesItems)[index]}
                  className="hover:text-blue-500 transition"
                >
                  {item}
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Link
                href="/services"
                className="text-blue-500 hover:text-blue-600 transition font-semibold"
              >
                See All <KeyboardArrowRightRoundedIcon className="align-top" />
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography component="p" className="text-md font-semibold mb-5">
            Contact Us
          </Typography>
          <List className="font-semibold text-slate-500">
            <ListItem>
              <LocalPhoneRoundedIcon className="text-blue-500 text-4xl mr-3" />
              (404) 874 - 4870
            </ListItem>
            <ListItem>
              <MailRoundedIcon className="text-blue-500 text-4xl mr-3" />
              info@medica.com
            </ListItem>
            <ListItem>
              <PlaceOutlinedIcon className="text-blue-500 text-4xl mr-3" />
              9663 Fulton Drive Carol Stream, IL 60188
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Typography component="p" className="text-md font-semibold mb-5">
            Book an Appoinment
          </Typography>
          <Typography
            component="p"
            className="font-semibold text-slate-500 mb-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laudantium eum similique! Sapiente, tempora nihil?
          </Typography>
          <ButtonMedica variant="contained">
            <PhoneOutlinedIcon className="mr-2" />
            (404) 850 - 7080
          </ButtonMedica>
        </Grid>
      </Grid>

      <Box className="text-center border-t-2 border-blue-300 py-6 w-full">
        <Typography component="p" className="text-md font-black">
          Medica Project &copy; Copyright | Designed & Developed by{" "}
          <Typography
            component="span"
            className="text-blue-500 font-black border-b-2 border-blue-500"
          >
            ARSHAM JAMSHIDI
          </Typography>{" "}
          | Powered by{" "}
          <Link
            href="https://botostart.ir"
            target="_blank"
            className="text-blue-500 border-b-2 border-blue-500"
          >
            Botostart.ir
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
