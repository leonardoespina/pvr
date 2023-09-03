import axios from "axios";

//const controller = new AbortController();

/** if (accessToken) {
    accessToken = "adsasdasda4sd6a4sd646a4ds";
    console.log(accessToken);
  } */

const ls = localStorage;
let auth;
const token = JSON.parse(ls.getItem("token"));

auth = token.accessToken;

const apiAxios = async (url, { method, data }) => {
  return await axios({
    url,
    method,
    data,
    headers: { authorization: auth },
  });
};

export default apiAxios;
