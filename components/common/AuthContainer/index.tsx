import React from 'react';
import style from './style.module.scss';
import PandaLogo from '@/public/svgs/logo-bg.svg';
import Link from 'next/link';

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">
          <PandaLogo width={380} height={120} />
        </Link>
      </header>
      {children}
    </div>
  );
};

export default AuthContainer;
