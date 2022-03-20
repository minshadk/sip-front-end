import { Box, Container, Grid, Typography } from "@mui/material";

import { styled, Toolbar } from "@mui/material";

// Custom compoents
import AppNavBar from "../utils/Navigation/NavigationBar/AppNavBar";
import AppBar from "../utils/Navigation/NavigationBar/AppNavBar";
import ServicesCard from "../utils/Card/ServicesCard";
import { Test } from "../../Assets/Images/Test";

// Importing images
import HandsShakeImgae from "../../Assets/Images/handsshake.jpg";
import BloodDonateing from "../../Assets/Images/bloodtaking.jpg";
import HelpingOthers from "../../Assets/Images/helpingOthers.png";

export const ContentWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100vh"
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // background: "rgba(30,30,30)"
}));

const Home = () => {
  return (
    // Landing
    // <Box
    //   sx={{
    //     backgroundColor: "#ededed",
    //     height:"100vh"
    //   }}
    // >
    <ContentWrapper>
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
              sx={{
                maxWidth: 270,
                height: "100px"
              }}
            >
              <Box sx={{ maxHeight: 50 }}>
                <img src={HandsShakeImgae} height="500px" />
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
          sx={{ paddingTop: 8 }}
        >
          <Typography variant="h4">Our services</Typography>
          <Typography variant="h6" sx={{ paddingTop: 4 }}>
            We provide to you the best choiches for you. We provide you the
            necassary needs for your emergency . You can get hand from us at any
            time at any where
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ paddingTop: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <ServicesCard />
            </Grid>
          </Grid>
        </Grid>
        {/* Blood Donation */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <img src={BloodDonateing} height="600px" />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h4">
              why should we donate our blood ?
            </Typography>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Donating blood regularly is beneficial to prevent and reduce heart
              attacks and liver ailment. The risk of heart and liver related
              problem is caused by the iron overload in the body. Donating blood
              helps in maintaining the iron level in the body and thus reduce
              those risk.
            </Typography>
          </Grid>
        </Grid>
        {/* Helping others */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Typography variant="h4">Helping others</Typography>
            <Typography variant="h6" sx={{ paddingTop: 4 }}>
              Helping others improves social interaction, distracts people from
              their own problems, and improves self-esteem and competence.
              Physical Well-Being - helping others leads to increased social
              integration which allows people to lead more active lifestyles.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <img src={HelpingOthers} height="600px" />
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
};

export default Home;
