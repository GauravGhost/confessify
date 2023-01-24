import { createMuiTheme } from "@material-ui/core";
import { createTheme } from "@mui/material";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import MuiButton from "./overrides/MuiButton";
import MuiTableCell from "./overrides/MuiTableCell";
import MuiTableHead from "./overrides/MuiTableHead";
import MuiTableRow from "./overrides/MuiTableRow";
import MuiTypography from "./overrides/MuiTypography";
import MuiIconButton from "./overrides/MuiIconButton";
import MuiPaper from "./overrides/MuiPaper";
import MuiCardHeader from "./overrides/MuiCardHeader";
import MuiSlider from "./overrides/MuiSlider";
import MuiFormControlLabel from "./overrides/MuiFormControlLabel";
import MuiCheckbox from "./overrides/MuiCheckbox";
import MuiTab from "./overrides/MuiTab";
import MuiListItemText from "./overrides/MuiListItemText";
import MuiRadio from "./overrides/MuiRadio";
import MuiInputBase from "./overrides/MuiInputBase";
import MuiOutlinedInput from "./overrides/MuiOutlinedInput";
import MuiInputLabel from "./overrides/MuiInputLabel";
const theme = createTheme({
  components: {
    MuiButton,
    palette,
    typography,
    MuiTableHead,
    MuiTableCell,
    MuiTableRow,
    MuiCardHeader,
    MuiTypography,
    MuiPaper,
    MuiIconButton,
    MuiSlider,
    MuiFormControlLabel,
    MuiTab,
    MuiListItemText,
    MuiRadio,
    MuiInputBase,
    MuiOutlinedInput,
    MuiInputLabel,
    // overrides,
    MuiCheckbox,
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  },
});

export default theme;
// import { createTheme } from "@mui/material/styles";
// import { colors } from "@mui/material";
// // assets
// // import colors from "assets/scss/_themes-vars.module.scss";

// import componentStyleOverrides from "./compStyleOverride";
// import themePalette from "./palette";
// import themeTypography from "./typography";

// export const theme = (customization) => {
//   const color = colors;

//   const themeOption = {
//     colors: color,
//     heading: color.grey900,
//     paper: color.paper,
//     backgroundDefault: color.paper,
//     background: color.primaryLight,
//     darkTextPrimary: color.grey700,
//     darkTextSecondary: color.grey500,
//     textDark: color.grey900,
//     menuSelected: color.secondaryDark,
//     menuSelectedBack: color.secondaryLight,
//     divider: color.grey200,
//     customization,
//   };

//   const themeOptions = {
//     direction: "ltr",
//     palette: themePalette(themeOption),
//     mixins: {
//       toolbar: {
//         minHeight: "48px",
//         padding: "16px",
//         "@media (min-width: 600px)": {
//           minHeight: "48px",
//         },
//       },
//     },
//     typography: themeTypography(themeOption),
//   };

//   const themes = createTheme({ themeOptions });
//   themes.components = componentStyleOverrides(themeOption);

//   return themes;
// };

// export default theme;
