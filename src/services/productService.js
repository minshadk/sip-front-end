import BackendServices from "./BackendServices";

// create a new teacher
const createProduct = async (data) => {
  return BackendServices.post("product/",  data );
};

const getAllProduct = async () => {
  return BackendServices.get("product")
}

const productService = {
  createProduct,
  getAllProduct
};

export default productService;
