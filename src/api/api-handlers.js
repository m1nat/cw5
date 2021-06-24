import firebase from "firebase/app";
import axios from "axios";

import { FIREBASE_CONFIG, databaseURL, authURL } from "./api-config.js";

require('firebase/auth');

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
};

const header = {
  "Content-Type": "application/json",
};

export const createPost = (post) => {
  const { userId, name, email, date, title, content } = post;
  return fetch(`${databaseURL}/posts.json`, {
    method: "POST",
    header,
    body: JSON.stringify({
      userId,
      name,
      email,
      date,
      title,
      content,
    }),
  });
};

export const getPosts = () => {
  return fetch(`${databaseURL}/posts.json`, { header })
  .then( response => response.json() )
  .then( result => {
    const transformedPostsArray = Object.keys(result).map( key => ({
      ...result[key],
      id: key
    }))
    return transformedPostsArray
  })
};

export const signIn = () => {
  return axios.post(authURL, {
    email: 'test@mail.com',
    password: '1111111',
    returnSecureToken: true
  })
  .then( response => response )
  .catch(err => console.log(err));
}

initApi();