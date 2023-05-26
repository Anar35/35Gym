import axios from "axios";
import { BASE_URL } from "./baseUrl";

//getAll
export const getAll = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL + `/gymabouts`;
  } else {
    URL = BASE_URL + `/gymabouts?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//get by id
export const getByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/gymabouts/${id}`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//delete
export const deleteAbout = (id) => {
  axios.delete(`${BASE_URL}/gymabouts/${id}`);
};

//post
export const postAbout = (payload) => {
  axios.post(`${BASE_URL}/gymabouts`, payload);
};
