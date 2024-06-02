import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const manifestUrl = "https://ton-music.vercel.app/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SDKProvider acceptCustomStyles>
    <BrowserRouter>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
      </TonConnectUIProvider>
    </BrowserRouter>
  </SDKProvider>
);
