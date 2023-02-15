import typography from "../typography";
import palette from "../palette";
export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "outlined" && {
        boxSizing: "border-box",

        borderRadius: "40px",

        background:
          "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
      }),
      ...(ownerState.variant === "standard" && {
        backgroundColor: "white",
      }),
      ...(ownerState.variant === "filled" && {
        color: "black",
      }),
    }),
  },

  inputAdornedStart: {
    paddingLeft: 4,
  },
};
