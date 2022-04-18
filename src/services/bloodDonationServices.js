import BackendServices from "./BackendServices";

const createBloodDonar = async (data) => {
  return BackendServices.post("bloodDonor/", data);
};

const bloodDonationServices = {
  createBloodDonar
};

export default bloodDonationServices;
