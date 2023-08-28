import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular",

  params: {
    api_key: "b89dcbd1fb01845e9973076c8234c531",
  },
});

export default axiosInstance;
