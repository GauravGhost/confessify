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
import { useLocation } from "react-router-dom";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SimpleDialogDemo from "../components/dialogbox";
import CommentFormDialog from "../components/commentdialogBox";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utils/loading";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddLikeAction } from "../../store/action/commentaction";
import { get } from "lodash";
import { isEmpty } from "../../utils/helper";
import { getAllPosts } from "../../store/action";
import Captilaize from "../components/captalize";
const PostsComponent = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const postState = useSelector((state) => state.comment);
  const AllPosts = useSelector((state) => state.posts);
  const [like, setlike] = useState(false);
  const dispatch = useDispatch();

  const [posts, setposts] = useState([]);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  useEffect(() => {
    if (
      !isEmpty(
        get(AllPosts, "posts") &&
          !isEmpty(
            get(AllPosts.posts, "likes") &&
              !isEmpty(get(AllPosts.posts, "comments"))
          )
      )
    ) {
      setposts(get(AllPosts, "posts"));
    }
  }, [get(AllPosts, "posts")]);
  const likeButton = (post) => {
    const object = {
      userId: state.user_id,
      postId: post.id,
    };

    dispatch(AddLikeAction(object));
  };

  return (
    <>
      {postState.loading ? <Loading /> : null}
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return (
            <>
              <div className={classes.box} onDoubleClick={likeButton}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div className={classes.profile_pic}></div>

                  <div className={classes.user_name}>
                    <Typography variant="h3">
                      {post.isAnonymous ? " isAnonymous" : post.username}
                    </Typography>
                  </div>
                </div>
                <hr></hr>
                <div className={classes.title}>
                  <Typography variant="h2" color="title">
                    {Captilaize(post.title)}
                  </Typography>
                </div>
                <div className={classes.discription}>
                  <Typography className={classes.discription} variant="body">
                    {Captilaize(post.body)}
                  </Typography>
                </div>
                <Divider sx={{ backgroundColor: "grey", marginTop: "70px" }} />
                <div className={classes.likecomment}>
                  {post.likes && post.likes.length > 0 ? (
                    !post.likes.some(
                      (person) => person.id === state.user_id
                    ) ? (
                      <>
                        <FavoriteBorderIcon
                          className={classes.like}
                          onClick={() => likeButton(post)}
                        />
                      </>
                    ) : (
                      <FavoriteIcon
                        className={classes.like}
                        onClick={() => likeButton(post)}
                      />
                    )
                  ) : (
                    <FavoriteIcon
                      className={classes.like}
                      onClick={() => likeButton(post)}
                    />
                  )}
                  <CommentFormDialog iconName="ChatBubbleOutlineIcon" />
                </div>
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "0px",
                    fontWeight: 600,
                  }}
                >
                  <SimpleDialogDemo
                    title={`${post.likes.length || 0} likes`}
                    data={post.likes && post.likes.length > 0 ? post.likes : []}
                    check="Likes"
                  />
                  <SimpleDialogDemo
                    title={`View All ${post.comments.length || 0} Comments`}
                    data={
                      post.comments && post.comments.length > 0
                        ? post.comments
                        : []
                    }
                    check="Comments"
                  />
                </div>
              </div>
            </>
          );
        })
      ) : (
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          No Posts Available
        </Typography>
      )}
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
    marginTop: "10px",
    marginLeft: "30px",
  },
}));

export default function Posts() {
  return (
    <ThemeProvider theme={theme}>
      <PostsComponent />
    </ThemeProvider>
  );
}
