import { signIn } from '../../api/api-handlers.js';
import { setToken } from '../../shared/ls-service.js';
import { routs } from '../../shared/constants/routs.js';

export const signInHandler = () => {
  const signInForm = document.querySelector('.sign-in__form');

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signIn(email, password)
    .then( response => {
      if (response) {
        const { idToken: token } = response.data;
        setToken(token);
        window.location.href = routs.home;
      }
    })
  })
};
