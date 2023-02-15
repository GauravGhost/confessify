import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Box, Paper } from "@mui/material";
import theme from "../../theme";
import { isEmpty } from "../../utils/helper";
import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/action";
import { styled } from "@mui/material/styles";
import Captilaize from "../components/captalize";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProfilePostComponent = () => {
  const userPosts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [userposts, setuserposts] = useState([]);
  useEffect(() => {
    dispatch(getAllPosts);
  }, []);
  useEffect(() => {
    if (
      !isEmpty(get(userPosts, "posts")) &&
      isEmpty(get(userPosts, "posts.comments")) &&
      isEmpty(get(userPosts, "posts.comments"))
    )
      setuserposts(get(userPosts, "posts"));
  }, [get(userPosts, "posts")]);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid>
          <Box sx={{ flexGrow: 1 }} mt={4}>
            <Grid
              container
              spacing={2}
              sx={{ width: "600px" }}
              ml="50px"
              className={classes.head}
            >
              {userposts && userposts.length > 0
                ? userposts.map((posts) => {
                    return (
                      <Grid className={classes.content}>
                        <h3>{Captilaize(posts.title)}</h3>
                        <p style={{ justifyContent: "fit-content" }}>
                          {Captilaize(posts.body)}
                        </p>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Box>
        </Grid>
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
    height: "100%",
  },
  content: {
    width: "140px",
    height: "150px",
    backgroundColor: "white",
    margin: "20px",

    borderRadius: "20px",
    paddingBottom: "10px",
    paddingLeft: "5px",
    overflow: "hidden",
    textOverflow: "----",
  },
}));

export default function ProfilePost() {
  return (
    <ThemeProvider theme={theme}>
      <ProfilePostComponent />
    </ThemeProvider>
  );
}
