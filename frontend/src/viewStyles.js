import palette from "./theme/palette";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import MuiButton from "./theme/overrides/MuiButton";
import typography from "./theme/typography";
const viewStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: "1101 !important",
    color: "#fff",
  },
  backdropInnerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backdropLoadingText: {
    color: "#fff",
    marginTop: "20px !important",
  },
}));
export default viewStyles;
