import {
  handleSignupButtonState,
  handleEmailValid,
  handleNicknameValid,
  handlePasswordValid,
  handlePwdCheckValid,
} from '/utils/formValid.js';

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const nicknameInput = document.querySelector('#nickname');
const nicknameError = document.querySelector('#nickname-error');

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

const pwdCheckInput = document.querySelector('#password-check');
const pwdCheckError = document.querySelector('#password-check-error');

const signupButton = document.querySelector('.form-button');

emailInput.addEventListener('focusout', () => {
  handleEmailValid(emailInput, emailError);
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

nicknameInput.addEventListener('focusout', () => {
  handleNicknameValid(nicknameInput, nicknameError);
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

passwordInput.addEventListener('focusout', () => {
  handlePasswordValid(passwordInput, passwordError);
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
});

pwdCheckInput.addEventListener('focusout', () => {
  handlePwdCheckValid(passwordInput, pwdCheckInput, pwdCheckError);
  handleSignupButtonState(
    signupButton,
    emailInput,
    nicknameInput,
    passwordInput,
    pwdCheckInput
  );
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
