import Link from 'next/link';
import React from 'react';
import FormInput from '@/components/addboard/FormInput';
import Button from '@/components/common/Button';
import GoogleLogo from '@/public/svgs/google-logo.svg';
import KakaoLogo from '@/public/svgs/kakao-logo.svg';
import style from './style.module.scss';

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
      <section className={style.simple}>
        <span>간편 로그인하기</span>
        <div className={style.social}>
          <Link href="https://www.google.com/" target="_blank">
            <GoogleLogo />
          </Link>
          <Link href="https://www.google.com/" target="_blank">
            <KakaoLogo />
          </Link>
        </div>
      </section>
      <nav>
        <p className={style.already}>
          이미 회원이신가요? <Link href="/login">로그인</Link>
        </p>
      </nav>
    </main>
  );
};

export default SignUp;
