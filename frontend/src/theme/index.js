import { createMuiTheme } from "@material-ui/core";
import { createTheme } from "@mui/material";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import MuiButton from "./overrides/MuiButton";
import MuiTableCell from "./overrides/MuiTableCell";
import MuiTableHead from "./overrides/MuiTableHead";
import MuiTableRow from "./overrides/MuiTableRow";
// import MuiTypography from "./overrides/MuiTypography";
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
import MuiTextField from "./overrides/MuiTextField";
import MuiInputLabel from "./overrides/MuiInputLabel";
const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,

    MuiTableHead,
    MuiTableCell,
    MuiTableRow,
    MuiCardHeader,
    // MuiTypography,
    MuiPaper,
    MuiIconButton,
    MuiSlider,
    MuiFormControlLabel,
    MuiTab,
    MuiListItemText,
    MuiRadio,
    MuiInputBase,
    MuiOutlinedInput,
    MuiTextField,
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
