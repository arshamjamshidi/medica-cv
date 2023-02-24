import Link from "next/link";
import { useState } from "react";

import { Box, Button, Drawer, Typography } from "@mui/material";
import ButtonMedica from "../shared/ButtonMedica";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Responsive = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setState(open);
  };

  const links = ["Home", "Doctors", "Services", "Blogs", "About Us"];
  const paths = ["/", "/doctors", "/services", "/blogs", "/about"];

  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>
        <MenuRoundedIcon className="text-4xl" />
      </Button>
      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        <Box className="py-3 px-6 flex justify-between">
          <Link href="/">
            <Typography
              component="h1"
              className="hover:scale-95 transition-transform"
            >
              <HealingRoundedIcon className="text-blue-500 text-5xl mr-2" />
              <Typography component="span" className="font-black text-2xl">
                Medica
              </Typography>
            </Typography>
          </Link>

          <Button onClick={toggleDrawer(false)}>
            <CloseRoundedIcon className="text-4xl" />
          </Button>
        </Box>
        <Box
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="flex flex-col justify-center"
        >
          {links.map((link, index) => (
            <Link
              href={paths[index]}
              key={index}
              className="text-lg font-semibold hover:text-blue-500 hover:bg-blue-100 transition py-3 px-6"
            >
              {link}
            </Link>
          ))}
          <Link href="/contact" className="py-3 px-6">
            <ButtonMedica variant="contained" className="w-full">
              Contact
            </ButtonMedica>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Responsive;
