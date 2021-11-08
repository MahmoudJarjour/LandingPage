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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        align={getLanguage() === "ar" ? "left" : "right"}
        m="1%"
      >
        <IconButton
          size="large"
          href={
            getLanguage() === "ar"
              ? "http://localhost:3001/en"
              : "http://localhost:3001/ar"
          }
          sx={{ fontSize: "22px" }}
        >
          <Typography variant="h4" sx={{ color: "white", mx: 3 }}>
            {getLanguage() === "ar" ? "English" : "عربي"}
          </Typography>
          <LanguageIcon sx={{ color: "white" }} />
        </IconButton>
      </Grid>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={7}>
            <img src="/assets/logo.png" style={{ width: "100%" }} alt="logo" />
          </Grid>

          <Grid item xs={10}>
            <Card
              elevation={0}
              style={{ backgroundColor: "transparent", position: "relative" }}
            >
              <CardMedia
                image="assets/bubble.png"
                style={{ paddingTop: "100%" }}
              />
              <CardContent
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "20%",
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
                sx={{ fontSize: "22px" }}
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://twitter.com/elgherbalorg"
                size="large"
                sx={{ fontSize: "22px" }}
              >
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://instagram.com/elgherbalorg"
                size="large"
                sx={{ fontSize: "22px" }}
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
