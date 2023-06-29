// @ts-nocheck
import Grid from "@mui/material/Grid";
import image1 from "../../public/images/image-gallery-cone.jpg";
import image2 from "../../public/images/image-gallery-milkbottles.jpg";
import image3 from "../../public/images/image-gallery-orange.jpg";
import image4 from "../../public/images/image-gallery-sugarcubes.jpg";

const ImageRow = () => {
  return (
    <Grid container alignItems="flex-start" justifyContent={"space-around"}>
      <Grid item sx={12} sm={12} md={6} lg={3}>
        <img
          src={image1}
          alt=""
          style={{ width: "100%", display: "block", objectFit: "fill" }}
        />
      </Grid>
      <Grid item sx={12} sm={12} md={6} lg={3}>
        <img
          src={image2}
          alt=""
          style={{ width: "100%", display: "block", objectFit: "fill" }}
        />
      </Grid>
      <Grid item sx={12} sm={12} md={6} lg={3}>
        <img
          src={image3}
          alt=""
          style={{ width: "100%", display: "block", objectFit: "fill" }}
        />
      </Grid>
      <Grid item sx={12} sm={12} md={6} lg={3}>
        <img
          src={image4}
          alt=""
          style={{ width: "100%", display: "block", objectFit: "fill" }}
        />
      </Grid>
    </Grid>
  );
};

export default ImageRow;
