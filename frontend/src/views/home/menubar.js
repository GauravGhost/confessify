import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  ListItem,
  List,
  Collapse,
  colors,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material";
import theme from "../../theme/index";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import typography from "../../theme/typography";
import menuItems from "../components/nav";

import clsx from "clsx";
import { client_app_route_url } from "../../utils/helper";
import palette from "../../theme/palette";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
const MenuBar = () => {
  const classes = useStyles();
  const [menuName, setMenuName] = useState("");

  const handleClick = (name) => {
    if (name === menuName) {
      setMenuName("");
    } else {
      setMenuName(name);
    }
  };

  const menuListing = (menus) => {
    return menus.map((menu) => {
      if (!menu.children) {
        return (
          <Link
            to={`${client_app_route_url + menu.url}`}
            key={menu.name}
            style={{ textDecoration: "none" }}
          >
            <ListItem className={classes.item} disableGutters>
              <Button
                className={classes.button}
                // style={{ color: palette.text.secondary, fontSize: "10px" }}
              >
                <ListItemIcon className={classes.icons}>
                  {/* {menu.icon && <Icon fontSize="small">{menu.icon}</Icon>} */}
                  {menu.icon && <menu.icon />}
                </ListItemIcon>
                <ListItemText
                  className={classes.itemtext}
                  primary={menu.name}
                  // style={{ color: palette.text.secondary, fontSize: "10px" }}
                />
              </Button>
            </ListItem>
          </Link>
        );
      }
      return (
        <>
          <div key={menu.name}>
            <Collapse
              in={menuName === menu.name ? true : false}
              timeout="auto"
              unmountOnExit
              className={clsx(classes.collapse, "menu-collapse")}
            >
              {menuListing(menu.children)}
            </Collapse>
          </div>
        </>
      );
    });
  };

  return <List component="nav">{menuListing(menuItems)}</List>;
};

const useStyles = makeStyles((theme) => ({
  item: {
    "&&": {
      display: "flex",
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  button: {
    "&&": {
      color: colors.blueGrey[800],
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      width: "100%",
      fontWeight: 700,
    },
  },
  icons: {
    "&&": {
      color: "white",
      minWidth: "30px !important",
    },
  },
  itemtext: {
    "&&": {
      textAlign: "left !important",
    },
  },
  collapse: {
    "&&": {
      backgroundColor: "#f5f5f5",
      fontSize: "10px",
      // padding: "0px 10px",
      paddingLeft: 15,
    },
  },
}));

export default function MenuTheme() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
    </ThemeProvider>
  );
}
