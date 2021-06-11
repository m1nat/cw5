import { initApi, createPost } from './api/api-handlers.js';
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "./styles/styles.scss";

const post_form = document.getElementById("post_form");
const title_input = document.getElementById("title_input");
const post_content = document.getElementById("post_content");
const postsContainer = document.querySelector(".main-content__posts");

const post = {
  userId: uuidv4(),
  name: "Vitaliy",
  email: "test@mail.com",
  date: moment().format(),
  title: null,
  content: null,
};

initApi();


post_form.addEventListener("submit", (event) => {
  postsContainer.innerHTML = null;
  event.preventDefault();
  post.title = title_input.value
  post.content = post_content.value
  createPost(post);
});

