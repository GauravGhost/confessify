import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Button,
  TextField,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import swal from "sweetalert";
import theme from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
// import SideBar from "./sidebar";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import About from "../about/about";
import ProfilePost from "./profilePost";
const ProfileComponent = () => {
  const handleChange = (e) => {};
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          item
          className={classes.head}
          justifyContent="space-between"
          mt={2}
        >
          <Grid item className={classes.profile_pic}>
            <img
              src="https://media.wired.com/photos/592738b9cfe0d93c47432aef/master/w_1242,c_limit/molly-insta-lead2.jpg"
              className={classes.profile_pic}
            ></img>
          </Grid>
          <Grid item className={classes.followerDetail}>
            <h3 className={classes.user_name}>koyna khare</h3>
            <Grid item className={classes.follower}>
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
            </Grid>
          </Grid>
        </Grid>
        <ProfilePost />
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "200px",
    height: "100vh",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    justifyContent: "center",
  },
  head: {
    width: "600px",
    height: "200px",
    display: "flex",
    flexDirection: "row",

    borderBottom: "1px solid grey",
  },
  profile_pic: {
    width: "200px",
    height: "190px",
    borderRadius: "50%",
    backgroundColor: "red",
    // marginLeft: "400px",
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
