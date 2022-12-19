import BaseLayout from "../components/BaseLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </PersistGate>
      </Provider>
    </>
  );
}
