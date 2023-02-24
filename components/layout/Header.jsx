import Link from "next/link";
import { useEffect, useState } from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import ButtonMedica from "../shared/ButtonMedica";
import Responsive from "./Responsive";

const Header = () => {
  const [responsiveState, setResponsiveState] = useState(false);

  const links = ["Home", "Doctors", "Services", "Blogs", "About Us"];
  const paths = ["/", "/doctors", "/services", "/blogs", "/about"];

  useEffect(() => {
    responsiveHandler();
    window.addEventListener("resize", responsiveHandler);
  }, []);

  const responsiveHandler = () => {
    if (window.innerWidth < 998) {
      setResponsiveState(true);
    } else {
      setResponsiveState(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      className="bg-transparent shadow-none backdrop-blur-lg sm:px-16"
    >
      <Toolbar className="hidden sm:flex justify-between py-3 border-b-2">
        <Box>
          <Link href="#" className="mr-3">
            <LocalPhoneRoundedIcon className="text-blue-400 text-3xl" />
            <Typography
              component="span"
              className="hover:text-blue-500 transition ml-2 font-semibold text-slate-500"
            >
              (404) 850 - 7080
            </Typography>
          </Link>
          <Link href="#">
            <MailRoundedIcon className="text-blue-400 text-3xl" />
            <Typography
              component="span"
              className="hover:text-blue-500 transition ml-2 font-semibold text-slate-500"
            >
              info@gmail.com
            </Typography>
          </Link>
        </Box>

        <Box>
          <Link href="#">
            <TwitterIcon className="text-blue-500 mr-3 hover:text-blue-400 text-4xl transition" />
          </Link>
          <Link href="#">
            <FacebookRoundedIcon className="text-blue-500 hover:text-blue-400 text-4xl transition" />
          </Link>
        </Box>
      </Toolbar>

      <Toolbar className="text-slate-900 py-3 justify-between">
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

        {!responsiveState ? (
          <Box className="flex items-center gap-x-10">
            {links.map((link, index) => (
              <Link
                href={paths[index]}
                key={index}
                className="text-lg font-semibold hover:text-blue-500 transition"
              >
                {link}
              </Link>
            ))}
            <Link href="/contact">
              <ButtonMedica variant="contained">Contact</ButtonMedica>
            </Link>
          </Box>
        ) : (
          <Responsive />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
