import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Menu,
  Avatar,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
// import Auth from "../utils/auth";
import palette from "../theme/palette";
import { Link, Route, Routes, NavLink } from "react-router-dom";
// import { insertToken } from "../store/action/loginAction";
// import { connect } from "react-redux";
import { client_app_route_url } from "../utils/helper";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import BasicAlerts from "../views/Notification/notification";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const Headertheme = () => {
  const classes = useStyles();

  return (
    <div className={classes.flexGrow1}>
      <AcUnitIcon className={classes.logo} />
      <h1 className={classes.heading}>HYDRA</h1>
      <Link to={`${client_app_route_url}home`}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ ml: "20px", left: "469px" }}
          className={classes.textWhite}
        >
          HOME
        </Typography>
      </Link>
      <Link to={`${client_app_route_url}about`} style={{ border: "none" }}>
        <Typography
          variant="h6"
          component="h1"
          className={classes.textWhite}
          sx={{ left: "557px" }}
        >
          ABOUT
        </Typography>
      </Link>
      <Link to={`${client_app_route_url}technology`}>
        <Typography
          variant="h6"
          component="h1"
          className={classes.textWhite}
          sx={{ left: "640px" }}
        >
          TECHNOLOGY
        </Typography>
      </Link>
      <Link to={`${client_app_route_url}services`}>
        <Typography
          variant="h6"
          component="h1"
          className={classes.textWhite}
          sx={{ left: "781px" }}
        >
          SERVICES
        </Typography>
      </Link>
      <NavLink to={`${client_app_route_url}login`}>
        <Button
          className={classes.signInButton}
          color="secondary"
          // fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ left: "1288px" }}
        >
          SIGN IN
        </Button>
      </NavLink>
      <NavLink to={`${client_app_route_url}signup`}>
        <Button
          className={classes.signInButton}
          color="primary"
          // fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ left: "1488px" }}
        >
          SIGN UP
        </Button>
      </NavLink>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  flexGrow1: {
    marginTop: "20px",
    width: "1670px",
    display: "flex",
    flexDirection: "row",
  },
  alertDiv: {
    width: "447px",
  },
  textWhite: {
    "&&": {
      color: "#fff",

      position: "absolute",
      width: "46px",
      height: "15px",

      top: "49px",
    },
  },
  textWhite1: {
    "&&": {
      color: "#fff",
      marginLeft: "20px",
      marginTop: "20px",
    },
  },
  signInButton: {
    "&&": {
      padding: "20px",

      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: " 12px",
      position: "absolute",
      width: "155px",
      height: "48px",

      top: "38px",
    },
    "&:hover": {
      // background: palette.text.secondary,
    },
  },
  heading: {
    position: "absolute",
    width: "76px",
    height: "46px",
    left: "118px",
    top: "24px",
    color: "#C0B7E8",
  },
  logo: {
    "&&": {
      // background: "linear-gradient(180deg, #C0B7E8 0%, #8176AF 100%)",
      color: "#C0B7E8",
      height: "102.92574310302734px",
      width: "101.99090576171875px",
      left: "0.0009765625px",
      top: "0.00115966796875px",
      borderRadius: "0px",
      fontSize: "30px",
    },
  },
}));

export default function Header({ notification, severity }) {
  return (
    <ThemeProvider theme={theme}>
      <Headertheme notification={notification} severity={severity} />
    </ThemeProvider>
  );
}
