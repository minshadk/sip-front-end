import { useState } from "react";

import { Typography, Grid, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";
import Maps from "../../map/Maps";

// Importing backend services
import bloodDonationServices from "../../../services/bloodDonationServices";

export default function BloodDonationForm() {
  const [name, setName] = useState();
  const [bloodGroup, setBloodGroup] = useState("test +");
  const [phoneNumber, setPhoneNumber] = useState(1231233232);
  const [email, setEmail] = useState("test@gmail.com");
  const [radius, setRadius] = useState(5);
  const [coordinates, setCoordinates] = useState();

  // Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(coordinates);
  console.log(localStorage.getItem("userId"));

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

  const handleCoordinates = coordinate => {
    console.log("handle coordinates called");
    setCoordinates(coordinate);
    console.log(coordinates);
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
          <Button onClick={handleOpen}>Set Location</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Box>
      {/* </Card> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Maps handleCoordinates={handleCoordinates} handleClose={handleClose} />
      </Modal>
    </FormWrapper>
  );
}
