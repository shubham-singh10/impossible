import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@/utils';
import { MUIProvider } from '@/providers';
import 'slick-carousel/slick/slick.css';
import '@/styles/globals.css';
import '@/styles/react-slick.css';
import '@/styles/nprogress.css'; // Import the custom nprogress styles
import NProgress from 'nprogress'; // Import NProgress
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '@/interfaces/layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type AppPropsWithLayout = AppProps & {
  emotionCache: EmotionCache;
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();

  useEffect(() => {
    const handleStart = (): void => {
      NProgress.start();
      return;
    };

    const handleStop = (): void => {
      NProgress.done();
      return;
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Imposibleindia</title>
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </CacheProvider>
  );
};

export default App;
