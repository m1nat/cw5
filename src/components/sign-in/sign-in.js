import { signIn } from "../../api/api-handlers.js";
import { setToken } from "../../shared/ls-service.js";
import { routs } from "../../shared/constants/routs.js";

export const signInHandler = () => {
  const signInForm = document.querySelector(".sign-in__form");
  const signInBtn = document.getElementById("signInBtn");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email")

  // signInBtn.setAttribute("disabled", true);

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    signIn(email, password).then((response) => {
      if (response) {
        const { idToken: token } = response.data;
        setToken(token);
        window.location.href = routs.home;
      }
    });
  });
  passwordInput.oninput = () => {
    const str = passwordInput.value;
    console.log(str.match(/^.{6,}$/));
  }
};
