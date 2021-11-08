import React from "react";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
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
    primary: {
      main: "#0c9fc1",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Cairo",
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
