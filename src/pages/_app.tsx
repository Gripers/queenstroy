import "@/styles/globals.scss";
import "@/styles/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modern-drawer/dist/index.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextNProgress from "nextjs-progressbar";

import { persistor, store } from "@/redux/store";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <NextNProgress color="#02b335" options={{ showSpinner: false }} />
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
