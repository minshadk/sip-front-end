import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { PageWrapper } from "../../utils/PageWrapper";

import  HelpingOthers  from "../../../Assets/Images/helpingOthers.png";


//  Importing Custom Components
// import { PageWrapper } from "../utils/PageWrapper";

// Importing backend services
import productService from "../../../services/productService";

export default function Product() {
  let { productId } = useParams();

  const [product,setProduct] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      console.log("ITs hi");
      const response = await productService.getProductById(productId);
      setProduct(response.data.product);
    };

    callBackendServices()
  }, []);
  console.log(product)
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
          <Typography>{product && product.minOrder}</Typography>
          <Button variant="contained">Buy Now</Button>
        </Stack>
        <Box>
          <Grid sx={{ fontSize: 30 }}>{product && product.name}</Grid>
          <Grid>
          {product && product.description}
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
}
