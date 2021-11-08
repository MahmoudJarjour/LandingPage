import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3} pt={3}>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <img src="Gherbal.png" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1" component="h1" sx={{ color: "white" }}>
              <b>{t("Gherbal")}</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
