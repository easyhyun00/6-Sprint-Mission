import '@/styles/reset.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import TopNavigation from '@/components/common/TopNavigation';
import Container from '@/components/common/Container';
import { useRouter } from 'next/router';
import AuthContainer from '@/components/common/AuthContainer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const isAuthPage = pathname === '/signup' || pathname === '/login';

  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./images/favicon.png" />
      </Head>
      {isAuthPage ? (
        <>
          <AuthContainer>
            <Component {...pageProps} />
          </AuthContainer>
        </>
      ) : (
        <>
          <TopNavigation />
          <Container>
            <Component {...pageProps} />
          </Container>
        </>
      )}
    </>
  );
}
