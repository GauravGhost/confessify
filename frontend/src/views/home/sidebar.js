import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Divider, Drawer } from "@mui/material";
import MenuTheme from "./menubar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, useTheme } from "@mui/styles";
import palette from "../../theme/palette";
import theme from "../../theme/index";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/action/loginAction";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  drawer: {
    "&&": {
      width: 175,

      // [theme.breakpoints.up("lg")]: {
      //   // marginTop: 50,
      //   height: "calc(100% - 50px)",
      // },
    },
  },
  root: {
    "&&": {
      backgroundColor: "black",

      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: theme.spacing(-2),
      width: "175px",
    },
  },
  logout: {
    marginTop: "580px",
    cursor: "pointer",
  },
}));

const SideBarComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();
  const logout = () => {
    dispatch(logoutAction(navigate));
  };
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={onClose}
        open={open}
        variant={variant}
      >
        <div {...rest} className={clsx(classes.root, className)}>
          <MenuTheme />
          <div className={classes.logout} onClick={logout}>
            <Divider sx={{ backgroundColor: "white" }} />

            <Typography sx={{ ml: "30px", mt: "10px" }} variant="body1">
              Logout
            </Typography>
          </div>
        </div>
      </Drawer>
    </>
  );
};

// const theme = createTheme();

export default function SideBar({ onClose, open, variant }) {
  return (
    <ThemeProvider theme={theme}>
      <SideBarComponent onClose={onClose} open={open} variant={variant} />
    </ThemeProvider>
  );
}
