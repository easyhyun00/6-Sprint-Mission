import React from 'react';
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

type SignUpInput = {
  email: string;
  nickname: string;
  password: string;
};

const SignUp = () => {
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
      passwordCheck: '',
    },
  });

  const onSubmit = (data: SignUpInput) => {
    console.log('제출', data);
  };

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
            pattern: /^[^s@]+@[^s@]+.[^s@]+$/,
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
          error={!!errors.password}
          {...register('password', { required: true, minLength: 8 })}
          onBlur={(e) => handleBlurPassword(e, setError, clearErrors)}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
        <AuthFormInput
          label="비밀번호 확인"
          id="passwordCheck"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          type="password"
          error={!!errors.passwordCheck}
          {...register('passwordCheck', {
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
        {errors.passwordCheck && (
          <ErrorMessage message={errors.passwordCheck.message} />
        )}
        <Button rounded type="submit" disabled={!isValid}>
          회원가입
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="로그인" />
    </main>
  );
};

export default SignUp;
