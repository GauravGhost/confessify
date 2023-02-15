import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { TextField, ThemeProvider, ListSubheader } from "@mui/material";
import theme from "../../theme";
const emails = ["username@gmail.com", "user02@gmail.com"];

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open, data, title } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{ width: 400, color: "black", fontSize: "20px", color: "white" }}
      >
        {title}
      </DialogTitle>
      <List disablePadding>
        {data.length > 0
          ? data.map((obj) => (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleListItemClick(obj.id)}
                    key={obj.id}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: blue[100], color: "white" }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary={obj.username} />
                    <ListSubheader sx={{ backgroundColor: "black" }}>
                      {obj.content}
                    </ListSubheader>
                    <Button color="primary" variant="contained">
                      Follow
                    </Button>
                  </ListItemButton>
                </ListItem>
              </>
            ))
          : null}
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ title, data, check, key, userId }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <p style={{ color: "grey", cursor: "pointer" }} onClick={handleClickOpen}>
        {title}
      </p>
      {open ? (
        <>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            data={data}
            title={check}
            onClose={handleClose}
          />
        </>
      ) : null}
    </div>
  );
}
