import React, { useEffect, ComponentType, FC } from 'react';
import { useRouter } from 'next/router';
import { STORAGE_KEYS } from '@/constants/storageKey';

const withAuthRedirect = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const WithAuthRedirect: FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
      if (accessToken) {
        router.push('/');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirect;
};

export default withAuthRedirect;
