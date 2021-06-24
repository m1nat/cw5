import { routs, paths } from "./shared/constants/routs.js";
import { renderPosts, postFormHandler } from './dom-hanlers/posts-renderer';
import { signInHandler } from './components/sign-in/sign-in'
import "./styles/styles.scss";



window.onload = () => {

  const pathname = Object.values(paths).find( path => path === window.location.pathname );

  switch (pathname) {
    case paths.home:
      window.location.href = routs.sign_in;
      // renderPosts()
      // postFormHandler()
      break;
    case paths.sign_in:
      signInHandler()
      break;
    default:
      break;
  }
}