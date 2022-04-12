import BackendServices from "./BackendServices";

// create a new teacher
const createProduct = async (data) => {
  return BackendServices.post("product/",  data );
};

const getAllProduct = async (data) => {
  return BackendServices.get("product")
}

const productService = {
  createProduct,
  getAllProduct
};

export default productService;
