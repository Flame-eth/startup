import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store);

  const activeChainId = ChainId.Goerli;
  return (
    <ThirdwebProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThirdwebProvider>
  );
}
