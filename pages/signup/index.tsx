import React, { useState } from 'react';
import Button from '@/components/common/Button';
import style from './style.module.scss';
import AlreadyText from '@/components/auth/AlreadyText';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import { useForm } from 'react-hook-form';
import AuthFormInput from '@/components/auth/AuthFormInput';
import ErrorMessage from '@/components/auth/ErrorMessage';
import { signUp } from '@/apis/auth/signUp';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { SignUpFormData } from '@/types/auth';
import { EMAIL_PATTERN, PW_MIN_LEN } from '@/constants/authForm';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({ mode: 'onBlur' });
  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setIsLoading(true);
      await signUp(data);
      router.push('/login');
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
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <AuthFormInput
          label="닉네임"
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          error={!!errors.nickname}
          {...register('nickname', { required: true })}
        />
        {errors.nickname && <ErrorMessage message={errors.nickname.message} />}

        <AuthFormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.password}
          {...register('password', { required: true, minLength: PW_MIN_LEN })}
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
            minLength: PW_MIN_LEN,
            validate: (value) => value === getValues('password'),
          })}
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
