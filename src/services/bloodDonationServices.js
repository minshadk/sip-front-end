import BackendServices from "./BackendServices";

const createBloodDonar = async (data) => {
  return BackendServices.post("bloodDonor/", data);
};

const findDonar = async (id) => {
  return BackendServices.get(`bloodDonor/findDonare/${id}`);
};
const bloodDonationServices = {
  createBloodDonar,
  findDonar
};

export default bloodDonationServices;
