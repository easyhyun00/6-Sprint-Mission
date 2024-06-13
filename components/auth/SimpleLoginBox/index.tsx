import React from 'react';
import style from './style.module.scss';
import Link from 'next/link';
import GoogleLogo from '@/public/svgs/google-logo.svg';
import KakaoLogo from '@/public/svgs/kakao-logo.svg';

const SimpleLoginBox = () => {
  return (
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
  );
};

export default SimpleLoginBox;
