import Head from "next/head";
import NProgress from "nprogress";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/react";
import NextNProgress from "nextjs-progressbar";
import { I18nextProvider } from "react-i18next";
import { doc, getDoc, onAuthStateChanged } from "@firebase";
import { deleteCookie, getCookie } from "cookies-next";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import i18n from "../i18n";
import theme from "@theme";
import ThemeProvider from "@theme/ThemeProvider";
import createEmotionCache from "@theme/createEmotionCache";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";

const Layout = dynamic(() => import("@components/Layout"), { ssr: false });

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  NProgress.configure({ showSpinner: matches ? true : false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const usersRef = doc(`users/${authUser.uid}`);
        await getDoc(usersRef).then((res) => {
          setUserInLocalStorage(res.data());
        });

        router.replace(router.asPath);
      } else {
        deleteCookie("userId");
        localStorage.removeItem("userData");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const NEXT_LOCALE = getCookie("NEXT_LOCALE");
    i18n.changeLanguage(NEXT_LOCALE as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Poland 24</title>
        <meta
          name="description"
          content="Fast delivery of goods from Poland and the countries of the European Union to Ukraine"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NextNProgress height={2} color="#EA0C0C" />
        <ThemeProvider theme={theme} emotionCache={emotionCache}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </I18nextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
};

export default MyApp;
