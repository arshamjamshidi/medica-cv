import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const ScrollButton = () => {
  const [scrollYSize, setScrollYSize] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollYSize(window.pageYOffset);
    });
  }, []);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      variant="outlined"
      className={`rounded-xl p-1 fixed right-6 bottom-8 transition-opacity duration-300 ${
        scrollYSize > 299 ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollHandler}
    >
      <KeyboardArrowUpRoundedIcon fontSize="large" />
    </Button>
  );
};

export default ScrollButton;
