import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";

import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

// Importing backend services
import productService from "../../../services/productService";

export default function Product() {
  let { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();

  useEffect(() => {
    console.log("it the curretn page");
    const callBackendServices = async () => {
      const response = await productService.getProductById(productId);
      console.log(response);
      setProduct(response.data.product);
    };

    callBackendServices();
  }, []);

  return (
    <PageWrapper>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={product && product.image}
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
          <Typography>
            {product && product.minOrder}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/buyProduct/${product && product._id}`);
            }}
          >
            Order Now
          </Button>
          {/* <Button variant="contained">
            <Link to={`/buyProduct/${product && product._id}`}>Buy Now</Link>
          </Button> */}
        </Stack>
        <Box>
          <Grid sx={{ fontSize: 30 }}>
            {product && product.name}
          </Grid>
          <Grid>
            {product && product.description}
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
}
