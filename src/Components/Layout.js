import { Card, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    value === index && (
      <Grid item xs={12}>
        {children}
      </Grid>
    )
  );
}

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Card>
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
          >
            <Tab label={t("title1")} value={0} />
          </Tabs>
        </Card>
      </Grid>

      <TabPanel value={value} index={0}>
        {/* {} */}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* {} */}
      </TabPanel>
    </Grid>
  );
};

export default Layout;
