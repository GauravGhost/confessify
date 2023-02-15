import React from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import viewStyles from "../viewStyles.js";

const Loading = () => {
  const classes = viewStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <div className={classes.backdropInnerWrapper}>
        <CircularProgress color="inherit" />

        <Typography
          variant="h6"
          gutterBottom
          className={classes.backdropLoadingText}
        >
          Loading....
        </Typography>
      </div>
    </Backdrop>
  );
};

export default Loading;
