import React from 'react';
import AuthFormInput from '@/components/auth/AuthFormInput';
import style from './style.module.scss';
import Button from '@/components/common/Button';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import AlreadyText from '@/components/auth/AlreadyText';
import { useForm } from 'react-hook-form';
import { handleBlurEmail, handleBlurPassword } from '../signup/formUtils';
import ErrorMessage from '@/components/auth/ErrorMessage';

type LoginInput = {
  email: string;
  password: string;
};

const Login = () => {
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
      password: '',
    },
  });

  const onSubmit = (data: LoginInput) => {
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
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          error={!!errors.password}
          {...register('password', { required: true, minLength: 8 })}
          onBlur={(e) => handleBlurPassword(e, setError, clearErrors)}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
        <Button rounded type="submit" disabled={!isValid}>
          로그인
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="회원가입" />
    </main>
  );
};

export default Login;
