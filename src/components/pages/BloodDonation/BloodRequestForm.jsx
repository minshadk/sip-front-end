import { useState } from "react";

import { Typography, Grid, Card, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";
import Maps from "../../map/Maps";

// Importing backend services
import bloodRequestServices from "./../../../services/BloodRequestServices";

export default function BloodRequestForm() {
  const [bloodGroup, setBloodGroup] = useState("test +");
  const [patientName, setPatientName] = useState();
  const [cases, setCases] = useState();
  const [byStanderName, setByStanderName] = useState();
  const [phoneNumber, setPhoneNumber] = useState(1231233232);
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

  const handleSubmit = async () => {
    console.log(coordinates);
    console.log("handle submit called");
    const data = {
      bloodGroup,
      patientName,
      cases,
      byStanderName,
      phoneNumber,

      location: { type: "Point", coordinates }

      //   "location": {
      //     "type": "Point",
      //     "coordinates": [
      //       coordinates
      //     ]
      // }
    };
    console.log(data);

    const response = await bloodRequestServices.createBloodRequest(data);
    console.log(response);
  };

  const handleCoordinates = coordinate => {
    console.log("handle coordinates called");
    setCoordinates(coordinate);
    console.log(coordinates);
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
          Blood Request
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
              name="bloodGroup"
              label="Blood Group"
              textValue={bloodGroup}
              setTextValue={setBloodGroup}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="patientName"
              label="Patient Name"
              textValue={patientName}
              setTextValue={setPatientName}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="cases"
              label="Case"
              textValue={cases}
              setTextValue={setCases}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="byStanderName"
              label="By Stander Name"
              textValue={byStanderName}
              setTextValue={setByStanderName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="phoneNumber"
              label="Bystander Phone Number"
              textValue={phoneNumber}
              setTextValue={setPhoneNumber}
            />
          </Grid>
     
          <Grid item xs={12} sm={12} md={12}>
            <Button onClick={handleOpen}>Set Location</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
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
