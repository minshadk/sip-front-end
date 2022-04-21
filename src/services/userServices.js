import BackendServices from "./BackendServices";

const loginService = async (data) => {
  return BackendServices.post("user/login/", data);
};

const userServices = {
  loginService
};

export default userServices;
