import { useState } from "react";
import FormWrapper from "../utils/FormWrapper";

// import { PageWrapper } from "../utils/PageWrapper";
import { Typography, Grid, Card, Box } from "@mui/material";
import TextInput from "../utils/Inputs/TextInput";

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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
          Sing In
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
        </Grid>
      </Box>
      {/* </Card> */}
    </FormWrapper>
  );
}
