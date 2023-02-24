import DoctorDetails from "@/components/modules/Doctors/DoctorDetails";

const Doctor = ({ doctor }) => {
  return <DoctorDetails doctor={doctor[0]} />;
};

export default Doctor;

export async function getServerSideProps({ query: { slug } }) {
  const doctor = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/doctors?slug=${slug}`
  ).then((res) => res.json());

  return {
    props: {
      doctor,
    },
  };
}
