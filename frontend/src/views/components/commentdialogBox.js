import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Icons from "../components/Icon";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AddCommentAction } from "../../store/action/commentaction";
import { useDispatch } from "react-redux";
function CommentFormDialogComponent({ iconName }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [comment, setcomment] = React.useState({
    username: location.state.username,
    userid: "",
    comment: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcomment({ ...comment, [name]: value });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const AddComment = () => {
    dispatch(AddCommentAction(comment));
    setOpen(false);
  };
  return (
    <div>
      {Icons.map((icon) => {
        if (icon.name === iconName) {
          return (
            <icon.icon className={classes.comment} onClick={handleClickOpen} />
          );
        }
      })}
      <icon />

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ width: "450px" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add a comment"
            type="email"
            name="comment"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={AddComment} sx={{ color: "white" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  comment: {
    fontSize: "20px",
    marginLeft: "20px",
    cursor: "pointer",
  },
}));

export default function CommentFormDialog({ iconName }) {
  return (
    <ThemeProvider theme={theme}>
      <CommentFormDialogComponent iconName={iconName} />
    </ThemeProvider>
  );
}
