import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { STORAGE_KEYS } from '@/constants/storageKey';

const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
    if (accessToken) {
      router.push('/');
    }
  }, [router]);
};

export default useAuthRedirect;
