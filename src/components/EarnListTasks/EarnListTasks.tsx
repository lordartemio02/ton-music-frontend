import { Button, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { DuckFriendsIcon, DuckNewsIcon } from "../../assets/icons/ducks";
import { IEarnList } from "./EarnListTasks.interface";

const EarnListTasks: FC = () => {
  const earnList: IEarnList[] = [
    {
      title: "Join our community",
      subtitle: "Become a part of our family",
      description: "Be the first to know about all the news!",
      boost: "5 000",
      icon: DuckNewsIcon,
      buttons: [
        {
          title: "Subscribe",
          mode: "filled",
          onClick: () => console.log("subscribe"),
        },
        {
          title: "Check",
          mode: "bezeled",
          onClick: () => console.log("Check"),
        },
      ],
    },
    {
      title: "Invite friend",
      subtitle: "Play and listen to music together",
      description: "Be the first to know about all the news!",
      boost: "5 000",
      icon: DuckFriendsIcon,
      buttons: [
        {
          title: "Invite",
          mode: "filled",
          onClick: () => console.log("Invite"),
        },
        {
          title: "Check",
          mode: "bezeled",
          onClick: () => console.log("Check"),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="text-[17px] font-semibold">List of tasks</div>
      {earnList.map((earn, index) => (
        <Modal
          key={`earn-${index}`}
          header={
            <div className="text-center text-[--tgui--text_color] text-[17px] font-semibold py-[19px]">
              {earn.title}
            </div>
          }
          className="z-50"
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
          }
        >
          <Placeholder>
            <earn.icon />
            <div className="text-[17px]">{earn.subtitle}</div>
            <div className="text-[17px] text-[--tgui--hint_color]">
              {earn.description}
            </div>

            <div className="text-center text-[#007AFF] text-[13px]">
              +{earn.boost} TONM
            </div>

            <div className="flex flex-col gap-4 w-full">
              {earn.buttons.map((button) => (
                <Button
                  onClick={button.onClick}
                  mode={button.mode}
                  className="w-full"
                  size="l"
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </Placeholder>
        </Modal>
      ))}
    </div>
  );
};

export default EarnListTasks;
