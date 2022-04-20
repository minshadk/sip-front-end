import { useState } from "react";

import { Typography, Grid, Card, Box, Button } from "@mui/material";

// Importing Custom components
import TextInput from "../../utils/Inputs/TextInput";
import FormWrapper from "../../utils/FormWrapper";

// Importing backend services
import bloodRequestServices from "./../../../services/BloodRequestServices";

export default function BloodRequestForm() {
  const [bloodGroup, setBloodGroup] = useState("test +");
  const [patientName, setPatientName] = useState();
  const [cases, setCases] = useState();
  const [byStanderName, setByStanderName] = useState();
  const [phoneNumber, setPhoneNumber] = useState(1231233232);
  // const [location, setLocation] = useState();
  // const [coordinates, setCoordinates] = useState();

  // let coordinates = [24.685293233819948,67.6232181521163];
  // let coordinates = parseInt(localStorage.getItem("coordinates"));
  let coordinates = (localStorage.getItem("coordinates")) *1;
  console.log(parseInt(localStorage.getItem("coordinates")))

  // if (coordinates) {
  // setCoordinates(coordinates);
  // }

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

    await bloodRequestServices.createBloodRequest(data);
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
