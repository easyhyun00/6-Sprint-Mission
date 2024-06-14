import React, { useState } from 'react';
import AuthFormInput from '@/components/auth/AuthFormInput';
import style from './style.module.scss';
import Button from '@/components/common/Button';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import AlreadyText from '@/components/auth/AlreadyText';
import { useForm } from 'react-hook-form';
import { handleBlurEmail, handleBlurPassword } from '@/utils/formValid';
import ErrorMessage from '@/components/auth/ErrorMessage';
import { useRouter } from 'next/router';
import { postSignIn } from '@/apis/auth/postSignIn';
import { STORAGE_KEYS } from '@/constants/storageKey';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { LoginInput } from '@/types/auth';
import { EMAIL_PATTERN, PW_MIN_LEN } from '@/constants/authForm';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<LoginInput>();
  const router = useRouter();

  const onSubmit = async (data: LoginInput) => {
    try {
      setIsLoading(true);
      const res = await postSignIn(data);
      localStorage.setItem(STORAGE_KEYS.accessToken, res.accessToken);
      localStorage.setItem(STORAGE_KEYS.refreshToken, res.refreshToken);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useAuthRedirect();

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
            pattern: EMAIL_PATTERN,
          })}
          onBlur={(e) => handleBlurEmail(e, setError, clearErrors)}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <AuthFormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.password}
          {...register('password', { required: true, minLength: PW_MIN_LEN })}
          onBlur={(e) => handleBlurPassword(e, setError, clearErrors)}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}

        <Button rounded type="submit" disabled={!isValid || isLoading}>
          {isLoading ? <LoadingSpinner width={50} height={50} /> : '로그인'}
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="회원가입" />
    </main>
  );
};

export default Login;
