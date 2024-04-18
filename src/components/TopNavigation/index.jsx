import React, { useState, useEffect } from 'react';
import pandaLogo from 'assets/logos/panda-logo.png';
import TextLogo from 'assets/logos/text-logo.png';
import { Link, useLocation, navigate } from 'react-router-dom';
import Button from 'components/Button';
import './style.css';

const TopNavigation = () => {
  const location = useLocation();
  const navigation = navigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="leftContainer">
        <Link to="/">
          <img src={isMobile ? TextLogo : pandaLogo} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul className="navBar">
            <li>
              <Link
                to="/board"
                className={location.pathname === '/board' ? 'activ-nav' : ''}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                to="/items"
                className={location.pathname === '/items' ? 'activ-nav' : ''}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Button title="로그인" onClick={() => navigation('/login')} />
    </header>
  );
};

export default TopNavigation;
