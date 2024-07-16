import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { useInitData } from "@tma.js/sdk-react";
import { FC, useContext, useEffect } from "react";
import { PlayMoneySmallIcon } from "../../assets/icons";
import { useAppSelector } from "../../hooks/useAppSelector";
import { SocketContext } from "../../socket/socket";
import { calendarList, dailyList } from "./DailyTasks.config";

const DailyTasks: FC = () => {
  const socket = useContext(SocketContext);

  const initData = useInitData();

  const dailyRewardActualLevel = useAppSelector(
    (state) => state.clicker.dailyRewardActualLevel
  );
  const readyToPickup = useAppSelector((state) => state.clicker.readyToPickup);

  useEffect(() => {
    socket?.emit("checkDailyRewardStatus", {
      telegramId: initData?.user?.id,
    });
  }, [socket]);

  const onClickGet = () => {
    socket?.emit("getDailyReward", {
      telegramId: initData?.user?.id,
    });
    socket?.emit("checkDailyRewardStatus", {
      telegramId: initData?.user?.id,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-[17px] font-semibold">Daily tasks</div>
      {dailyList.map((earn, index) => (
        <Modal
          key={`earn-${index}`}
          header={
            <div className="text-center relative text-white text-[17px] font-semibold py-[19px]">
              {earn.title}
            </div>
          }
          className="z-50 bg-[#2A2A2A]"
          trigger={
            <div className="bg-[#383838] rounded-[14px] px-[14px] py-[10px] flex items-center justify-between gap-[14px]">
              <div className="flex items-center gap-[14px]">
                <earn.icon className="w-7 h-7" />
                <div className="text-[13px]">
                  <div className="font-semibold">{earn.title}</div>
                  <div className="uppercase text-[#007AFF]">
                    +{earn.boost} TONM
                  </div>
                </div>
              </div>
              <div className="text-[#55A6FF] text-[17px]">Get</div>
            </div>
          }>
          <Placeholder>
            <earn.icon />
            <div className="text-[17px] text-white">{earn.subtitle}</div>
            <div className="text-[17px] text-[--tgui--hint_color] text-center">
              {earn.description}
            </div>

            <div className="flex gap-1 flex-wrap justify-center items-center max-w-[276px]">
              {calendarList.map(({ day, count }, index) => (
                <div
                  key={`calendar-${index}`}
                  className={`flex flex-col justify-center items-center py-1 w-[66px] rounded-md text-[13px] ${
                    dailyRewardActualLevel > index + 1
                      ? "bg-[#31D158]"
                      : "bg-[#007AFF]"
                  }`}>
                  <div className="text-white">Day {day}</div>
                  <PlayMoneySmallIcon />
                  <div className="font-bold text-white uppercase">{count}</div>
                </div>
              ))}
            </div>

            <Button
              onClick={onClickGet}
              className="w-full"
              size="l"
              disabled={!readyToPickup}>
              {readyToPickup ? "Get" : "Come back tomorrow"}
            </Button>
          </Placeholder>
        </Modal>
      ))}
    </div>
  );
};

export default DailyTasks;
