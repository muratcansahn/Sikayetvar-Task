import axios from "axios";
import { USERS_API_LINK } from "../constants";

export const getAllUsers = () => {
  return axios.get(USERS_API_LINK);
};

export const getUsersDetail = (id) => {
  return axios.get(`${USERS_API_LINK}/${id}`);
};
