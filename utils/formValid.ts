import { FocusEvent } from 'react';
import { EMAIL_PATTERN, PW_MIN_LEN } from '@/constants/authForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

type BlurHandler = (
  e: FocusEvent<HTMLInputElement>,
  setError: Function,
  clearErrors: Function,
  password?: string
) => void;

/**
 * 이메일 blur 유효성 검사
 * @param e
 * @param setError
 * @param clearErrors
 */
export const handleBlurEmail: BlurHandler = (e, setError, clearErrors) => {
  const email = e.target.value;
  const emailRegex = EMAIL_PATTERN;

  if (!email) {
    setError('email', {
      message: ERROR_MESSAGE.emailRequired,
    });
  } else if (!emailRegex.test(email)) {
    setError('email', {
      message: ERROR_MESSAGE.invalidEmail,
    });
  } else {
    clearErrors('email');
  }
};

/**
 * 닉네임 blur 유효성 검사
 * @param e
 * @param setError
 * @param clearErrors
 */
export const handleBlurNickname: BlurHandler = (e, setError, clearErrors) => {
  const nickname = e.target.value;

  if (!nickname) {
    setError('nickname', {
      message: ERROR_MESSAGE.nicknameRequired,
    });
  } else {
    clearErrors('nickname');
  }
};

/**
 * 비밀번호 blur 유효성 검사
 * @param e
 * @param setError
 * @param clearErrors
 */
export const handleBlurPassword: BlurHandler = (e, setError, clearErrors) => {
  const password = e.target.value;

  if (!password) {
    setError('password', {
      message: ERROR_MESSAGE.passwordRequired,
    });
  } else if (password.length < PW_MIN_LEN) {
    setError('password', {
      message: ERROR_MESSAGE.passwordLength(PW_MIN_LEN),
    });
  } else {
    clearErrors('password');
  }
};

/**
 * 비밀번호 확인 blur 유효성 검사
 * @param e
 * @param password
 * @param setError
 * @param clearErrors
 */
export const handleBlurConfirmPassword: BlurHandler = (
  e,
  setError,
  clearErrors,
  password
) => {
  const passwordConfirmation = e.target.value;

  if (passwordConfirmation !== password) {
    setError('passwordConfirmation', {
      message: ERROR_MESSAGE.passwordMismatch,
    });
  } else {
    clearErrors('passwordConfirmation');
  }
};
