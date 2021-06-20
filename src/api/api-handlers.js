import firebase from "firebase/app";
import { FIREBASE_CONFIG, databaseURL } from "./api-config.js";

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