import { signIn } from '../../api/api-handlers.js'

export const signInHandler = () => {
  const signInForm = document.querySelector('.sign-in__form');

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signIn()
    .then(result => console.log(result))
  })
}
