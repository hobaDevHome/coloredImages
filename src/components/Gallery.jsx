/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";

import { fetchImageUrls } from "../store/imageActions";

const Gallery = ({ color }) => {
  const dispatch = useDispatch();
  const imageUrls = useSelector((state) => state.imageUrls);

  useEffect(() => {
    dispatch(fetchImageUrls(color));
  }, [dispatch, color]);

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ marginTop: 1, marginBottom: 1 }}>
      <Grid container xs={12} style={{}}>
        {imageUrls.map((e) => {
          return (
            <Grid key={e} item xs={12} md={6} lg={4} padding={1}>
              <img
                src={e}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",

                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Gallery;
