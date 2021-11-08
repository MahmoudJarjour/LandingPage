import React from "react";
import { Grid, Typography } from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const Header = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3} pt={3}>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <img
              src={getLanguage() === "ar" ? "1.png" : "2.png"}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h1" component="h1" sx={{ color: "white" }}>
              {t("Towards a Healed Memory in Lebanon")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
