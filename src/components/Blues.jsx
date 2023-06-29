// @ts-nocheck
import Grid from "@mui/material/Grid";
import background1 from "../../public/images/image-photography.jpg";
import background2 from "../../public/images/image-graphic-design.jpg";
import { colors } from "../constants";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Blues = () => {
  return (
    <Grid
      container
      xs={12}
      alignItems="flex-start"
      display={"flex"}
      direction={{
        xs: "column",
        sm: "column",
        md: "row",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        rowSpacing={0}
        columnSpacing={0}
        sx={{ position: "relative" }}
      >
        <Link to="/color/green">
          <img
            src={background2}
            alt=""
            style={{ width: "100%", display: "block", objectFit: "fill" }}
          />
        </Link>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "80%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: colors.darkText,
              fontSize: 20,
              fontFamily: "Fraunces",
              textAlign: "center",
            }}
          >
            Graphic design
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: colors.darkText,
              fontSize: 12,
              fontFamily: "Barlow",
              marginTop: 2,
              textAlign: "center",
            }}
          >
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </Typography>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        rowSpacing={0}
        columnSpacing={0}
        sx={{ position: "relative" }}
      >
        <Link to="/color/blue">
          <img
            src={background1}
            alt=""
            style={{ width: "100%", display: "block", objectFit: "fill" }}
          />
        </Link>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "80%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              color: colors.darkText,
              fontSize: 20,
              fontFamily: "Fraunces",
              textAlign: "center",
            }}
          >
            Photography
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: colors.darkText,
              fontSize: 12,
              fontFamily: "Barlow",
              marginTop: 2,
              textAlign: "center",
            }}
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Blues;
