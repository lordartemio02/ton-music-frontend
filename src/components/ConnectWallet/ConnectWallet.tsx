import { Button } from "@telegram-apps/telegram-ui";
import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { useTWAEvent } from "@tonsolutions/telemetree-react";
import { FC } from "react";

const ConnectWallet: FC = () => {
  const { open } = useTonConnectModal();
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const eventBuilder = useTWAEvent();

  const title = userFriendlyAddress ? userFriendlyAddress : "Connect Wallet";

  const handleWalletOpenOrClose = async () => {
    if (!userFriendlyAddress) {
      eventBuilder.track("Connect wallet", {
        label: "Connect wallet", // Additional info about the button
        category: "Wallet connect", // Categorize the event
      });
      return open();
    }
    return await tonConnectUI.disconnect();
  };

  return (
    <Button size="s" onClick={handleWalletOpenOrClose}>
      {title}
    </Button>
  );
};

export default ConnectWallet;
