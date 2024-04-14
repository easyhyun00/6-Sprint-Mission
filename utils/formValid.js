import ERROR_MSG from '/constants/errorMessage.js';
import emailPattern from './emailValidPattern.js';

/**
 * 로그인 버튼 비활성화 / 활성화
 */
export const handleLoginButtonState = (buttonEl, emailEl, passwordEl) => {
  buttonEl.disabled =
    emailEl.classList.contains('error-input') ||
    passwordEl.classList.contains('error-input') ||
    emailEl.value === '' ||
    passwordEl.value.length < 8
      ? true
      : false;

  buttonEl.classList.toggle('active', !buttonEl.disabled);
};

/**
 * 회원가입 버튼 비활성화 / 활성화
 */
export const handleSignupButtonState = (
  buttonEl,
  emailEl,
  nicknameEl,
  passwordEl,
  pwdCheckEl
) => {
  buttonEl.disabled =
    emailEl.classList.contains('error-input') ||
    nicknameEl.classList.contains('error-input') ||
    passwordEl.classList.contains('error-input') ||
    pwdCheckEl.classList.contains('error-input') ||
    emailEl.value === '' ||
    nicknameEl.value === '' ||
    passwordEl.value.length < 8 ||
    passwordEl.value !== pwdCheckEl.value
      ? true
      : false;

  buttonEl.classList.toggle('active', !buttonEl.disabled);
};

/**
 * 이메일 유효성 검사
 */
export const handleEmailValid = (emailEl, errorEl) => {
  const isEmpty = emailEl.value === '';
  const isInvalidFormat = !emailPattern.test(emailEl.value);

  emailEl.classList.toggle('error-input', isEmpty || isInvalidFormat);
  errorEl.classList.toggle('hidden', !(isEmpty || isInvalidFormat));

  errorEl.textContent = isEmpty
    ? ERROR_MSG.emailEmpty
    : isInvalidFormat
    ? ERROR_MSG.emailFormat
    : '';
};

/**
 * 비밀번호 유효성 검사
 */
export const handlePasswordValid = (passwordEl, errorEl) => {
  const isEmpty = passwordEl.value === '';
  const isShort = passwordEl.value.length < 8;

  passwordEl.classList.toggle('error-input', isEmpty || isShort);
  errorEl.classList.toggle('hidden', !(isEmpty || isShort));

  errorEl.textContent = isEmpty
    ? ERROR_MSG.passwordEmpty
    : isShort
    ? ERROR_MSG.passwordLength
    : '';
};

/**
 * 닉네임 유효성 검사
 */
export const handleNicknameValid = (nicknameEl, errorEl) => {
  const isEmpty = nicknameEl.value === '';

  nicknameEl.classList.toggle('error-input', isEmpty);
  errorEl.classList.toggle('hidden', !isEmpty);

  errorEl.textContent = isEmpty ? ERROR_MSG.nicknameEmpty : '';
};

/**
 * 비밀번호 확인 유효성 검사
 */
export const handlePwdCheckValid = (passwordEl, pwdCheckEl, errorEl) => {
  const isMismatch = passwordEl.value !== pwdCheckEl.value;

  pwdCheckEl.classList.toggle('error-input', isMismatch);
  errorEl.classList.toggle('hidden', !isMismatch);

  errorEl.textContent = isMismatch ? ERROR_MSG.pwdMismatch : '';
};
