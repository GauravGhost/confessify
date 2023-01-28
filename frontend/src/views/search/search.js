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
const SearchComponent = () => {
  const handleChange = (e) => {};
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.search} onChange={handleChange}>
          <input className={classes.textField} placeholder="Search..."></input>
          <SearchIcon className={classes.searchIcon} />
        </div>
        <About />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "200px",
    height: "100%",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
  },
  textField: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: " 19px",
    lineHeight: "14.63px",
    // fontFamily: "Montserrat",
    width: "535px",
    borderRadius: "40px",
    marginLeft: "10px",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    border: "none",
    height: "38px",
    outline: "none",
    color: "white",
  },
  search: {
    /* identical to box height */
    width: "555px",

    margin: "60px",
    marginLeft: "400px",
    height: "48px",

    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    border: "1px solid white",
    borderRadius: " 40px",
    color: "white",
    display: "flex",
    flexDirection: "row",
  },
  searchIcon: {
    color: "white",
    margin: "10px",
  },
}));

export default function Search() {
  return (
    <ThemeProvider theme={theme}>
      <SearchComponent />
    </ThemeProvider>
  );
}
