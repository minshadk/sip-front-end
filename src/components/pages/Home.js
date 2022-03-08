import { Box, Container, Grid, Typography } from "@mui/material";
import AppNavBar from "../utils/NavigationBar/AppNavBar";
import AppBar from "../utils/NavigationBar/AppNavBar";

const Home = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              sx={{
                marginTop: 25,
                marginBottom: 25
              }}
            >
              we rise by liftng others
            </Typography>
            <Typography variant="h5">
              we are in a mission to help the helpless.this is the Best Way To
              Make A Difference In The Lives Of Others.help each other to bring
              back the smiles of others.lets make this network stronger by
              donating and giving the necassary needs to those who in needs it
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Box>
              <img src="https://thumbs.dreamstime.com/b/vector-helping-hands-illustration-silhouette-153771590.jpg" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
