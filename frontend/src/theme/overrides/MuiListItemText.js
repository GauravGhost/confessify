import palette from "../palette";
import { colors } from "@mui/material";
import typography from "../typography";
export default {
  styleOverrides: {
    primary: {
      color: "white",
      fontSize: typography.body1.fontSize,
      letterSpacing: typography.body1.letterSpacing,
      lineHeight: typography.body1.lineHeight,
    },
  },
};
