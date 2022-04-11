import axios from "axios";

const baseURL = "http://localhost:3001/";

//post request
const post = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  const response = await axios.post(
    url,
    data
    //   _generateParams(headers, params)
  );

  return response.data;
};

const BackendService = {
  // get,
  post
  // patch,
  // destroy,
};

export default BackendService;
