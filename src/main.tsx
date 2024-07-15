import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { AppRoot } from "@telegram-apps/telegram-ui";
import { TwaAnalyticsProvider } from "@tonsolutions/telemetree-react";
import "./index.css";

const manifestUrl = "https://ton-music.vercel.app/tonconnect-manifest.json";

const {
  VITE_APP_PROJECT_ID_ANALYTIC,
  VITE_APP_API_KEY_ANALYTIC,
  VITE_APP_APP_NAME_ANALYTIC,
} = import.meta.env;

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <SDKProvider acceptCustomStyles>
    <Provider store={store}>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <AppRoot>
            <TwaAnalyticsProvider
              apiKey={VITE_APP_API_KEY_ANALYTIC}
              appName={VITE_APP_APP_NAME_ANALYTIC}
              projectId={VITE_APP_PROJECT_ID_ANALYTIC}>
              <App />
            </TwaAnalyticsProvider>
          </AppRoot>
        </TonConnectUIProvider>
      </BrowserRouter>
    </Provider>
  </SDKProvider>
  // </StrictMode>
);
