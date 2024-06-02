import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";

const manifestUrl = "https://ton-music.vercel.app/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SDKProvider acceptCustomStyles>
    <Provider store={store}>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <App />
        </TonConnectUIProvider>
      </BrowserRouter>
    </Provider>
  </SDKProvider>
);
