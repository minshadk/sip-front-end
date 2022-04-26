import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  Card
} from "@mui/material";

//  Importing Custom Components
import { PageWrapper } from "../../utils/PageWrapper";

// Importing backend services
import bloodDonationServices from "./../../../services/bloodDonationServices";

export default function BloodRequestResult() {
  let { requestId } = useParams();

  const [bloodDonres, setBloodDonres] = useState([]);

  useEffect(() => {
    const callBackendServices = async () => {
      const response = await bloodDonationServices.findDonar(requestId);
      setBloodDonres(response.data.filteredDonorsByGroup);
      console.log(response);
    };
    callBackendServices();
  }, []);

  return (
    <PageWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4">
          Blood Donres are listed in Accending Order of distance
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8
        }}
      >
        {bloodDonres &&
          bloodDonres.map((bloodDonre, index) =>
            <Card
              sx={{ minWidth: 600, maxWidth: 700, padding: 2, marginTop: 3 }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Donare Name
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {bloodDonre && bloodDonre.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                  >
                     Phone Number
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    // color="text.secondary"
                    gutterBottom
                  >
                    {bloodDonre && bloodDonre.phoneNumber}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          )}
      </Box>
    </PageWrapper>
  );
}
