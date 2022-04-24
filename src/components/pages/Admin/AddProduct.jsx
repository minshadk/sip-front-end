import { useState } from "react";
import { useNavigate } from "react-router-dom";


// import { PageWrapper } from "../utils/PageWrapper";
import { Typography, Grid, Card, Box, Button, Input } from "@mui/material";

import FormWrapper from "../../utils/FormWrapper";
import TextInput from "../../utils/Inputs/TextInput";
import ImageUpload from "../../utils/Inputs/ImageUpload";

import productService from "../../../services/productService";

export default function AddProduct() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [minOrder, setMinOrder] = useState();
  const [image,setImage] = useState();
  const [fileData,setFileData] = useState([])

  const baseURL = "http://localhost:3001/product";

  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setImage(target.value);
  };

  const handleSubmit = async () => {
    // const data = {
    //   name,
    //   description,
    //   minOrder
    // };

    const formData = new FormData()
    formData.append("name",name)
    formData.append("description",description)
    formData.append("minOrder",minOrder)
    formData.append("image",fileData)

    try {
      const res = await productService.createProduct(formData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    navigate(-1)
  };
  console.log(fileData)
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
            {/* <ImageUpload image={image} setImage={setImage} /> */}
            {/* <ImageUpload image={profileImage} setImage={setProfileImage} /> */}
            <label htmlFor="contained-button-file">
            <Input
              value={image}
              sx={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleFileChange}
            />
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              component="span"
            >
              Upload Image
            </Button>
          </label>

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
