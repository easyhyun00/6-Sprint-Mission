import Link from 'next/link';
import React from 'react';
import style from './style.module.scss';
import { useRouter } from 'next/router';
import cn from 'classnames';
import useIsMobile from '@/hooks/useIsMobile';
import ProfileIcon from '@/public/svgs/profile.svg';
import LogoBig from '@/public/svgs/logo-bg.svg';
import LogoSmall from '@/public/svgs/logo-sm.svg';

const TopNavigation = () => {
  const { pathname } = useRouter();
  const isMobile = useIsMobile();

  return (
    <header className={style.header}>
      <div className={style.left_header}>
        <Link href="/">{isMobile ? <LogoSmall /> : <LogoBig />}</Link>
        <nav>
          <ul className={style.nav}>
            <Link href="/boards">
              <li
                className={cn(style.nav_item, {
                  [style.active]: pathname === '/boards',
                })}
              >
                자유게시판
              </li>
            </Link>
            <Link href="/items">
              <li
                className={cn(style.nav_item, {
                  [style.active]: pathname === '/items',
                })}
              >
                중고마켓
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className={style.profile}>
        <ProfileIcon width="40" height="40" />
      </div>
    </header>
  );
};

export default TopNavigation;
