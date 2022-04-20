import BackendServices from "./BackendServices";

const createBloodRequest = async (data) => {
  return BackendServices.post("bloodRequest/", data);
};

const bloodRequestServices = {
    createBloodRequest
};

export default bloodRequestServices;
