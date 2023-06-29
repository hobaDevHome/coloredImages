/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck

import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Hero from "./components/Hero";
import Yellow from "./components/Yellow";
import Red from "./components/Red";
import Blues from "./components/Blues";
import Clients from "./components/Clients";
import ImageRow from "./components/ImageRow";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
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
      <Navbar />
      <Hero />
      <Link to="/color/yellow">
        <Yellow />
      </Link>
      <Link to="/color/red">
        <Red />
      </Link>
      <Blues />
      <Clients />
      <ImageRow />
      <Footer />
    </Grid>
  );
}

export default Home;
