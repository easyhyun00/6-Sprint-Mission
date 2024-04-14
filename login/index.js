import {
  handleEmailValid,
  handlePasswordValid,
  handleLoginButtonState,
} from '/utils/formValid.js';
import togglePasswordVisible from '/utils/passwordVisible.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const loginButton = document.querySelector('.form-button');

const visibleIcon = document.querySelector('.visible-icon');

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
});

emailInput.addEventListener('input', () => {
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});

passwordInput.addEventListener('input', () => {
  handleLoginButtonState(loginButton, emailInput, passwordInput);
});

visibleIcon.addEventListener('click', () => {
  togglePasswordVisible(passwordInput, visibleIcon);
});
