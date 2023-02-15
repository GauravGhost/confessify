import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import clsx from "clsx";
import theme from "../../theme";
import SideBar from "./sidebar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AllRoutes from "../../routes/routes";

const HomeComponent = () => {
  const classes = useStyles("10px");

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        {/* <Header onSidebarOpen={handleSidebarOpen} /> */}
        <SideBar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? "persistent" : "temporary"}
        />
        <main className={classes.content}>
          {/* {children} */}
          <AllRoutes />
        </main>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    "&&": {
      // paddingTop: 56,
      height: "1000px",
      // [theme.breakpoints.up("sm")]: {
      //   paddingTop: 50,
      // },
      background:
        "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
      display: "flex",
      flexDirection: "row",
    },
  },
  shiftContent: {
    "&&": {
      paddingLeft: 175,
    },
  },
  content: {
    "&&": {
      height: "calc(100% - 58px)",
      width: "100%",
      overflowY: "auto",
      overflowX: "hidden",
    },
  },
}));

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
}
