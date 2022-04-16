import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

import { PageWrapper } from "../../utils/PageWrapper";

// Importing images
import HelpingOthers from "../../../Assets/Images/helpingOthers.png";

// Importing backend services
import serviceServices from "../../../services/serviceServices";

export default function Service() {
  let { serviceId } = useParams();
  console.log(serviceId);

  const [service, setService] = useState();

  useEffect(() => {
    const getServiceById = async () => {
      console.log("ITs hi");
      const response = await serviceServices.getServiceById(serviceId);
      setService(response.data.service);
    };

    getServiceById(serviceId);
  }, []);
  console.log(service);
  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={HelpingOthers}
            //   srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            //   alt={item.title}
            //   loading="lazy"
          />
        </Box>
        <Box>
          <Grid sx={{ fontSize: 30 }}>
            {service && service.name}
          </Grid>
          <Grid>
            {service && service.description}
          </Grid>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{ marginY: 5 }}
          >
            <Button variant="contained">Request Service</Button>
            {/* <Button variant="outlined">Delete</Button> */}
          </Stack>
        </Box>
      </Container>
    </PageWrapper>
  );
}
