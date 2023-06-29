// @ts-nocheck
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { colors } from "../constants";
import Footer from "./Footer";
import Gallery from "./Gallery";

const ColorsDetails = () => {
  let { color } = useParams();

  let navbarBgColor = colors[`${color}Bg`];

  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Grid
          container
          xs={12}
          direction="column"
          pb={0}
          justifyContent="flex-start"
          style={{
            position: "relative",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Navbar bgColor={navbarBgColor} />
          <Gallery color={color} />
          <Footer />
        </Grid>
      </Box>
    </Container>
  );
};

export default ColorsDetails;
