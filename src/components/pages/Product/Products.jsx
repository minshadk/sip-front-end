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
import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

export default function Products() {
  const [products, setProduct] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      console.log("call backedn serives");
      const response = await productService.getAllProduct();
      setProduct(response.data.products);
    };
    callBackendServices();
  }, []);
  console.log(products);
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
            Our Products are crafted with love
          </Typography>
        </Box> */}
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Handmade products are great for the environment. Most handmade
              products do not require a factory or large production facility.
              Instead, nearly all are made in s people’s own homes.
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Handmade is often very local, so it doesn’t travel hundreds and
              thousands of miles to get to you. When you order from this site ,
              you know that your handmade order is coming from nearby and it’s
              made nearby your location too. When you buy a product from site
              you are directly support a poor family. When you buy a product
              it’s not just about money. Each purchase, gives the artist, the
              maker, the crafts person a confidence in their product, chance to
              develop their skills further and for their economic stability.
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
                    products.map((product, index) => (
                      <Grid item xs={12} sm={4} md={4} lg={4} >
                        <Link to={`/product/${product._id}`} style={{textDecoration:"none"}}>
                          <EventsCard
                            title={product.name}
                            imageUrl={product.image}
                            description={product.description}
                            // component={Link}
                          />
                        </Link>
                      </Grid>
                    ))}
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
