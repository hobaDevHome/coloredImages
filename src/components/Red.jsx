// @ts-nocheck
import Grid from "@mui/material/Grid";
import background from "../../public/images/image-stand-out.jpg";
import { colors } from "../constants";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  "fontWeight": 900,
  "color": colors.darkText,
  "fontSize": 15,
  "fontFamily": "Fraunces",
  "marginTop": 10,
  "cursor": "pointer",
  "position": "relative",
  "zIndex": 2,
  "&::before": {
    position: "absolute",
    content: '""',
    display: "none",
    height: 8,
    width: 100,
    backgroundColor: colors.redLine,
    left: -5,
    borderRadius: 5,
    top: 15,
    zIndex: -1,
  },
  "&:hover": {
    "&::before": {
      display: "block",
    },
  },
}));

// eslint-disable-next-line react/prop-types
const Red = () => {
  return (
    <Grid
      container
      xs={12}
      alignItems="flex-start"
      display={"flex"}
      direction={{
        xs: "column",
        sm: "column",
        md: "row-reverse",
      }}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={6}
        sx={{
          height: "100%",
          padding: 5,
          margin: "auto 0",

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: colors.darkText,
            fontSize: 30,
            fontFamily: "Fraunces",
          }}
        >
          Transform your brand
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: colors.lightText,
            fontSize: 15,
            fontFamily: "Barlow",
            marginTop: 2,
          }}
        >
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Typography>
        <StyledTypography variant="h6" component="a">
          Learn more
        </StyledTypography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        rowSpacing={0}
        columnSpacing={0}
        sx={{ padding: 0, margin: 0 }}
      >
        <img
          src={background}
          alt=""
          style={{ width: "100%", display: "block", objectFit: "fill" }}
        />
      </Grid>
    </Grid>
  );
};

export default Red;
