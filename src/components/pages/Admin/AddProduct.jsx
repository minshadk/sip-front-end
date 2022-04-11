import { useState } from "react";
import axios from "axios";

// import { PageWrapper } from "../utils/PageWrapper";
import { Typography, Grid, Card, Box, Button } from "@mui/material";

import FormWrapper from "../../utils/FormWrapper";
import TextInput from "../../utils/Inputs/TextInput";
import ImageUpload from "../../utils/Inputs/ImageUpload";

import productService from "../../../services/productService";

export default function AddProduct() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [minOrder, setMinOrder] = useState();
  const baseURL = "http://localhost:3001/product";

  const handleSubmit = async () => {
    const data = {
      name,
      description,
      minOrder
    };

    await productService.createProduct(data)

    // axios.post(baseURL, data).then((response) => {
    //   console.log(response);
    //   // setPost(response.data);
    // });
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
          Add Product
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          rowSpacing={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <ImageUpload />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="name"
              label="Name"
              textValue={name}
              setTextValue={setName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="description"
              label="Description"
              textValue={description}
              setTextValue={setDescription}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="minOrder"
              label="Min order"
              textValue={minOrder}
              setTextValue={setMinOrder}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* </Card> */}
    </FormWrapper>
  );
}
