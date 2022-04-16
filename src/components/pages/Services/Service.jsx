import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, Typography } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";
import ServicesCard from "../../utils/Cards/ServicesCard";
import EventsCard from "../../utils/Cards/EventsCard";

// Importing images
import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

// Importing backend services
import serviceServices from "../../../services/serviceServices";


import axios from "axios";
const baseURL = "http://localhost:3001/";

export default function Service() {
  const [services, setServices] = useState();

  useEffect(() => {
    // const getAllServices = async () => {
    //   console.log("funciton called");
    //   const response = await serviceServices.getAllServices;
    //   // console.log(response)
    //   setServices(response);
    // };

    // getAllServices();

    const get = async path => {
      console.log("get function called");
      //generating url
      const url = `${baseURL}${path}`;

      //generating the request
      const response = await axios.get(url);

      // return response.data;
      // console.log(response.data)
      setServices(response.data.data.services);
    };
    get("service");
  }, []);
  console.log(services);
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h2"
            sx={{
              marginTop: 25,
              marginBottom: 25
            }}
          >
            we rise by liftng others
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              We provide to you the best choiches for you. We provide you the
              necassary needs for your emergency . You can get hand from us at
              any time at any where
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <img src={HelpingOthers} height="400px" />
          </Grid>
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
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <EventsCard />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <EventsCard />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <EventsCard />
                  </Grid>
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
