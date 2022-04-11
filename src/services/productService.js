import BackendServices from "./BackendServices";

// create a new teacher
const createProduct = async (data) => {
  return BackendServices.post("product/",  data );
};

const productService = {
  createProduct
};

export default productService;
