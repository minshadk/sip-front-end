import { Box, Container, Grid, Typography } from "@mui/material";

// Custom compoents
import AppNavBar from "../utils/Navigation/NavigationBar/AppNavBar";
import AppBar from "../utils/Navigation/NavigationBar/AppNavBar";
import ServicesCard from "./../utils/Navigation/Card/ServicesCard";

const Home = () => {
  return (
    // Landing
    <Box>
      <Container maxWidth="xl">
        <Box>
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
                Make A Difference In The Lives Of Others.help each other to
                bring back the smiles of others.lets make this network stronger
                by donating and giving the necassary needs to those who in needs
                it
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <img src="https://thumbs.dreamstime.com/b/vector-helping-hands-illustration-silhouette-153771590.jpg" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Our sevices */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Our services</Typography>
          <Typography variant="h6">
            We provide to you the best choiches for you. We provide you the
            necassary needs for your emergency . You can get hand from us at any
            time at any where
          </Typography>

          <Box>
            
            <ServicesCard />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
