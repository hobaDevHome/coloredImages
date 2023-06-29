/* eslint-disable no-unused-vars */
// @ts-nocheck

import { colors } from "../constants";
import background from "../../public/images/image-header.jpg";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { GlobalStyles } from "@mui/material";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import { styled } from "@mui/material";

const SocialMediaIcon = styled(SouthRoundedIcon)(({ theme }) => ({
  fontSize: 50,
  margin: 10,
  color: theme.palette.text.primary,
}));
const Hero = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: colors.lightBlue,
          height: 500,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex" },
            fontFamily: "Fraunces",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "4vw",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          we are creative
        </Typography>
        <SouthRoundedIcon
          sx={{
            color: "white",
            fontSize: 80,
            alignSelf: "center",
            display: "flex",
          }}
        />
      </div>
    </>
  );
};

export default Hero;
