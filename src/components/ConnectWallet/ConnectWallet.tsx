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
    <button
      className="px-[10px] py-2 rounded-[30px] bg-[#007AFF] font-bold text-[13px] text-white max-w-[120px] truncate"
      onClick={handleWalletOpenOrClose}
    >
      {title}
    </button>
  );
};

export default ConnectWallet;
