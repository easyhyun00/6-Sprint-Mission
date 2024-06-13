import { FocusEvent } from 'react';

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    setError('email', {
      message: '이메일을 입력해주세요.',
    });
  } else if (!emailRegex.test(email)) {
    setError('email', {
      message: '유효한 이메일 주소를 입력해주세요.',
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
      message: '닉네임을 입력해주세요.',
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
      message: '비밀번호를 입력해주세요.',
    });
  } else if (password.length < 8) {
    setError('password', {
      message: '비밀번호를 8자 이상 입력해주세요.',
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
      message: '비밀번호가 일치하지 않습니다.',
    });
  } else {
    clearErrors('passwordConfirmation');
  }
};
