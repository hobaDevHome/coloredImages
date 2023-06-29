/* eslint-disable react/prop-types */
// @ts-nocheck
import Typography from "@mui/material/Typography";
import { colors } from "../constants";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

// eslint-disable-next-line react/prop-types
const ClientCard = ({ avatar, clientsTestimonial }) => {
  return (
    <Grid
      container
      item
      xs={12}
      md={4}
      alignItems="center"
      display={"flex"}
      padding={3}
      direction="column"
    >
      <Avatar alt="Remy Sharp" src={avatar} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: colors.lightText,
          fontSize: 14,
          fontFamily: "Barlow",
          marginTop: 4,
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        {clientsTestimonial.testimonial}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.darkText,
          fontSize: 15,
          fontFamily: "Fraunces",
          textAlign: "center",
        }}
      >
        {clientsTestimonial.name}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.lightText,
          fontSize: 12,
          fontFamily: "Fraunces",
          textAlign: "center",
        }}
      >
        {clientsTestimonial.position}
      </Typography>
    </Grid>
  );
};

export default ClientCard;
