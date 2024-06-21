import React, { useState } from 'react';
import Button from '@/components/common/Button';
import style from './style.module.scss';
import AuthSwitchPrompt from '@/components/auth/AuthSwitchPrompt';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/common/FormInput';
import ErrorMessage from '@/components/auth/ErrorMessage';
import { signUp } from '@/apis/auth/signUp';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import { SignUpFormData } from '@/types/auth';
import { EMAIL_PATTERN, PW_MIN_LEN } from '@/constants/authForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import withAuthRedirect from '@/hoc/withAuthRedirect';

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
          label="닉네임"
          id="nickname"
          placeholder="닉네임을 입력해주세요"
          error={!!errors.nickname}
          {...register('nickname', {
            required: ERROR_MESSAGE.nicknameRequired,
          })}
        />
        {errors.nickname && <ErrorMessage message={errors.nickname.message} />}

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

        <FormInput
          label="비밀번호 확인"
          id="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          type="password"
          autoComplete="new-password"
          error={!!errors.passwordConfirmation}
          {...register('passwordConfirmation', {
            required: ERROR_MESSAGE.passwordRequired,
            minLength: {
              value: PW_MIN_LEN,
              message: ERROR_MESSAGE.passwordLength(PW_MIN_LEN),
            },
            validate: (value) =>
              value === getValues('password') || ERROR_MESSAGE.passwordMismatch,
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
      <AuthSwitchPrompt type="로그인" />
    </main>
  );
};

export default withAuthRedirect(SignUp);
