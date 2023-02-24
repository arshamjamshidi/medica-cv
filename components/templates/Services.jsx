import { Grid } from "@mui/material";
import ServicesCard from "../modules/Services/ServiceCard";

const Services = ({ services }) => {
  return (
    <Grid container spacing={2} my={5}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <ServicesCard {...service} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
