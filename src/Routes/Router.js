import React from "react";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { createTheme, ThemeProvider } from "@mui/material";
import i18n from "../Locales/i18n";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  direction: getLanguage() === "ar" ? "rtl" : "ltr",
  palette: {
    background: {
      default: "#662141",
    },
    primary: {
      main: "#662141",
    },
  },
  typography: {
    fontFamily: getLanguage() === "ar" ? "Tajawal" : "Advent Pro",
    fontSize: "16px",
  },
  overrides: {
    MuiFormLabel: {
      root: {
        right: getLanguage() === "ar" ? 30 : "unset",
        left: getLanguage() === "ar" ? "unset" : 0,
        "&$focused": {
          right: getLanguage() === "ar" ? 20 : "unset",
          left: getLanguage() === "ar" ? "unset" : 0,
        },
        "&$filled": {
          right: getLanguage() === "ar" ? 20 : "unset",
          left: getLanguage() === "ar" ? "unset" : 0,
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "6rem",
  fontWeight: "bold",
  "@media (min-width:600px)": {
    fontSize: "6rem",
    lineHeight: "6rem",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "4.5rem",
    lineHeight: "4.5rem",
  },
};

theme.typography.h2 = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  "@media (min-width:600px)": {
    fontSize: "2.5rem",
    lineHeight: "3.5rem",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },
};

const LanguageContainer = ({ children }) => {
  if (getLanguage() === "ar") {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  } else {
    return children;
  }
};
const Router = () => {
  if (window.location.pathname.split("/")[1] === "ar") {
    i18next.changeLanguage("ar");
  } else {
    i18next.changeLanguage("en");
  }
  return (
    <BrowserRouter
      basename={getLanguage() === "ar" ? "ar" : "en"}
      forceRefresh={true}
    >
      <LanguageContainer>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </LanguageContainer>
    </BrowserRouter>
  );
};

export default Router;
