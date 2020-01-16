const setUser = user => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  let user = localStorage.getItem("user");
  return JSON.parse(user);
};

const removeUser = () => {
  localStorage.removeItem("user");
};

export default { setUser, getUser, removeUser };
