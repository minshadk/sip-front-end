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

const productService = {
  createProduct,
  getAllProduct,
  getProductById
};

export default productService;
