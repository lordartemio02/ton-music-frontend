import { TonConnectButton } from "@tonconnect/ui-react";
import ControlMusicPanel from "./components/ControlMusicPanel";

function App() {
  return (
    <>
      <div>
        <TonConnectButton />
        <div className="fixed bottom-0 left-0 w-full">
          <ControlMusicPanel
            name="Apache"
            artist="Bvrnout"
            src="https://s1.playi.net/files/mp3/vivienne_mort_-_chas_playi.net_128.mp3"
            img="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY"
          />
        </div>
      </div>
    </>
  );
}

export default App;
