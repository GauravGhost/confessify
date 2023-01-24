import typography from "../typography";
import palette from "../palette";
export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: " 12px",
          lineHeight: "14.63px",
          fontFamily: "Montserrat",
          /* identical to box height */
          background: " linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)",
          borderRadius: " 40px",
          color: "#343045",
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        }),
      ...(ownerState.variant === "contained" &&
        ownerState.color === "secondary" && {
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: " 12px",
          lineHeight: "14.63px",
          fontFamily: "Montserrat",
          /* identical to box height */
          background:
            "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
          border: "1px solid white",
          borderRadius: " 40px",
          color: "white",
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        }),

      ...(ownerState.variant === "contained" &&
        ownerState.color === "success" && {
          backgroundColor: palette.success.main,
          "&:hover": {
            backgroundColor: palette.success.main,
          },
        }),
      ...(ownerState.variant === "check" &&
        ownerState.color === "primary" && {
          backgroundColor: palette.success.main,
          "&:hover": {
            backgroundColor: palette.success.main,
          },
        }),
      ...(ownerState.variant === "text" &&
        ownerState.color === "primary" && {
          color: palette.text.primary,
          "&:hover": {
            // backgroundColor: palette.success.main,
          },
        }),
    }),
    // root: {
    //   boxShadow:
    //     "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
    //   backgroundColor: "#FFFFFF",
    // },
  },
};
