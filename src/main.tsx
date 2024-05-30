import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const manifestUrl = "https://ton-music.vercel.app/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </BrowserRouter>
);
