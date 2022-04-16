import BackendServices from "./BackendServices";

// create a new teacher
const createService = async (data) => {
  return BackendServices.post("service/", data);
};

const getAllServices = async () => {
  return BackendServices.get("service");
};

const getServiceById = async (id) => {
  return BackendServices.get(`service/${id}`);
};

const serviceServices = {
  createService,
  getAllServices,
  getServiceById
};

export default serviceServices;
