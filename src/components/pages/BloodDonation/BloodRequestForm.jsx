import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Grid, Box, Button, Modal } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import SelectInput from "./../../utils/Inputs/SelectInput";

import FormWrapper from "../../utils/FormWrapper";
import Maps from "../../map/Maps";

// Importing backend services
import bloodRequestServices from "./../../../services/BloodRequestServices";

export default function BloodRequestForm() {
  const navigate = useNavigate();

  const [bloodGroup, setBloodGroup] = useState();
  const [patientName, setPatientName] = useState();
  const [cases, setCases] = useState();
  const [byStanderName, setByStanderName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [coordinates, setCoordinates] = useState();
  const [bloodRequest, setBloodRequest] = useState();

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

  const bloodGroups = ["O+", "O-", "A+", "A-", "AB+", "AB-", "B+", "B-"];

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
    };

    const response = await bloodRequestServices.createBloodRequest(data);
    await setBloodRequest(response.data.bloodRequest);
    console.log(response);
    console.log(response.data.bloodRequest);
    console.log(bloodRequest);
    navigate(`/bloodRequestResult/${bloodRequest._id}`);
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
            <SelectInput
              label="Blood Group"
              name="Blood Group"
              menuItems={bloodGroups}
              dropdownValue={bloodGroup}
              setDropdownValue={setBloodGroup}
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
              type={"number"}
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
