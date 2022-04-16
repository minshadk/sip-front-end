import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, Typography } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";
import ServicesCard from "../../utils/Cards/ServicesCard";
import EventsCard from "../../utils/Cards/EventsCard";
import ImageCard from "./../../utils/Cards/ImageCard";

// Importing images
import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

// Importing backend services
import serviceServices from "../../../services/serviceServices";

import axios from "axios";
const baseURL = "http://localhost:3001/";

export default function Services() {
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
        </Grid>
        <Grid
          item
          sx={{
            marginTop: 25,
            marginBottom: 25,
            display: "flex",
            direction: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography variant="h2">Services</Typography>
        </Grid>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3, lg: 15 }}
          sx={{ paddingTop: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services &&
            services.map((service, index) =>
              <Grid item xs={2} sm={4} md={4}>
                <Link to={`/service/${service._id}`}>
                  <ImageCard
                    title={service.name}
                    description={service.description}
                    // component={Link}
                  />
                </Link>
              </Grid>
            )}
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#1380c2", minHeight: 300 }} />
    </PageWrapper>
  );
}
