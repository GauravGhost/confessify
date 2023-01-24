import { colors } from "@mui/material";

// export default {
//   styleOverrides: {
//     root: {
//       backgroundColor: "red",
//       // backgroundColor: colors.grey[50]
//     },
//   },
// };
// export default {
//   styleOverrides: {
//     root: {
//       "&&": {
//         color: "red",
//         backgroundColor: colors.grey[50],
//         borderBottom: `1px solid red`,
//       },
//     },
//   },
// };
import typography from "../typography";
import palette from "../palette";
export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor: "red",
        }),
    }),
  },
};
