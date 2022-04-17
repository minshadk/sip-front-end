import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

// Custom components
import { PageWrapper } from "../utils/PageWrapper";

// Importing images
import bloodRequest from "./../../Assets/Images/bloodRequest.png";
import donateBlood from "./../../Assets/Images/donateBlood.png";

export default function DonateBlood() {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Box sx={{ marginY: 10 }}>
          <Grid container sx={{ marginBottom: 30 }}>
            <Grid item xs={8}>
              {/* xs=8 */}
              {/* <Grid container>

              </Grid> */}
              <Stack
                // spacing={2}
                // direction="row"
                // divider={<Divider orientation="vertical" flexItem />}
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent={"center"}
                spacing={10}
              >
                <Typography variant="h2">Be a donor with us</Typography>
                <Typography variant="h4">
                  would you like to as a blood donar in our comunity.you can
                  join with us and donate your valuable blood for others.then
                  click below and fill the form
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 40 }}>
                  <Link to="/products">Click Here</Link>
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={bloodRequest} height="200px" />
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: 30 }}>
            <Grid item xs={8}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent={"center"}
                spacing={10}
              >
                <Typography variant="h2">Need blood?</Typography>
                <Typography variant="h4">
                  we will help you to get blood.you just fill the form with the
                  details of the patient. click below and fill the form
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 40 }}>
                  <Link to="/products">Click Here</Link>
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={bloodRequest} height="200px" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
}
