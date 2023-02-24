import Link from "next/link";

import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Attributes = () => {
  return (
    <Grid
      container
      className="bg-white rounded-md shadow-2xl shadow-blue-200 px-8"
      mt={10}
    >
      <Grid item xs={12} sm={6} md={4} my={4} className="pl-5">
        <Box>
          <Box>
            <PhoneRoundedIcon className="text-5xl text-blue-500 mr-2" />
            <Typography component="span" className="font-bold text-xl align-middle">
              Contact Us
            </Typography>
          </Box>
          <List className="pl-10 font-semibold text-md text-slate-500">
            <ListItem>(404) 850 - 7080</ListItem>
            <ListItem>info@gmail.com</ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} my={4} className="pl-5">
        <Box>
          <Box>
            <WatchLaterRoundedIcon className="text-5xl text-blue-500 mr-2" />
            <Typography component="span" className="font-bold text-xl align-middle">
              Open Hours
            </Typography>
          </Box>
          <List className="pl-10 font-semibold text-md text-slate-500">
            <ListItem>Mon - Fri: 8:00am to 5:00pm</ListItem>
            <ListItem>Saturday: 9:00am to 3:30pm</ListItem>
            <ListItem>Sunday: 9:00am to 3:30pm</ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} my={4} className="pl-5">
        <Box>
          <Box>
            <MedicalServicesRoundedIcon className="text-5xl text-blue-500 mr-2" />
            <Typography component="span" className="font-bold text-xl align-middle">
              Services
            </Typography>
          </Box>
          <List className="pl-10 font-semibold text-md text-slate-500">
            <Link
              href="/services/cardiology"
              className="hover:text-blue-400 transition"
            >
              <ListItem>Cardiology</ListItem>
            </Link>
            <Link
              href="/services/gastroenterologist"
              className="hover:text-blue-400 transition"
            >
              <ListItem>Gastroenterologist</ListItem>
            </Link>
            <ListItem>
              <Link
                href="/services"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                See All <KeyboardArrowRightRoundedIcon className="align-top" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Attributes;
