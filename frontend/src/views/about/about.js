import React, { useState } from "react";
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
import Alerts from "../Notification/notification";
import Header from "../../Header/header";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import { useSelector, useDispatch } from "react-redux";
import { ALERT_SUCCESS } from "../../store/reducer/alertReducer";

const AboutComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.box}>
          <div className={classes.InsideBox}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kSChLXTja4x0TNU9srl32wHaEs&pid=Api&P=0"
              className={classes.image}
            ></img>
            <h4 className={classes.title}>SIMULATION</h4>
            <Divider sx={{ backgroundColor: "white" }} />
            <p className={classes.discription}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button
              className={classes.signInButton}
              color="primary"
              // fullWidth
              size="large"
              type="submit"
              variant="contained"
              // sx={{ left: "1488px" }}
            >
              TRY IT NOW
            </Button>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.InsideBox}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kSChLXTja4x0TNU9srl32wHaEs&pid=Api&P=0"
              className={classes.image}
            ></img>
            <h4 className={classes.title}>SIMULATION</h4>
            <Divider sx={{ backgroundColor: "white" }} />
            <p className={classes.discription}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button
              className={classes.signInButton}
              color="primary"
              // fullWidth
              size="large"
              type="submit"
              variant="contained"
              // sx={{ left: "1488px" }}
            >
              TRY IT NOW
            </Button>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.InsideBox}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kSChLXTja4x0TNU9srl32wHaEs&pid=Api&P=0"
              className={classes.image}
            ></img>
            <h4 className={classes.title}>SIMULATION</h4>
            <Divider sx={{ backgroundColor: "white" }} />
            <p className={classes.discription}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button
              className={classes.signInButton}
              color="primary"
              // fullWidth
              size="large"
              type="submit"
              variant="contained"
              // sx={{ left: "1488px" }}
            >
              TRY IT NOW
            </Button>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.InsideBox}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kSChLXTja4x0TNU9srl32wHaEs&pid=Api&P=0"
              className={classes.image}
            ></img>
            <h4 className={classes.title}>SIMULATION</h4>
            <Divider sx={{ backgroundColor: "white" }} />
            <p className={classes.discription}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button
              className={classes.signInButton}
              color="primary"
              // fullWidth
              size="large"
              type="submit"
              variant="contained"
              // sx={{ left: "1488px" }}
            >
              TRY IT NOW
            </Button>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.InsideBox}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kSChLXTja4x0TNU9srl32wHaEs&pid=Api&P=0"
              className={classes.image}
            ></img>
            <h4 className={classes.title}>SIMULATION</h4>
            <Divider sx={{ backgroundColor: "white" }} />
            <p className={classes.discription}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button
              className={classes.signInButton}
              color="primary"
              // fullWidth
              size="large"
              type="submit"
              variant="contained"
              // sx={{ left: "1488px" }}
            >
              TRY IT NOW
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.sticker}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.USkRGDNuRk6bw--9CK8UDAAAAA&pid=Api&P=0)"
            className={classes.stickerImage}
          ></img>
        </div>
        <div className={classes.sticker}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.T2v50vRiSB4Nx7lNoNqXigHaD1&pid=Api&P=0"
            className={classes.stickerImage}
          ></img>
        </div>
        <div className={classes.sticker}>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.OaUFhUIUzQNkavXhucjucAHaEK&pid=Api&P=0"
            className={classes.stickerImage}
          ></img>
        </div>
        <div className={classes.sticker}>
          <img
            src="https://images.hdqwalls.com/download/garena-free-fire-4k-2020-game-in-2048x1152.jpg"
            className={classes.stickerImage}
          ></img>
        </div>
        <div className={classes.sticker}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.bkSWpD2_Nmu7T5sSyQLO1AHaD2&pid=Api&P=0"
            className={classes.stickerImage}
          ></img>
        </div>
        <div className={classes.sticker}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.USkRGDNuRk6bw--9CK8UDAAAAA&pid=Api&P=0)"
            className={classes.stickerImage}
          ></img>
        </div>
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
  },
  content: {
    // height: "100vh",
    backgroundColor: "#211E2E",
    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    display: "flex",
    flexDirection: "row",
  },
  footer: {
    width: "1278px",
    height: " 303px",
    marginTop: "20px",
    marginLeft: "113px",
    background:
      " radial-gradient(50% 50% at 50% 50%, rgba(67, 61, 96, 0.4) 0%, rgba(33, 30, 46, 0.4) 100%);",
    borderRadius: " 40px",
    display: "flex",
    flexDirection: "row",
  },
  sticker: {
    width: "174px",
    height: "174px",
    marginLeft: "40px",
    opacity: "0.36",
  },
  stickerImage: {
    width: "174px",
    height: "174px",
    borderRadius: "50%",
  },
  box: {
    width: "310px",
    height: "511px",
    // left: '81px';
    // top: '48px';
    marginLeft: "20px",
    background: "radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)",
    borderRadius: "40px",
  },
  signInButton: {
    "&&": {
      width: "155px",

      marginLeft: "55px",

      padding: "20px",
      height: "48px",

      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: " 12px",
      //   position: "absolute",
      width: "155px",
      height: "48px",

      //   top: "38px",
    },
  },
  image: {
    width: "205.36px",
    height: "208.04px",
    borderRadius: "50%",
    background: "url(pexels-shvets-production-7561969.jpg)",
    marginLeft: "50px",
    marginTop: "10px",
  },
  title: {
    color: "white",
    fontFamily: "Montserrat",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "30px",
  },
  discription: {
    width: "249px",
    height: "57px",

    marginLeft: "20px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "15px",

    color: "#FFFFFF",
  },
}));

console.log(theme);
export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <AboutComponent />
    </ThemeProvider>
  );
}
