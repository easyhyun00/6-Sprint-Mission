import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';

interface AlreadyTextProps {
  type: '로그인' | '회원가입';
}

const AlreadyText = ({ type }: AlreadyTextProps) => {
  return (
    <nav>
      {type === '로그인' ? (
        <p className={style.already}>
          이미 회원이신가요? <Link href="/login">로그인</Link>
        </p>
      ) : (
        <p className={style.already}>
          판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
        </p>
      )}
    </nav>
  );
};

export default AlreadyText;
