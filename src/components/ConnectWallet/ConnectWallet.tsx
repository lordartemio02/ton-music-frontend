import { useTonConnectModal } from "@tonconnect/ui-react";
import { FC } from "react";

const ConnectWallet: FC = () => {
  const { open } = useTonConnectModal();

  return (
    <button
      className="px-[10px] py-2 rounded-[30px] bg-[#007AFF] font-bold text-[13px] text-white"
      onClick={open}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
