// @ts-nocheck
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { colors } from "../constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent={"center"}
      sx={12}
      style={{ backgroundColor: colors.green }}
      direction={"column"}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 900,
          color: colors.greenText,
          fontSize: 30,
          fontFamily: "Fraunces",
          textAlign: "center",
          margin: 5,
        }}
      >
        sunnyside
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50%",
          marginBottom: 50,
        }}
      >
        <Typography
          variant="h6"
          component={"a"}
          sx={{
            color: colors.lightGreenText,
            fontSize: 18,
            fontFamily: "barlow",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          component={"a"}
          sx={{
            color: colors.lightGreenText,
            fontSize: 18,
            fontFamily: "barlow",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Services
        </Typography>
        <Typography
          variant="h6"
          component={"a"}
          sx={{
            color: colors.lightGreenText,
            fontSize: 18,
            fontFamily: "barlow",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Projects
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "25%",
          marginBottom: 60,
        }}
      >
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <PinterestIcon />
      </div>
    </Grid>
  );
};

export default Footer;
