import { signIn } from "../../api/api-handlers.js";
import { setToken } from "../../shared/ls-service.js";
import { routs } from "../../shared/constants/routs.js";
import { passwordLengthValidator } from "../../shared/validators.js";
import { showFormErrorMessege, hideFormErrorMessege } from "../../shared/error-handlers.js";

export const signInHandler = () => {
  const signInForm = document.querySelector(".sign-in__form");
  const signInBtn = document.getElementById("signInBtn");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const inputError = document.querySelector(".input-error");

  const formFields = {
    email: {
      isValid: true,
    },
    password: {
      isValid: true,
    },
  };

  signInBtn.setAttribute("disabled", true);

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
    if (passwordLengthValidator(passwordInput.value)) {
      formFields.password.isValid = true
      hideFormErrorMessege()
    } else {
      // signInBtn.setAttribute("disabled", true);
    }
    checkFormValid()
  };

  passwordInput.onblur = () => {
    !passwordLengthValidator(passwordInput.value) ? showFormErrorMessege() : hideFormErrorMessege

  };

  const checkFormValid = () => {
    console.log('check');
    const isFormValid = Object.values(formFields).every( value => value.isValid );
    isFormValid ?  signInBtn.removeAttribute("disabled") : signInBtn.setAttribute("disabled", true);
  };

};
