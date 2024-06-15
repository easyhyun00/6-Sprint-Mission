import React, { useState } from 'react';
import FormInput from '@/components/common/FormInput';
import style from './style.module.scss';
import Button from '@/components/common/Button';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import AuthSwitchPrompt from '@/components/auth/AuthSwitchPrompt';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/auth/ErrorMessage';
import { useRouter } from 'next/router';
import { signIn } from '@/apis/auth/signIn';
import { STORAGE_KEYS } from '@/constants/storageKey';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import { LoginFormData } from '@/types/auth';
import { EMAIL_PATTERN, PW_MIN_LEN } from '@/constants/authForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import withAuthRedirect from '@/hoc/withAuthRedirect';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({ mode: 'onBlur' });
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const res = await signIn(data);
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

  return (
    <main>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="이메일"
          id="email"
          placeholder="이메일을 입력해주세요"
          type="email"
          error={!!errors.email}
          {...register('email', {
            required: ERROR_MESSAGE.emailRequired,
            pattern: {
              value: EMAIL_PATTERN,
              message: ERROR_MESSAGE.invalidEmail,
            },
          })}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <FormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.password}
          {...register('password', {
            required: ERROR_MESSAGE.passwordRequired,
            minLength: {
              value: PW_MIN_LEN,
              message: ERROR_MESSAGE.passwordLength(PW_MIN_LEN),
            },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}

        <Button rounded type="submit" disabled={!isValid || isLoading}>
          {isLoading ? <LoadingSpinner width={50} height={50} /> : '로그인'}
        </Button>
      </form>
      <SimpleLoginBox />
      <AuthSwitchPrompt type="회원가입" />
    </main>
  );
};

export default withAuthRedirect(Login);
