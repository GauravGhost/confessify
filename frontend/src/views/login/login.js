import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Typography, useTheme } from "@mui/material";
import { LoginAction } from "../../store/action";
import theme from "../../theme";
import Alerts from "../Notification/notification";
import Header from "../../Header/header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ALERT_SUCCESS } from "../../store/reducer/alertReducer";
const SignInComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    username: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const login = (e) => {
    e.preventDefault();

    if (values.username && values.password) {
      dispatch(LoginAction(values.username, values.password, navigate));
    } else {
      dispatch({
        type: ALERT_SUCCESS,
        payload: {
          boolean: false,
          message: "Please fill required input",
          error: true,
        },
      });
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Typography variant="h1" className={classes.subtitle}>
          Join{" "}
        </Typography>
        <Typography
          variant="h1white"
          className={classes.subtitle}
          sx={{ left: "174px" }}
        >
          this wonder
        </Typography>
        <Typography
          variant="h1white"
          className={classes.subtitle}
          sx={{ top: "338px" }}
        >
          community
        </Typography>

        <p className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
      </div>
      <div className={classes.content}>
        <Alerts />
        <form className={classes.form} onSubmit={login}>
          <Typography className={classes.title} variant="h4">
            SIGN IN
          </Typography>

          <div className={classes.line}></div>
          <div className={classes.gitIcon}></div>
          <TextField
            className={classes.textField}
            fullWidth
            label="USER NAME"
            name="username"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange("username")}
            sx={{ top: "158px" }}
          />
          <TextField
            className={classes.textField}
            fullWidth
            label="PASSWORD"
            name="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange("password")}
            sx={{ top: "195px" }}
          />

          <Button
            className={classes.signInButton}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={login}
          >
            SIGN IN
          </Button>
        </form>
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
  title: {
    position: "absolute",
    // height: "44px",
    // width: "159px",
    left: "178px",
    top: "58px",
    borderRadius: "nullpx",
  },
  form: {
    position: "absolute",
    width: "470px",
    height: "546px",
    left: "1134px",
    top: "195px",

    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
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
      top: "394px",

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
  textField: {
    width: "424px",
    height: "72px",
    // left: "61px",

    borderRadius: "40px",
  },
}));

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <SignInComponent />
    </ThemeProvider>
  );
}
