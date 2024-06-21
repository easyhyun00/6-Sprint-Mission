import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKey';

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.accessToken);
    if (token) setIsLogin(true);
  }, []);

  return isLogin;
};
