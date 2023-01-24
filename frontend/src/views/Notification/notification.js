import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alerts() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const alert = useSelector((state) => state.alert);
  console.log(alert);
  useEffect(() => {
    if (alert.success) {
      setOpen(true);
      window.setTimeout(() => {
        setOpen(false);
        dispatch({
          type: "ALERT_SUCCESS",
          payload: { boolean: false, message: "", error: false },
        });
      }, 3000);
    }

    if (alert.error) {
      setOpen(true);
      window.setTimeout(() => {
        setOpen(false);
        dispatch({
          type: "ALERT_SUCCESS",
          payload: { boolean: false, message: "", error: false },
        });
      }, 3000);
    }
  }, [alert.error || alert.success]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: "100px" }}
      >
        <Alert
          severity={alert.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
