import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  Card
} from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";
import ServicesCard from "../../utils/Cards/ServicesCard";
import EventsCard from "../../utils/Cards/EventsCard";
import ImageCard from "../../utils/Cards/ImageCard";

// Importing backend services
import productService from "../../../services/productService";

export default function ProductOrder() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState();

  useEffect(() => {
    const callBackendServices = async () => {
      console.log("call backedn serives");
      const response = await productService.getAllProductOrder();
      // setProduct(response.data.products);
      setOrders(response.data.orders);
      console.log(orders);
    };
    callBackendServices();
  }, []);
  console.log(orders);

  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4"> Product Orders</Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8
        }}
      >
        {orders &&
          orders.map((order, index) =>
            <Card
              sx={{ minWidth: 600, maxWidth: 700, padding: 2, marginTop: 3 }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Prodcut Name
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {order && order.product.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Order Number
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {order && order.orderNumber}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {order && order.status}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    onClick={() => {
                      navigate(`/productOrder/${order.product.id}`);
                    }}
                  >
                    Manage Product
                  </Button>
                </Box>
              </Stack>
            </Card>
          )}
      </Box>
    </PageWrapper>
  );
}
