import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function Copyright() {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary">
      {t("Copyright © ")}
      <Link color="inherit" href="https://mui.com/">
        elgherbal.org
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "white" }}
          gutterBottom
        >
          {t("Coming soon")}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {t("learn about gherbal")}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">{t("All Rights Reserved.")}</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
