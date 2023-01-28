import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Button, TextField, Typography, useTheme } from "@mui/material";
import swal from "sweetalert";
import theme from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
// import SideBar from "./sidebar";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import About from "../about/about";
const ProfileComponent = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.head}>
          <div className={classes.profile_pic}></div>
          <div className={classes.followerDetail}>
            <h3 className={classes.user_name}>koyna khare</h3>
            <div className={classes.follower}>
              <h5 style={{ fontSize: "16px", color: "white", fontWeight: 100 }}>
                <span className={classes.postCount}>200 </span> Posts
              </h5>
              <h5
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: 100,
                  marginLeft: "30px",
                }}
              >
                <span className={classes.postCount}>200 </span> Follower
              </h5>
              <h5
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontWeight: 100,
                  marginLeft: "30px",
                }}
              >
                <span className={classes.postCount}>200 </span> Following
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "200px",
    height: "100vh",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
  },
  head: {
    width: "2000px",
    display: "flex",
    flexDirection: "row",
  },
  profile_pic: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "red",
    marginLeft: "400px",
  },
  user_name: {
    color: "white",
    fontSize: "30px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
    fontFamily: "Montserrat",
    marginTop: "40px",
    fontWeight: 300,
    lineHeight: "21px",
    letterSpacing: "0em",
  },
  postCount: {
    color: "white",
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
    fontFamily: "Montserrat",

    fontWeight: 300,
    lineHeight: "21px",
    letterSpacing: "0em",
  },
  followerDetail: {
    marginLeft: "100px",
    marginTop: "20px",
  },
  follower: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <ProfileComponent />
    </ThemeProvider>
  );
}
