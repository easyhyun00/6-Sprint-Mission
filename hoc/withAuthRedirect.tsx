import React, { useEffect, ComponentType, FC, useState } from 'react';
import { useRouter } from 'next/router';
import { STORAGE_KEYS } from '@/constants/storageKey';
import LoadingSpinner from '@/public/svgs/spinner.svg';

const withAuthRedirect = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const WithAuthRedirect: FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
      if (accessToken) {
        router.push('/');
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }, [router]);

    if (loading) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}
        >
          <LoadingSpinner width="200px" height="200px" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirect;
};

export default withAuthRedirect;
