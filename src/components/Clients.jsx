// @ts-nocheck
import Grid from "@mui/material/Grid";
import ClientCard from "./ClientCard";
import Typography from "@mui/material/Typography";
import { colors } from "../constants";
import { clientsTestimonials } from "../constants";
import avatar1 from "../../public/images/av1.jpg";
import avatar2 from "../../public/images/av2.jpg";
import avatar3 from "../../public/images/av3.jpg";

const Clients = () => {
  return (
    <div style={{ padding: 50 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.lightText,
          fontSize: 18,
          fontFamily: "Fraunces",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: 5,
        }}
      >
        Client testimonials
      </Typography>

      <Grid
        container
        item
        alignItems="flex-start"
        justifyContent={"space-around"}
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
      >
        <ClientCard
          avatar={avatar1}
          clientsTestimonial={clientsTestimonials[0]}
        />
        <ClientCard
          avatar={avatar2}
          clientsTestimonial={clientsTestimonials[1]}
        />
        <ClientCard
          avatar={avatar3}
          clientsTestimonial={clientsTestimonials[2]}
        />
      </Grid>
    </div>
  );
};

export default Clients;
