import { useState, useEffect } from "react";

import { Box, Typography, Grid, Stack } from "@mui/material";

import AddButton from "../../utils/Button/AddButton";
import ServicesCard from "../../utils/Cards/ServicesCard";
import { PageWrapper } from "../../utils/PageWrapper";
import EventsCard from "./../../utils/Cards/EventsCard";

import productService from "../../../services/productService";

export default function ProductAdmin() {
  useEffect(() => {
    const getAllProduct = async () => {
      console.log("funciton called");
      const response = await productService.getAllProduct();
      console.log(response.data.products);
    };

    getAllProduct();
  });
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
