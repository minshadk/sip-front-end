import { Box, Typography, Grid, Stack } from "@mui/material";
import React from "react";
import AddButton from "../../utils/Button/AddButton";
import ServicesCard from "../../utils/Cards/ServicesCard";
import { PageWrapper } from "../../utils/PageWrapper";
import EventsCard from "./../../utils/Cards/EventsCard";

export default function ProductAdmin() {
  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4">Manage products</Typography>
        <AddButton path={"/addProduct"}>Add product</AddButton>
      </Stack>

      <Box>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3, lg: 15 }}
          sx={{ paddingTop: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <EventsCard />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
}
