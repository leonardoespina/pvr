import axios from "axios";

//const controller = new AbortController();

const apiAxios = async (url, { method, data }) => {
  return await axios({
    url,
    method,
    data,
    headers: { authorization: "adsasdasda4sd6a4sd646a4ds" },
  });
};

export default apiAxios;
