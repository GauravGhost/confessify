import palette from "../palette";
import { colors } from "@mui/material";
export default {
  styleOverrides: {
    root: {
      "&.Mui-disabled": {
        color: "red",
      },
    },
    mark: {
      backgroundColor: "pink",
      width: "4px",
    },
    // valueLabel: {
    //   color: theme?.colors?.primaryLight,
    // },
  },
};
