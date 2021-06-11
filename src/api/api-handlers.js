import firebase from "firebase/app";
import { FIREBASE_CONFIG, databaseURL } from "./api-config.js";

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
};

const header = {
        "Content-Type": "application/json",
      },

// export const createUser = ({ username, age, creationDate }) => {
//   fetch(`${databaseURL}/users.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       age,
//       creationDate,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const getUsers = () => {
//   fetch(`${databaseURL}/users.json`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       const transormedUserArr = Object.keys(result).map((key) => ({
//         ...result[key],
//         id: key,
//       }));
//       console.log(transormedUserArr);
//     });
// };

// export const createTodo = ({ title, creationDate, author }) => {
//   fetch(`${databaseURL}/users.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title,
//       creationDate,
//       author,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const removeUser = () => {
//   fetch(`${databaseURL}/users/-MbgiLzIXEjaXxhZ59Oy.json`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// export const updateUser = () => {
//   fetch(`${databaseURL}/users/-Mbgk1AA_56XbEuHJ-YD.json`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: "Nastya",
//       age: 28,
//       creationDate: "fdsfds",
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

export const createPost = post => {
  const {userId, name, email, date, title, content} = post;
  fetch(
    `${databaseURL}/posts.json`, {
      method: 'POST',
      header,
      body: JSON.stringify({
        userId, 
        name, 
        email, 
        date, 
        title, 
        content
      })
    }
  )
}