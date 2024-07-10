import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import Avatar from "../Avatar";
import ConnectWallet from "../ConnectWallet";

const Header: FC = () => {
  const [money, setMoney] = useState(localStorage.getItem("money") || "0");
  const clicker = useAppSelector((state) => state.clicker);

  useEffect(() => {
    const getMoney = () => {
      const money = localStorage.getItem("money");
      if (money) {
        setMoney(money);
      }
    };

    window.addEventListener("storage", getMoney);

    return () => {
      window.removeEventListener("storage", getMoney);
    };
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[9px] rounded-[26px] text-white bg-[#212121] p-1 font-bold">
        <Avatar />
        <div>TONM</div>
        <div className="mr-2">{clicker.money}</div>
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;
