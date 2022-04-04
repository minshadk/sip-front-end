import { useState, useEffect } from "react";
import axios from "axios";
import FormWrapper from "../utils/FormWrapper";

import { Button, Typography, Grid, Card, Box } from "@mui/material";
import TextInput from "../utils/Inputs/TextInput";
import SubmitButton from "../utils/Button/SubmitButton";

export default function SingUp() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const baseURL = "http://localhost:3001/user";

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const handleSubmit = async () => {
    const userData = {
      userName,
      email,
      password
    };
    axios
      .post(baseURL, 
        userData
      )
      .then((response) => {
        console.log(response);
        // setPost(response.data);
      });
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
          Sign Up
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <TextInput
              name="userName"
              label="User name"
              textValue={userName}
              setTextValue={setUserName}
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
              name="password"
              label="Password"
              textValue={password}
              setTextValue={setPassword}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            {/* <SubmitButton onClick={(e) => console.log("button clicked")}>
              Submit
            </SubmitButton> */}
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* </Card> */}
    </FormWrapper>
  );
}
