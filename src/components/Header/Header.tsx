import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { formatMoney } from "../../utils";
import Avatar from "../Avatar";

const Header: FC = () => {
  const money = useAppSelector((state) => state.clicker.money);
  const miningRatePerHour = useAppSelector(
    (state) => state.clicker.miningRatePerHour
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[9px] rounded-[26px] text-white bg-[#212121] p-1 font-bold">
        <Avatar />
        <div>TONM</div>
        <div className="mr-2">{formatMoney(Math.round(money || 0))}</div>
      </div>
      <div className="rounded-[30px] bg-buttonColor flex flex-col items-center justify-center text-white text-caption2-regular px-6 py-1">
        <span>Mining per hour</span>
        <span>+{formatMoney(Math.round(miningRatePerHour || 0))}</span>
      </div>
      {/* <ConnectWallet /> */}
    </div>
  );
};

export default Header;
