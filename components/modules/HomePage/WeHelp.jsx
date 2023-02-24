import { useState } from "react";

import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ButtonMedica from "@/components/shared/ButtonMedica";

const WeHelp = () => {
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Grid container my={12}>
      <Grid item xs={12} md={6} mb={6}>
        <Typography component="p" className="text-4xl font-extrabold mb-10">
          How Can We Help?
        </Typography>
        <Box className="px-10">
          <TextField
            label="Your Name"
            variant="standard"
            fullWidth
            className="mb-5"
            name="name"
            onChange={changeHandler}
          />
          <TextField
            label="Your E-mail"
            variant="standard"
            fullWidth
            className="mb-5"
            name="email"
            onChange={changeHandler}
          />
          <TextField
            label="Your Number"
            variant="standard"
            fullWidth
            className="mb-5"
            name="number"
            onChange={changeHandler}
          />
          <TextField
            label="Let us know how we can help..."
            variant="standard"
            fullWidth
            className="mb-5"
            name="description"
            onChange={changeHandler}
          />
          <ButtonMedica variant="contained" className="w-full">
            SEND YOUR MESSAGE
          </ButtonMedica>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        className="bg-sky-900 text-white rounded-3xl shadow-xl shadow-sky-900 p-10"
      >
        <Typography component="p" className="font-semibold text-xl">
          Need Some Help?
        </Typography>
        <Box className="my-5 flex justify-around sm:flex-row flex-col gap-y-4">
          <ButtonMedica variant="contained">
            <PhoneOutlinedIcon className="mr-2" />
            (404) 850 - 7080
          </ButtonMedica>
          <ButtonMedica variant="outlined" className="text-white">
            <MailRoundedIcon className="mr-2" />
            Send Us a Email
          </ButtonMedica>
        </Box>
        <Divider className="bg-white my-10" />
        <Typography component="p" className="font-semibold text-xl">
          Visit us
        </Typography>
        <Box className="flex justify-between gap-x-5 font-semibold">
          <List>
            <ListItem className="text-blue-500">LOS ANGELES</ListItem>
            <ListItem>+1 (404) 850 - 8080</ListItem>
            <ListItem>209 North Dunbar St. Santa Monica, CA 90403</ListItem>
          </List>
          <List>
            <ListItem className="text-blue-500">SAN FRANCISCO</ListItem>
            <ListItem>+1 (404) 850 - 8090</ListItem>
            <ListItem>58 Middle Point Rd San Francisco, CA</ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WeHelp;
