export const showFormErrorMessege = () => {
  const inputErrorTag = document.querySelector('.input-error');
  inputErrorTag.style.display = 'block';
};

export const hideFormErrorMessege = () => {
  const inputErrorTag = document.querySelector('.input-error');
  inputErrorTag.style.display = 'none';
};