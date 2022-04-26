import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Grid, Stack, Button } from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";
import AddButton from "../../utils/Button/AddButton";
import ServicesCard from "../../utils/Cards/ServicesCard";
import EventsCard from "./../../utils/Cards/EventsCard";
import ImageCard from "./../../utils/Cards/ImageCard";

import productService from "../../../services/productService";

export default function ProductAdmin() {
  const navigate = useNavigate();

  const [products, setProducts] = useState();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await productService.getAllProduct();
      setProducts(response.data.products);

      console.log(response);
    };

    getAllProducts();
    console.log(products);
    // console.log(products[1])
  }, []);
  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4">Manage products</Typography>
        {/* <AddButton path={"/addProduct"}>Add product</AddButton>
         */}
        <Button
          onClick={() => {
            navigate("/admin/addProduct");
          }}
        >
          Add Product
        </Button>
      </Stack>

      <Box>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3, lg: 15 }}
          sx={{ paddingTop: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products &&
            products.map((product, index) =>
              <Grid item xs={12} sm={6} md={3} lg={4}>
                <ImageCard
                  title={product.name}
                  description={product.description}
                  imageUrl={product.image}
                />
              </Grid>
            )}
        </Grid>
      </Box>
    </PageWrapper>
  );
}
