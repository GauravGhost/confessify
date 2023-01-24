import { colors } from "@mui/material";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#154050",
    main: white,
    light: "#154050",
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue["A400"],
    light: colors.blue["A400"],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    // secondary: "#154050",
    link: colors.blue[600],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

// export default function themePalette(theme) {
//   return {
//     mode: theme?.customization?.navType,
//     common: {
//       black: theme.colors?.darkPaper,
//     },
//     primary: {
//       // contrastText: white,
//       dark: "#154050",
//       main: "#154050",
//       light: "#154050",
//     },
//     secondary: {
//       light: theme.colors?.secondaryLight,
//       main: theme.colors?.secondaryMain,
//       dark: theme.colors?.secondaryDark,
//       200: theme.colors?.secondary200,
//       800: theme.colors?.secondary800,
//     },
//     error: {
//       light: theme.colors?.errorLight,
//       main: theme.colors?.errorMain,
//       dark: theme.colors?.errorDark,
//     },
//     orange: {
//       light: theme.colors?.orangeLight,
//       main: theme.colors?.orangeMain,
//       dark: theme.colors?.orangeDark,
//     },
//     warning: {
//       light: theme.colors?.warningLight,
//       main: theme.colors?.warningMain,
//       dark: theme.colors?.warningDark,
//     },
//     success: {
//       light: theme.colors?.successLight,
//       200: theme.colors?.success200,
//       main: theme.colors?.successMain,
//       dark: theme.colors?.successDark,
//     },
//     grey: {
//       50: theme.colors?.grey50,
//       100: theme.colors?.grey100,
//       500: theme.darkTextSecondary,
//       600: theme.heading,
//       700: theme.darkTextPrimary,
//       900: theme.textDark,
//     },
//     dark: {
//       light: theme.colors?.darkTextPrimary,
//       main: theme.colors?.darkLevel1,
//       dark: theme.colors?.darkLevel2,
//       800: theme.colors?.darkBackground,
//       900: theme.colors?.darkPaper,
//     },
//     text: {
//       primary: theme.darkTextPrimary,
//       secondary: theme.darkTextSecondary,
//       dark: theme.textDark,
//       hint: theme.colors?.grey100,
//     },
//     background: {
//       paper: theme.paper,
//       default: theme.backgroundDefault,
//     },
//   };
// }
