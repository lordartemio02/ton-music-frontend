import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { useInitData } from "@tma.js/sdk-react";
import { useTWAEvent } from "@tonsolutions/telemetree-react";
import { createElement, FC, useContext, useMemo } from "react";
import { EnergyIcon, MiningIcon, PowerIcon } from "../assets/icons";
import { useAppSelector } from "../hooks/useAppSelector";
import { SocketContext } from "../socket/socket";
import { formatMoney, formatNumber } from "../utils";
import { getMiningRatePerHour } from "../utils/getMiningRate";

const BoostsPage: FC = () => {
  const socket = useContext(SocketContext);

  const initData = useInitData();
  const eventBuilder = useTWAEvent();

  const lvlBarEnergy = useAppSelector((state) => state.clicker.lvlBarEnergy);
  const lvlRegenEnergy = useAppSelector(
    (state) => state.clicker.lvlRegenEnergy
  );
  const lvlClick = useAppSelector((state) => state.clicker.lvlClick);
  const lvlMining = useAppSelector((state) => state.clicker.lvlMining);
  const money = useAppSelector((state) => state.clicker.money);
  const energyCost = useAppSelector(
    (state) => state.clicker.upgradeEnergyPerSecondCost
  );
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
        boost: formatNumber(upgradeClickCost),
        icon: PowerIcon,
        onClick: () => {
          eventBuilder.track("Button Clicked", {
            label: "Buy power boost", // Additional info about the button
            category: "Power boost buy", // Categorize the event
          });
          socket?.emit("buyBoostTap", {
            telegramId: initData?.user?.id,
          });
        },
        disabled: upgradeClickCost > money,
      },
      {
        title: "Energy",
        subtitle: `Add +${lvlRegenEnergy} to energy`,
        description: `+${
          lvlRegenEnergy + 1
        } to energy when increasing the level`,
        level: lvlBarEnergy,
        boost: formatNumber(energyCost),
        icon: EnergyIcon,
        onClick: () => {
          eventBuilder.track("Button Clicked", {
            label: "Buy Energy boost", // Additional info about the button
            category: "Energy boost buy", // Categorize the event
          });
          socket?.emit("buyBoostEnergyRegeneration", {
            telegramId: initData?.user?.id,
          });
        },
      },
      {
        title: "Mining",
        subtitle: `Add +${formatMoney(
          getMiningRatePerHour(lvlMining)
        )} per hour`,
        description: `+${formatMoney(
          getMiningRatePerHour(lvlMining + 1)
        )} per hour when increasing the level`,
        level: lvlMining,
        boost: formatNumber(autoClickCost),
        icon: MiningIcon,
        onClick: () => {
          eventBuilder.track("Button Clicked", {
            label: "Buy mining boost", // Additional info about the button
            category: "Mining boost buy", // Categorize the event
          });
          socket?.emit("buyBoostAutoTap", {
            telegramId: initData?.user?.id,
          });
        },
        disabled: autoClickCost > money,
      },
    ],
    [lvlClick, lvlMining, initData?.user?.id, socket, lvlRegenEnergy]
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
            onOpenChange={() => {
              switch (boost.title) {
                case "Power":
                  eventBuilder.track("Button Clicked", {
                    label: "Open Power modal", // Additional info about the button
                    category: "Power boost", // Categorize the event
                  });
                  break;
                case "Energy":
                  eventBuilder.track("Button Clicked", {
                    label: "Open Energy modal", // Additional info about the button
                    category: "Energy boost", // Categorize the event
                  });
                  break;
                case "Mining":
                  eventBuilder.track("Button Clicked", {
                    label: "Open Mining modal", // Additional info about the button
                    category: "Mining boost", // Categorize the event
                  });
                  break;

                default:
                  break;
              }
            }}
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
