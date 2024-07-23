import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const http = axios.create({
  baseURL,
});

const getUsers = async () => {
  const res = await http.get("");
  return res.data;
};
const createUser = (body: unknown) => {
  return http.post("", body);
};
const editUser = (id: string) => (body: object) => {
  return http.post(`/${id}`, body);
};
const deleteUser = (id: string) => () => {
  return http.delete(`/${id}`);
};

export { getUsers, createUser, editUser, deleteUser };
