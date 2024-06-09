import { Button } from "@telegram-apps/telegram-ui";
import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { FC } from "react";

const ConnectWallet: FC = () => {
  const { open } = useTonConnectModal();
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();

  const title = userFriendlyAddress ? userFriendlyAddress : "Connect Wallet";

  const handleWalletOpenOrClose = async () => {
    if (!userFriendlyAddress) {
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
