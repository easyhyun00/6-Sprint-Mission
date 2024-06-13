import React from 'react';
import FormInput from '@/components/addboard/FormInput';
import style from './style.module.scss';
import Button from '@/components/common/Button';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';
import AlreadyText from '@/components/auth/AlreadyText';

const Login = () => {
  return (
    <main>
      <form className={style.form}>
        <FormInput
          label="이메일"
          id="email"
          placeholder="이메일을 입력해주세요"
          type="email"
        />
        <FormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        <Button rounded disabled>
          로그인
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="회원가입" />
    </main>
  );
};

export default Login;
