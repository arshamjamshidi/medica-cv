import { Grid } from "@mui/material";
import DoctorCard from "../modules/Doctors/DoctorCard";

const Doctors = ({ doctors }) => {
  return (
    <Grid container spacing={6} my={5}>
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} key={doctor.id}>
          <DoctorCard {...doctor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Doctors;
