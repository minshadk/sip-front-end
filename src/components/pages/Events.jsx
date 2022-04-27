import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../utils/PageWrapper";
import ServicesCard from "../utils/Cards/ServicesCard";
import EventsCard from "../utils/Cards/EventsCard";
import ImageCard from "../utils/Cards/ImageCard";

// Importing images
import HelpingOthers from "../../Assets/Images/helpingOthers.png";
import donate from "./../../Assets/Images/donate.jpeg";
import oneDay from "./../../Assets/Images/oneDay.jpg";
import alumin from "./../../Assets/Images/alumin.jpeg";
import inspire from "./../../Assets/Images/inspire.jpeg";
import nirakute from "./../../Assets/Images/nirakute.jpeg";
import payasam from "./../../Assets/Images/payasam.jpeg";
import spring from "./../../Assets/Images/spring.jpeg";
import workShop from "./../../Assets/Images/workShop.jpeg";

const imageUrls = [
  donate,
  payasam,
  oneDay,
  workShop,
  inspire,
  nirakute,
  spring,
  alumin,
];

export default function Events() {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        {/* <Box>
          <Typography
            variant="h2"
            sx={{
              marginTop: 25,
              marginBottom: 25
            }}
          >
            we rise by liftng others
          </Typography>
        </Box> */}
        <Grid container>
          <Box>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ paddingY: 8 }}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3, lg: 30 }}
                >
                  {imageUrls.map((imageUrl, index) =>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                      <ImageCard imageUrl={imageUrl} />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#1380c2", minHeight: 300 }} />
    </PageWrapper>
  );
}
