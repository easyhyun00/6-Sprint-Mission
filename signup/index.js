import {
  handleSignupButtonState,
  handleEmailValid,
  handleNicknameValid,
  handlePasswordValid,
  handlePwdCheckValid,
} from '/utils/formValid.js';
import togglePasswordVisible from '/utils/passwordVisible.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const nicknameInput = document.querySelector('#nickname');
const nicknameError = document.querySelector('#nickname-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const pwdCheckInput = document.querySelector('#password-check');
const pwdCheckError = document.querySelector('#password-check-error');

const signupButton = document.querySelector('.form-button');

const visibleIcon1 = document.querySelector('#password-visible');
const visibleIcon2 = document.querySelector('#password-check-visible');

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
});

nicknameInput.addEventListener('focusout', () => {
  handleNicknameValid(nicknameInput, nicknameError);
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
});

pwdCheckInput.addEventListener('focusout', () => {
  handlePwdCheckValid(passwordInput, pwdCheckInput, pwdCheckError);
});

emailInput.addEventListener('input', () => {
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

nicknameInput.addEventListener('input', () => {
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

passwordInput.addEventListener('input', () => {
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

pwdCheckInput.addEventListener('input', () => {
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

visibleIcon1.addEventListener('click', () => {
  togglePasswordVisible(passwordInput, visibleIcon1);
});

visibleIcon2.addEventListener('click', () => {
  togglePasswordVisible(pwdCheckInput, visibleIcon2);
});
