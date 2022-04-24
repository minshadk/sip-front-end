import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

// Importing Custom components
import { PageWrapper } from "../utils/PageWrapper";
import ServicesCard from "../utils/Cards/ServicesCard";
import EventsCard from "../utils/Cards/EventsCard";
import ImageCard from "./../utils/Cards/ImageCard";

// Importing images
import HandsShakeImgae from "../../Assets/Images/handsshake.jpg";
import BloodDonateing from "../../Assets/Images/bloodtaking.jpg";
import HelpingOthers from "../../Assets/Images/helpingOthers.png";

// Importing backend services
import serviceServices from "../../services/serviceServices";
import productService from "./../../services/productService";

import axios from "axios";
const baseURL = "http://localhost:3001/";

const Home = () => {
  const [services, setServices] = useState();
  const [products, setProduct] = useState();

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

    const callBackendServices = async () => {
      console.log("call backedn serives");
      const response = await productService.getAllProduct();
      setProduct(response.data.products);
    };
    get("service");
    callBackendServices();
  }, []);
  // console.log(services);
  console.log(products);

  return (
    // Landing
    <PageWrapper>
      <Container maxWidth="xl">
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="h2"
                sx={{
                  marginTop: 25,
                  marginBottom: 20,
                  color:"#346FC0"
                }}
              >
                we rise by liftng others
              </Typography>
              <Typography variant="h5">
                we are in a mission to help the helpless.this is the Best Way To
                Make A Difference In The Lives Of Others.help each other to
                bring back the smiles of others.lets make this network stronger
                by donating and giving the necassary needs to those who in needs
                it
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                maxWidth: 270,
                height: "100px"
              }}
            >
              <Box sx={{ maxHeight: 50 }}>
                <img src={HandsShakeImgae} height="500px" />
              </Box>
            </Grid>
          </Grid>
        </Box>
  
        {/* Blood Donation */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <img src={BloodDonateing} height="600px" />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h4">
              why should we donate our blood ?
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Donating blood regularly is beneficial to prevent and reduce heart
              attacks and liver ailment. The risk of heart and liver related
              problem is caused by the iron overload in the body. Donating blood
              helps in maintaining the iron level in the body and thus reduce
              those risk.
            </Typography>
            <Stack spacing={2} direction="row" sx={{ margin: 5 }}>
              <Button variant="outlined">
                <Link to="/donateBlood">Donate Blood</Link>
              </Button>
            </Stack>
          </Grid>
        </Grid>
        {/* Helping others */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h4">Helping others</Typography>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Helping others improves social interaction, distracts people from
              their own problems, and improves self-esteem and competence.
              Physical Well-Being - helping others leads to increased social
              integration which allows people to lead more active lifestyles.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <img src={HelpingOthers} height="600px" />
          </Grid>
        </Grid>
        {/* Events */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingY: 8 }}
        >
          <Grid item sx={{ paddingY: 5 }}>
            <Typography variant="h4">Our Product</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 2, md: 3, lg: 30 }}
            >
              {/* <Grid item xs={12} sm={4} md={4} lg={4}>
                <EventsCard />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <EventsCard />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <EventsCard />
              </Grid> */}
              {products &&
                products.map((product, index) =>
                  <Grid item xs={12} sm={4} md={4} lg={4} x>
                    {/* <Link to={`/product`}> */}
                    <ImageCard
                      title={product.name}
                      description={product.description}
                      // component={Link}
                    />
                    {/* </Link> */}
                  </Grid>
                )}
            </Grid>
          </Grid>
          <Stack spacing={2} direction="row" sx={{ margin: 5 }}>
            <Button variant="outlined">
              <Link to="/products">Read More</Link>
            </Button>
          </Stack>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#1380c2", minHeight: 300 }} />
    </PageWrapper>
  );
};

export default Home;
