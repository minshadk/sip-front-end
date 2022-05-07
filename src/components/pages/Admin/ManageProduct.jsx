import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";

// import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

// Importing backend services
import productService from "./../../../services/productService";

export default function ManageProduct() {
  let { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      console.log("call backedn serives");
      const response = await productService.getProductOrderById(orderId);
      console.log(response.data.order);
      setOrder(response.data.order);
    };
    callBackendServices();
  }, []);

  return (
    <PageWrapper>
      <Container maxWidth="md">
        <Box>
          <Grid sx={{ fontSize: 30 }}>
            Product Name : {order && order.product.name}
          </Grid>
          <Grid>Number of order</Grid>
          <Grid>
            {order && order.orderNumber}
          </Grid>
          <Grid>Delivery Address</Grid>
          <Grid>
            {order && order.deliveryAddress}
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{ marginY: 5 }}
          >
            <Button variant="contained">Set to in progress</Button>
            <Button variant="outlined">Set to delivered</Button>
          </Stack>
        </Box>
      </Container>
    </PageWrapper>
  );
}
