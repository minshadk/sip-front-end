import { useState } from "react";
import {  useNavigate } from "react-router-dom";

import FormWrapper from "../utils/FormWrapper";

// import { PageWrapper } from "../utils/PageWrapper";
import { Typography, Grid, Card, Box, Button } from "@mui/material";
import TextInput from "../utils/Inputs/TextInput";

// Importing backend services
import userServices from "./../../services/userServices";

// export default function Login() {
//   return (
//     <PageWrapper>
//       <Grid
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ height: "100vh" }}
//       >
//         <Grid item>
//           <Typography>Login</Typography>
//         </Grid>
//       </Grid>
//     </PageWrapper>
//   );
// }

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const handleSubmit = async () => {
    const data = {
      email,
      password
    };

    const response = await userServices.loginService(data);
    setUser(response);
    // console.log(user.data.user.userType);

    if (user.status === "success") {
      localStorage.setItem("userId", user.data.user._id);

      if(user.data.user.userType === "user") {
        navigate("/home")
      }
      else{
        navigate("/admin")
      }
    }
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
          Login
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
