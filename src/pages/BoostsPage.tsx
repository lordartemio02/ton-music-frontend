import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { useInitData } from "@tma.js/sdk-react";
import { createElement, FC, useContext, useMemo } from "react";
import { PowerIcon } from "../assets/icons";
import { useAppSelector } from "../hooks/useAppSelector";
import { SocketContext } from "../socket/socket";

const BoostsPage: FC = () => {
  const socket = useContext(SocketContext);

  const initData = useInitData();

  const lvlBarEnergy = useAppSelector((state) => state.clicker.lvlBarEnergy);
  const lvlClick = useAppSelector((state) => state.clicker.lvlClick);
  const lvlMining = useAppSelector((state) => state.clicker.lvlMining);

  const boostList = useMemo(
    () => [
      {
        title: "Power",
        subtitle: "Add +1 per click",
        description: "+1 per click when increasing the level",
        level: lvlClick,
        boost: "5 000",
        icon: PowerIcon,
        onClick: () => {
          socket?.emit("buyBoostTap", {
            telegramId: initData?.user?.id,
          });
        },
      },
      {
        title: "Energy",
        subtitle: "Add +1 to enegy",
        description: "+1 to energy when increasing the level",
        level: lvlBarEnergy,
        boost: "5 000",
        icon: PowerIcon,
        onClick: () => {
          socket?.emit("buyBoostEnergyBar", {
            telegramId: initData?.user?.id,
          });
        },
      },
      {
        title: "Mining",
        subtitle: "Add +1 per second",
        description: "+1 per second when increasing the level",
        level: lvlMining,
        boost: "5 000",
        icon: PowerIcon,
        onClick: () => {
          socket?.emit("buyBoostAutoTap", {
            telegramId: initData?.user?.id,
          });
        },
      },
    ],
    [lvlClick, lvlMining, lvlBarEnergy, initData?.user?.id, socket]
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        {boostList.map((boost, index) => (
          <Modal
            key={`boost-${index}`}
            header={
              <div className="text-center text-[--tgui--text_color] text-[17px] font-semibold py-[19px]">
                {boost.title}
              </div>
            }
            className="z-50"
            trigger={
              <div className="bg-[#383838] rounded-[14px] px-[14px] py-[10px] flex items-center justify-between gap-[14px]">
                <div className="flex items-center gap-[14px]">
                  {createElement(boost.icon)}
                  <div className="text-[13px]">
                    <div className="font-semibold">{boost.title}</div>
                    <div>Level {boost.level}</div>
                    <div className="uppercase text-[#007AFF]">
                      {boost.boost} TONM
                    </div>
                  </div>
                </div>
                <div className="text-[#55A6FF] text-[17px]">Boost</div>
              </div>
            }
          >
            <Placeholder>
              {createElement(boost.icon, { className: "w-[125px] h-[125px]" })}
              <div className="text-[17px]">{boost.subtitle}</div>
              <div className="text-[17px] text-[--tgui--hint_color]">
                {boost.description}
              </div>
              <div className="flex flex-col">
                <div className="text-center text-[#007AFF] text-[13px]">
                  {boost.boost} TONM
                </div>
                <div className="text-center text-[#007AFF] text-[13px]">
                  {boost.level} level
                </div>
              </div>
              <Button onClick={boost.onClick} className="w-full" size="l">
                Up
              </Button>
            </Placeholder>
          </Modal>
        ))}
      </div>
    </>
  );
};

export default BoostsPage;
