import { useState } from "react";

// import { PageWrapper } from "../utils/PageWrapper";
import { Typography, Grid, Card, Box ,Button} from "@mui/material";

import FormWrapper from "../../utils/FormWrapper";
import TextInput from "../../utils/Inputs/TextInput";
import ImageUpload from "../../utils/Inputs/ImageUpload";
export default function AddProduct() {

    const handleSubmit = () => {
        console.log("handel submit clicked")
    }
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [minOrder, setMinOrder] = useState();

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
              setTextValue={setDescription}
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
