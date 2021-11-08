import * as React from "react";
import {
  Typography,
  Grid,
  Container,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";
import { useHistory } from "react-router";
import i18n from "../Locales/i18n";
const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = () => {
  const { t } = useTranslation();

  const langLink =
    i18n.language === "en"
      ? window.location.origin + "/ar" + window.location.pathname
      : window.location.origin + window.location.pathname.replace("/ar", "");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={7} align={getLanguage() === "ar" ? "left" : "right"}>
            <Button
              size="large"
              component={Link}
              href={langLink}
              sx={{ p: 0 }}
              endIcon={<LanguageIcon sx={{ color: "white" }} />}
            >
              <Typography sx={{ color: "white" }}>
                {getLanguage() === "ar" ? "English" : "عربي"}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={7}>
            <img src="/assets/logo.png" style={{ width: "100%" }} alt="logo" />
          </Grid>

          <Grid item xs={10}>
            <Card
              elevation={0}
              style={{ backgroundColor: "transparent", position: "relative" }}
            >
              <CardMedia
                image="/assets/bubble.png"
                style={{ paddingTop: "100%" }}
              />
              <CardContent
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "25%",
                }}
              >
                <Typography variant="h1" textAlign="center" color="primary">
                  {t("coming")}
                  <br />
                  {t("Soon")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ color: "white" }} textAlign="center" variant="h2">
              {t("Towards a Healed Memory in Lebanon")}
            </Typography>
          </Grid>
        </Grid>
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
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <IconButton
                href="https://facebook.com/elgherbalorg"
                size="large"
                sx={{ fontSize: "22px", color: "#3B5998" }}
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://twitter.com/elgherbalorg"
                size="large"
                sx={{ fontSize: "22px", color: "#08a0e9" }}
              >
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://instagram.com/elgherbalorg"
                size="large"
                sx={{ fontSize: "22px", color: "#E1306C" }}
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large" sx={{ fontSize: "22px" }}>
                <Email />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
