import axios from "axios";

export const userServiceHost = "http://my-awesome-user-services.com";

export const login = async (username, password) => {
  console.log(`Sending login request for username: ${username}, passowrd: ******`);
  axios.post(`${userServiceHost}/login`, {
    username,
    password,
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
};

export const getUser = async (id) => {
  console.log(`Sending request to get user with ID: ${id}`);
  axios.get(
    `${userServiceHost}/user/${id}`
  ).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
};
