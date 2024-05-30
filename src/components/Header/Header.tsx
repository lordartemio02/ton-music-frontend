import { FC } from "react";
import Avatar from "../Avatar";
import ConnectWallet from "../ConnectWallet";

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[9px] rounded-[26px] text-white bg-[#212121] p-1 font-bold">
        <Avatar src="https://masterpiecer-images.s3.yandex.net/257c671e831c11eeb725baea8797b5f2:upscaled" />
        <div>TONM</div>
        <div className="mr-2">1000</div>
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;
