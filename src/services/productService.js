import BackendServices from "./BackendServices";

const createProduct = async (data) => {
  return BackendServices.post("product/", data);
};

const getAllProduct = async () => {
  return BackendServices.get("product");
};

const getProductById = async (id) => {
  return BackendServices.get(`product/${id}`);
};

const orderProduct = async (data) => {
  return BackendServices.post("productOrder/", data);
};

const getAllProductOrder = async () => {
  return BackendServices.get("productOrder");
};

const productService = {
  createProduct,
  getAllProduct,
  getProductById,
  orderProduct,
  getAllProductOrder
};

export default productService;
