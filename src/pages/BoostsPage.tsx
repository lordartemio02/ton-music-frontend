import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { useInitData } from "@tma.js/sdk-react";
import { createElement, FC, useContext, useMemo } from "react";
import { EnergyIcon, MiningIcon, PowerIcon } from "../assets/icons";
import { useAppSelector } from "../hooks/useAppSelector";
import { SocketContext } from "../socket/socket";
import { getMiningRatePerHour } from "../utils/getMiningRate";

const BoostsPage: FC = () => {
  const socket = useContext(SocketContext);

  const initData = useInitData();

  const lvlBarEnergy = useAppSelector((state) => state.clicker.lvlBarEnergy);
  const lvlClick = useAppSelector((state) => state.clicker.lvlClick);
  const lvlMining = useAppSelector((state) => state.clicker.lvlMining);
  const money = useAppSelector((state) => state.clicker.money);
  const autoClickCost = useAppSelector(
    (state) => state.clicker.upgradeAutoClickCost
  );
  const upgradeClickCost = useAppSelector(
    (state) => state.clicker.upgradeClickCost
  );

  const boostList = useMemo(
    () => [
      {
        title: "Power",
        subtitle: `Add +${lvlClick} per click`,
        description: `+${lvlClick + 1} per click when increasing the level`,
        level: lvlClick,
        boost: upgradeClickCost,
        icon: PowerIcon,
        onClick: () => {
          socket?.emit("buyBoostTap", {
            telegramId: initData?.user?.id,
          });
        },
        disabled: upgradeClickCost > money,
      },
      {
        title: "Energy",
        subtitle: "Add +1 to energy",
        description: "+1 to energy when increasing the level",
        level: lvlBarEnergy,
        boost: "5 000",
        icon: EnergyIcon,
        onClick: () => {
          socket?.emit("buyBoostEnergyBar", {
            telegramId: initData?.user?.id,
          });
        },
      },
      {
        title: "Mining",
        subtitle: `Add +${Math.round(
          getMiningRatePerHour(lvlMining)
        )} per hour`,
        description: `+${Math.round(
          getMiningRatePerHour(lvlMining + 1)
        )} per hour when increasing the level`,
        level: lvlMining,
        boost: autoClickCost,
        icon: MiningIcon,
        onClick: () => {
          socket?.emit("buyBoostAutoTap", {
            telegramId: initData?.user?.id,
          });
        },
        disabled: autoClickCost > money,
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
              <div className="text-center relative text-white text-[17px] font-semibold py-[19px]">
                <span>{boost.title}</span>
              </div>
            }
            className="z-50 bg-[#2A2A2A]"
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
            }>
            <Placeholder>
              {createElement(boost.icon, { className: "w-[125px] h-[125px]" })}
              <div className="text-[17px] text-white">{boost.subtitle}</div>
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
              <Button
                disabled={boost.disabled}
                onClick={boost.onClick}
                className="w-full"
                size="l">
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
