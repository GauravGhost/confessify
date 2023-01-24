import palette from "../palette";
import { colors } from "@mui/material";
export default {
  styleOverrides: {
    root: {
      tab: {
        color: "#263238;",
      },
      "&:hover": {
        backgroundColor: palette.primary.default,
        color: palette.primary.default,
      },
      "&.Mui-selected": {
        color: "black",
        fontWeight: "bold",
      },
    },
  },
};
