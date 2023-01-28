import typography from "../typography";
import palette from "../palette";
export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "h1" && {
        background:
          "linear-gradient(91.57deg, #C0B7E8 -1.02%, #8176AF 36.25%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",

        fontWeight: typography.h1.fontWeight,
        fontSize: "30px",
        letterSpacing: typography.h1.letterSpacing,
        lineHeight: typography.h1.lineHeight,
        fontFamily: typography.h1.fontFamily,
        backgroundClip: "text",
        textFillColor: "transparent",
      }),
      ...(ownerState.variant === "h1white" && {
        color: palette.primary.contrastText,

        fontWeight: typography.h1.fontWeight,
        fontSize: "30px",
        letterSpacing: typography.h1.letterSpacing,
        lineHeight: typography.h1.lineHeight,
        fontFamily: typography.h1.fontFamily,
      }),
      ...(ownerState.variant === "h5" && {
        color: palette.primary.contrastText,
        fontWeight: typography.h3.fontWeight,
        fontSize: "30px",
        letterSpacing: typography.h3.letterSpacing,
        lineHeight: typography.h3.lineHeight,
        fontFamily: typography.h3.fontFamily,
      }),
      ...(ownerState.variant === "h2" && {
        color: "black",
        fontWeight: typography.h4.fontWeight,
        fontSize: typography.h4.fontSize,
        letterSpacing: typography.h4.letterSpacing,
        lineHeight: typography.h4.lineHeight,
        fontFamily: typography.h4.fontFamily,
      }),
      ...(ownerState.variant === "h3" && {
        color: "black",
        fontWeight: typography.h3.fontWeight,
        fontSize: "30px",
        letterSpacing: typography.h3.letterSpacing,
        lineHeight: typography.h3.lineHeight,
        fontFamily: typography.h3.fontFamily,
      }),
      ...(ownerState.variant === "h4" && {
        color: palette.primary.contrastText,
        fontWeight: typography.h4.fontWeight,
        fontSize: typography.h4.fontSize,
        letterSpacing: typography.h4.letterSpacing,
        lineHeight: typography.h4.lineHeight,
        fontFamily: typography.h4.fontFamily,
      }),

      ...(ownerState.variant === "h6" && {
        color: palette.primary.contrastText,
        fontWeight: typography.h6.fontWeight,
        fontSize: typography.h6.fontSize,
        letterSpacing: typography.h6.letterSpacing,
        lineHeight: typography.h6.lineHeight,
        fontFamily: typography.h6.fontFamily,
      }),
      ...(ownerState.variant === "subtitle1" && {
        color: palette.primary.contrastText,
        fontWeight: "100",
        fontSize: typography.subtitle1.fontSize,
        letterSpacing: typography.subtitle1.letterSpacing,
        lineHeight: typography.subtitle1.lineHeight,
        fontFamily: typography.subtitle1.fontFamily,
        fontStyle: typography.subtitle1.fontStyle,
      }),
      ...(ownerState.variant === "body1" && {
        color: "white",
        fontWeight: typography.body1.fontWeight,
        fontFamily: typography.body1.fontFamily,
        letterSpacing: typography.body1.letterSpacing,
        lineHeight: typography.body1.lineHeight,
        fontSize: typography.body1.fontSize,
      }),
    }),
  },
};
