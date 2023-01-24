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
import { NavLink } from "react-router-dom";
import { client_app_route_url } from "../../utils/helper";
const MainComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Typography variant="h1" className={classes.subtitle}>
          Dive{" "}
        </Typography>
        <Typography
          variant="h1white"
          className={classes.subtitle}
          sx={{ left: "174px" }}
        >
          Into The Depths
        </Typography>
        <Typography
          variant="h1white"
          className={classes.subtitle}
          sx={{ top: "338px" }}
        >
          Of
        </Typography>
        <Typography
          variant="h1"
          className={classes.subtitle}
          sx={{ top: "338px", left: "154px" }}
        >
          Virtual Reality
        </Typography>
        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <NavLink to={`${client_app_route_url}signup`}>
          <Button
            className={classes.signInButton}
            color="primary"
            // fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            SIGN UP
          </Button>
        </NavLink>
        <EastIcon className={classes.arrow} />
      </div>
      <div className={classes.content}>
        <img
          src="https://t00.deviantart.net/t6oJuay-OLHzL-qMV9znqA98zVk=/fit-in/150x150/filters:no_upscale():origin()/pre00/45f3/th/pre/i/2011/320/b/a/butterfly_i_by_hydra_artwork-d3gjqd9.jpg"
          className={classes.hydraimage}
        ></img>
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
  subtitle: {
    height: "56px",
    width: "456px",
    left: "84px",
    top: "308px",
    borderRadius: "nullpx",
    position: "absolute",
    width: "456px",
    height: "56px",
    left: "104px",
    top: "308px",
  },
  signInButton: {
    "&&": {
      //   width: "155px",

      //   marginLeft: "155px",

      position: "absolute",
      width: "214px",
      height: "48px",
      left: "111px",
      top: "494px",

      background: "linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)",
      borderRadius: "40px",
    },
  },
  content: {
    width: "50%",
  },
  arrow: {
    "&&": {
      position: "absolute",
      height: "33.33333206176758px",
      width: "41.66667175292969px",
      left: " 330px",
      top: "500px",
      borderRadius: "0px",
      color: "#C0B7E8",
      fontSize: "50px",
    },
  },
  para: {
    position: "absolute",
    height: "72px",
    width: "450px",
    left: "104px",
    top: "380px",
    borderRradius: "nullpx",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    color: " #FFFFFF",
  },
  hydraimage: {
    position: "absolute",
    width: "420px",
    height: "390px",
    left: "1148px",
    top: "200px",
    borderTopRightRadius: "100px",
    borderTopLeftRadius: "100px",
    borderBottomLeftRadius: "200px",
    borderBottomRightRadius: "100px",
  },
}));

console.log(theme);
export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <MainComponent />
    </ThemeProvider>
  );
}
