import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Typography, Grid, Box, Button } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";

// Importing backend services
import productService from "../../../services/productService";

export default function BuyProduct() {
  let { productId } = useParams();
  const navigate = useNavigate();

  const [orderNumber, setOrderNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();

  const handleSubmit = async () => {
    console.log("handle submit called");
    const data = {
      product: {
        id: productId
      },
      orderNumber,
      phoneNumber,
      deliveryAddress
    };
    console.log(data);
    console.log("its hi");

    // await bloodDonationServices.createBloodDonar(data);
    const response = await productService.orderProduct(data);
    console.log(response);
  };

  return (
    <FormWrapper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{ marginTop: 10 }}
        >
          Order Product
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          //   direction="column"
          //   justifyContent="center"
          //   alignItems="center"
          spacing={2}
          rowSpacing={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="orderNumber"
              label="Order Number"
              textValue={orderNumber}
              setTextValue={setOrderNumber}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="phoneNumber"
              label="Phone Number"
              textValue={phoneNumber}
              setTextValue={setPhoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="deliveryAddress"
              label="Delivery Address"
              textValue={deliveryAddress}
              setTextValue={setDeliveryAddress}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Box>
    </FormWrapper>
  );
}
