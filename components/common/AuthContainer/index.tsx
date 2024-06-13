import React from 'react';
import style from './style.module.scss';
import PandaLogo from '@/public/svgs/logo-bg.svg';
import Link from 'next/link';
import useIsMobile from '@/hooks/useIsMobile';

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">
          <PandaLogo
            width={isMobile ? 198 : 396}
            height={isMobile ? 66 : 122}
          />
        </Link>
      </header>
      {children}
    </div>
  );
};

export default AuthContainer;
