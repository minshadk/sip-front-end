import BackendServices from "./BackendServices";

// create a new teacher
const createService = async (data) => {
  return BackendServices.post("service/", data);
};

const getAllServices = async () => {
  return BackendServices.get("service");
};

const serviceServices = {
  createService,
  getAllServices
};

export default serviceServices;
