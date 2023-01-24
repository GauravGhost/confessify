import palette from "./palette";

export default {
  h1: {
    // color: palette.text.primary,
    // fontSize: "46px",
    // fontWeight: 700,
    // lineWeight: "56px",
    // letterSpacing: "0em",
    // textAlign: "left",

    fontFamily: "Montserrat",
    fontSize: "46px",
    fontWeight: 700,
    lineHeight: "56px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "29px",
    letterSpacing: "-0.24px",
    lineHeight: "32px",
  },
  h3: {
    Font: "Montserrat",

    color: palette.text.primary,
    fontWeight: "700",
    fontSize: "12px",
    letterSpacing: "-0.06px",
    lineHeight: "14.63px",
    fontFamily: "Montserrat",
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 700,
    fontSize: "30px",
    letterSpacing: "-0.06px",
    lineHeight: "43.88px",
    fontFamily: "Montserrat",
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 550,
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "20px",
    fontFamily: "Montserrat",
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "12px",
    letterSpacing: "-0.05px",
    lineHeight: "14.63px",
    fontFamily: "Montserrat",
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: " 36px",
    letterSpacing: "0em",
    lineHeight: "20px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    textAlign: "left",
    fontWeight: 300,
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
  },
  body1: {
    color: palette.text.primary,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "21px",
  },
  body2: {
    color: palette.text.secondary,
    fontSize: "12px",
    letterSpacing: "-0.04px",
    lineHeight: "18px",
  },
  button: {
    color: palette.text.primary,
    fontSize: "14px",
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "11px",
    letterSpacing: "0.33px",
    lineHeight: "13px",
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase",
  },
};

/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

// export default function themeTypography(theme) {
//   return {
//     // fontFamily: theme?.customization?.fontFamily,
//     h6: {
//       fontWeight: 500,
//       color: "red",
//       fontSize: "0.75rem",
//     },
//     h5: {
//       fontSize: "0.875rem",
//       color: theme.heading,
//       fontWeight: 500,
//     },
//     h4: {
//       fontSize: "1rem",
//       color: theme.heading,
//       fontWeight: 600,
//     },
//     h3: {
//       fontSize: "1.25rem",
//       color: theme.heading,
//       fontWeight: 600,
//     },
//     h2: {
//       fontSize: "1.5rem",
//       color: theme.heading,
//       fontWeight: 700,
//     },
//     h1: {
//       fontSize: "2.125rem",
//       color: theme.heading,
//       fontWeight: 700,
//     },
//     subtitle1: {
//       fontSize: "0.875rem",
//       fontWeight: 500,
//       color: theme.textDark,
//     },
//     subtitle2: {
//       fontSize: "0.75rem",
//       fontWeight: 400,
//       color: theme.darkTextSecondary,
//     },
//     caption: {
//       fontSize: "0.75rem",
//       color: theme.darkTextSecondary,
//       fontWeight: 400,
//     },
//     body1: {
//       fontSize: "0.875rem",
//       fontWeight: 400,
//       lineHeight: "1.334em",
//     },
//     body2: {
//       letterSpacing: "0em",
//       fontWeight: 400,
//       lineHeight: "1.5em",
//       color: theme.darkTextPrimary,
//     },
//     button: {
//       textTransform: "capitalize",
//     },
//     customInput: {
//       marginTop: 1,
//       marginBottom: 1,
//       "& > label": {
//         top: 23,
//         left: 0,
//         color: theme.grey500,
//         '&[data-shrink="false"]': {
//           top: 5,
//         },
//       },
//       "& > div > input": {
//         padding: "30.5px 14px 11.5px !important",
//       },
//       "& legend": {
//         display: "none",
//       },
//       "& fieldset": {
//         top: 0,
//       },
//     },
//     mainContent: {
//       backgroundColor: theme.background,
//       width: "100%",
//       minHeight: "calc(100vh - 88px)",
//       flexGrow: 1,
//       padding: "20px",
//       marginTop: "88px",
//       marginRight: "20px",
//       borderRadius: `${theme?.customization?.borderRadius}px`,
//     },
//     menuCaption: {
//       fontSize: "0.875rem",
//       fontWeight: 500,
//       color: theme.heading,
//       padding: "6px",
//       textTransform: "capitalize",
//       marginTop: "10px",
//     },
//     subMenuCaption: {
//       fontSize: "0.6875rem",
//       fontWeight: 500,
//       color: theme.darkTextSecondary,
//       textTransform: "capitalize",
//     },
//     commonAvatar: {
//       cursor: "pointer",
//       borderRadius: "8px",
//     },
//     smallAvatar: {
//       width: "22px",
//       height: "22px",
//       fontSize: "1rem",
//     },
//     mediumAvatar: {
//       width: "34px",
//       height: "34px",
//       fontSize: "1.2rem",
//     },
//     largeAvatar: {
//       width: "44px",
//       height: "44px",
//       fontSize: "1.5rem",
//     },
//   };
// }
