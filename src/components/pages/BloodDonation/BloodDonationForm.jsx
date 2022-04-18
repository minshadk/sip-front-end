import { useState } from "react";

import { Typography, Grid, Card, Box, Button } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";

// Importing backend services
import bloodDonationServices from "../../../services/bloodDonationServices";

// import bloodDonationServices from "../../../services/BloodDonation";
export default function BloodDonationForm() {
  const [name, setName] = useState();
  const [bloodGroup, setBloodGroup] = useState("test +");
  const [phoneNumber, setPhoneNumber] = useState(1231233232);
  const [email, setEmail] = useState("test@gmail.com");
  const [radius, setRadius] = useState(5);
  // const [location, setLocation] = useState();
  // const [coordinates, setCoordinates] = useState();

  // let coordinates = [24.685293233819948,67.6232181521163];
  let coordinates = parseInt(localStorage.getItem("coordinates"));

  console.log(coordinates);
  // if (coordinates) {
  // setCoordinates(coordinates);
  // }

  const handleSubmit = async () => {
    console.log("handle submit called");
    const data = {
      name,
      bloodGroup,
      phoneNumber,
      radius,

      location: { type: "Point", coordinates }
      //   "location": {
      //     "type": "Point",
      //     "coordinates": [
      //       coordinates
      //     ]
      // }
    };
    console.log(data);
    console.log("its hi");

    await bloodDonationServices.createBloodDonar(data);
  };

  console.log(coordinates);

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
          Blood Donation
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
              name="name"
              label="Name"
              textValue={name}
              setTextValue={setName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="bloodGroup"
              label="Blood Group"
              textValue={bloodGroup}
              setTextValue={setBloodGroup}
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
              name="email"
              label="Email"
              textValue={email}
              setTextValue={setEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="radius"
              label="Radius"
              textValue={radius}
              setTextValue={setRadius}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            {/* <TextInput
              name="location"
              label="Location"
              textValue={coordinates}
              setTextValue={setCoordinates}
            /> */}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="location"
              label="Location"
              textValue={location}
              setTextValue={setLocation}
            />
          </Grid> */}
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
