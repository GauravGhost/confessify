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
import BasicAlerts from "../Notification/notification";
import Header from "../../Header/header";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import SideBar from "./sidebar";
import axios from "axios";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const PostsComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const login = useSelector((state) => state.login);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 2,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 3,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
  ]);

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div className={classes.box}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className={classes.profile_pic}></div>

                <div className={classes.user_name}>
                  <Typography variant="h3">Koyna khare</Typography>
                </div>
              </div>
              <div className={classes.title}>
                <Typography variant="h2">{post.title}</Typography>
              </div>
              <div className={classes.discription}>
                <h3 className={classes.discription}>{post.description}</h3>
              </div>
              <Divider sx={{ backgroundColor: "grey", marginTop: "70px" }} />
              <div className={classes.likecomment}>
                <FavoriteBorderIcon className={classes.like} />
                <ChatBubbleOutlineIcon className={classes.comment} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  box: {
    width: "630px",
    height: "400px",
    backgroundColor: "white",
    marginLeft: "430px",
    marginTop: "20px",
    borderRadius: "25px",
  },
  likecomment: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
  },
  like: {
    fontSize: "20px",
    marginLeft: "20px",
  },
  comment: {
    fontSize: "20px",
    marginLeft: "20px",
  },
  profile_pic: {
    width: "20px",
    marginTop: "30px",
    marginLeft: "30px",
    padding: "20px",
    borderRadius: "50%",
    background: "pink",
  },
  user_name: {
    // position: "absolute",
    // top: "50px",
    // left: "700px",
    marginTop: "40px",
    marginLeft: "30px",
  },
  title: {
    marginTop: "20px",
    marginLeft: "30px",
    // position: "absolute",
    // top: "90px",
    // left: "50px",
  },
  discription: {
    fontFamily: "Montserrat",
    marginTop: "20px",
    marginLeft: "10px",
    // fontSize: "46px",
    fontWeight: 700,
    lineHeight: "26px",
    letterSpacing: "0em",
    // textAlign: "left",
  },
}));

export default function Posts() {
  return (
    <ThemeProvider theme={theme}>
      <PostsComponent />
    </ThemeProvider>
  );
}
