import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3} pt={3}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          {t("title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          {t("subtitle")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
