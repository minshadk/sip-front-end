import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Grid, Typography } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";
import ServicesCard from "../../utils/Cards/ServicesCard";
import EventsCard from "../../utils/Cards/EventsCard";
import ImageCard from "../../utils/Cards/ImageCard";

// Importing backend services
import productService from "../../../services/productService";

// Importing images
import  HelpingOthers  from "../../../Assets/Images/helpingOthers.png";

export default function Products() {
  const [products, setProduct] = useState();
  
  
  useEffect(() => {
    const callBackendServices = async () => {
      console.log("call backedn serives");
      const response = await productService.getAllProduct();
      setProduct(response.data.products);
    };
    callBackendServices();
  },[])
  console.log(products)
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
                    <Link to={`/product/${product._id}`}>
                    <ImageCard
                      title={product.name}
                      description={product.description}
                      // component={Link}
                    />
                    </Link>
                  </Grid>
                )}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#1380c2", minHeight: 300 }}></Box>
    </PageWrapper>
  );
}
