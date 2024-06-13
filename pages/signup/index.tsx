import React, { useState, useEffect } from 'react';
import Button from '@/components/common/Button';
import style from './style.module.scss';
import AlreadyText from '@/components/auth/AlreadyText';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import { useForm } from 'react-hook-form';
import AuthFormInput from '@/components/auth/AuthFormInput';
import {
  handleBlurEmail,
  handleBlurNickname,
  handleBlurPassword,
  handleBlurConfirmPassword,
} from './formUtils';
import ErrorMessage from '@/components/auth/ErrorMessage';
import { postSignUp } from '@/apis/auth/postSignUp';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import { STORAGE_KEYS } from '@/constants/storageKey';

export type SignUpInput = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: SignUpInput) => {
    try {
      setIsLoading(true);
      await postSignUp(data);
      router.push('/login');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
    if (accessToken) {
      router.push('/');
    }
  }, [router]);

  return (
    <main>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <AuthFormInput
          label="이메일"
          id="email"
          placeholder="이메일을 입력해주세요"
          type="email"
          error={!!errors.email}
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          onBlur={(e) => handleBlurEmail(e, setError, clearErrors)}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <AuthFormInput
          label="닉네임"
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          error={!!errors.nickname}
          {...register('nickname', { required: true })}
          onBlur={(e) => handleBlurNickname(e, setError, clearErrors)}
        />
        {errors.nickname && <ErrorMessage message={errors.nickname.message} />}
        <AuthFormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.password}
          {...register('password', { required: true, minLength: 8 })}
          onBlur={(e) => handleBlurPassword(e, setError, clearErrors)}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
        <AuthFormInput
          label="비밀번호 확인"
          id="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.passwordConfirmation}
          {...register('passwordConfirmation', {
            required: true,
            minLength: 8,
            validate: (value) => value === getValues('password'),
          })}
          onBlur={(e) =>
            handleBlurConfirmPassword(
              e,
              setError,
              clearErrors,
              getValues('password')
            )
          }
        />
        {errors.passwordConfirmation && (
          <ErrorMessage message={errors.passwordConfirmation.message} />
        )}
        <Button rounded type="submit" disabled={!isValid || isLoading}>
          {isLoading ? <LoadingSpinner width={50} height={50} /> : '회원가입'}
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="로그인" />
    </main>
  );
};

export default SignUp;
