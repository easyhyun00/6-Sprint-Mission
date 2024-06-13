import Link from 'next/link';
import React from 'react';
import FormInput from '@/components/addboard/FormInput';
import Button from '@/components/common/Button';
import style from './style.module.scss';
import AlreadyText from '@/components/auth/AlreadyText';
import SimpleLoginBox from '@/components/auth/SimpleLoginBox';

const SignUp = () => {
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
          label="닉네임"
          id="nickname"
          placeholder="닉네임을 입력해주세요"
        />
        <FormInput
          label="비밀번호"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        <FormInput
          label="비밀번호 확인"
          id="password check"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          type="password"
        />
        <Button rounded disabled>
          회원가입
        </Button>
      </form>
      <SimpleLoginBox />
      <AlreadyText type="로그인" />
    </main>
  );
};

export default SignUp;
