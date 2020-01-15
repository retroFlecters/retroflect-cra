import axios from "axios";
const baseUrl = "https://retroflect.herokuapp.com/api/";

const signIn = async signInCredentials => {
  const res = await axios.post(baseUrl + "auth/signin", signInCredentials, {
    withCredentials: true
  });
  return res;
};

const signUp = async signUpCredentials => {
  const res = await axios.post(baseUrl + "auth/signup", signUpCredentials, {
    withCredentials: true
  });
  return res;
};

const signOut = async () => {
  const res = await axios.get(baseUrl + "auth/signout", {
    withCredentials: true
  });
  return res;
};

export default { signIn, signUp, signOut };
