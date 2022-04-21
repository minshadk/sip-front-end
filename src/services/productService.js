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

// Product orders
const orderProduct = async (data) => {
  return BackendServices.post("productOrder/", data);
};

const getAllProductOrder = async () => {
  return BackendServices.get("productOrder");
};

const getProductOrderById = async (id) => {
  return BackendServices.get(`productOrder/${id}`);
};

const productService = {
  createProduct,
  getAllProduct,
  getProductById,
  orderProduct,
  getAllProductOrder,
  getProductOrderById
};

export default productService;
