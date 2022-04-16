import React from "react";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { PageWrapper } from "../../utils/PageWrapper";

import  HelpingOthers  from "../../../Assets/Images/helpingOthers.png";


//  Importing Custom Components
// import { PageWrapper } from "../utils/PageWrapper";

// import { PageWrapper } from "../../utils/PageWrapper";
// import HelpingOthers from "../../../Assets/Images/helpingOthers.png";
export default function Product() {
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={HelpingOthers}
            //   alt={item.title}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ marginY: 5 }}
        >
          <Typography>Minimum Order</Typography>
          <Typography>10</Typography>
          <Button variant="contained">Buy Now</Button>
        </Stack>
        <Box>
          <Grid sx={{ fontSize: 30 }}>Product Name</Grid>
          <Grid>
            Product description img elements must have an alt prop, either with
            meaningful text, or an empty string for decorative images
            jsx-a11y/alt-text Line 36:21: img elements must have an alt prop,
            either with meaningful text, or an empty string for decorative
            images jsx-a11y/alt-text
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
}
