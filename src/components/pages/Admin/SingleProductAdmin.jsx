import React from "react";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";

import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

export default function SingleProductAdmin() {
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
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            //   alt={item.title}
            //   loading="lazy"
          />
        </Box>
        <Box>
          <Grid sx={{ fontSize: 30 }}>Product Name</Grid>
          <Grid>
            Product description img elements must have an alt prop, either with
            meaningful text, or an empty string for decorative images
            jsx-a11y/alt-text Line 36:21: img elements must have an alt prop,
            either with meaningful text, or an empty string for decorative
            images jsx-a11y/alt-text
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{ marginY: 5 }}
          >
            <Button variant="contained">Edit</Button>
            <Button variant="outlined">Delete</Button>
          </Stack>
        </Box>
      </Container>
    </PageWrapper>
  );
}
