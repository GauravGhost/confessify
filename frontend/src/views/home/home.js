import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Button, TextField, Typography, useTheme } from "@mui/material";
import swal from "sweetalert";
import theme from "../../theme";
import BasicAlerts from "../Notification/notification";
import Header from "../../main-layout/header";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import SideBar from "./sidebar";
const HomeComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Header /> */}

      <div className={classes.content}>
        <SideBar />
      </div>
      <div className={classes.content}>
        <div className={classes.box}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    height: "100vh",
    backgroundColor: "#211E2E",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    display: "flex",
    flexDirection: "row",
  },
  box: {
    width: "630px",
    height: "400px",
    backgroundColor: "white",
    position: "absolute",
    left: "600px",
    top: "20px",
  },
}));

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
}
