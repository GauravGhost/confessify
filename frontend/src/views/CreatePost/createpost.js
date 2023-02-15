import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Button,
  TextField,
  Typography,
  TextareaAutosize,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { CreatepostAction } from "../../store/action";
const CreatePostComponent = () => {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [post, setpost] = useState({
    userid: user.user_token.user_id,
    title: "",
    body: "",
    isAnonymous: false,
    username: user.user_token.username,
    likes: [],
    comments: [],
  });
  const classes = useStyles();
  const handleChange = (prop) => (e) => {
    if (prop === "isAnonymous") {
      setpost({ ...post, [prop]: !post.isAnonymous });
    } else {
      setpost({ ...post, [prop]: e.target.value });
    }
  };
  const createbutton = () => {
    dispatch(CreatepostAction(post));
  };
  return (
    <>
      <Grid container className={classes.root} justifyContent="center">
        <Grid item xs={10} className={classes.heading} mt={4}>
          <Typography variant="h2" color="primary" className={classes.heading}>
            Create a new post
          </Typography>

          <Grid item mt={10}>
            <TextareaAutosize
              minRows={2}
              aria-label="empty textarea"
              placeholder="Title"
              className={classes.content}
              name="title"
              value={post.title}
              onChange={handleChange("title")}
            />
          </Grid>
          <Grid item mt={5}>
            <TextareaAutosize
              minRows={10}
              aria-label="empty textarea"
              placeholder="Content"
              name="content"
              value={post.body}
              className={classes.content}
              onChange={handleChange("body")}
            />
          </Grid>
          <Grid item mt={4}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={post.isAnonymous}
                  onChange={handleChange("isAnonymous")}
                />
              }
              label="isAnonymous"
            />
          </Grid>
          <Grid item mt={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.createbutton}
              onClick={createbutton}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

    background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
  },
  heading: {
    textAlign: "center",
    marginLeft: "30px",
  },
  content: {
    width: "700px",
    height: "200px",
    border: "2px solid #FFFFFF",
    fontSize: "30px",
    letterSpacing: "-0.06px",
    lineHeight: "14.63px",
    fontFamily: "Montserrat",
    padding: "10px",
    "&::placholder": {
      //This is meant to change the place holder color to green
      color: "green",
    },
  },
  title: {
    width: "720px",
    height: "50px",
  },
  createbutton: {
    width: "214px",
    height: "48px",

    background: "linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)",
    borderRadius: "40px",
  },
}));

export default function CreatePost() {
  return (
    <ThemeProvider theme={theme}>
      <CreatePostComponent />
    </ThemeProvider>
  );
}
