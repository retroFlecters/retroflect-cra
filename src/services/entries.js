import axios from "axios";
const baseUrl = "https://retroflect.herokuapp.com/api";

const getAll = async () => {
  const res = await axios.get(baseUrl + "/entries", {
    withCredentials: true
  });
  return res;
};

const create = async entry => {
  const res = await axios.post(baseUrl + "/entries", entry, {
    withCredentials: true
  });
  return res;
};

export default { getAll, create };
