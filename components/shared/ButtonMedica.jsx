import { Button } from "@mui/material";

const ButtonMedica = ({ variant, className, children }) => {
  if (variant === "outlined" || variant === "text") {
    return (
      <Button
        variant={variant}
        size="large"
        className={`${className} normal-case font-bold py-3 px-6 hover:-translate-y-1 transition-transform`}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size="large"
      className={`${className} normal-case font-bold py-3 px-6 bg-blue-500 hover:-translate-y-1 transition-transform`}
    >
      {children}
    </Button>
  );
};

export default ButtonMedica;
