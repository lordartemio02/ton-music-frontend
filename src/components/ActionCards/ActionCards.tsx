import { FC } from "react";
import { actionCardsList } from "./ActionCards.config";

const ActionCards: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-[9px]">
      {actionCardsList.map((item, index) => (
        <div
          key={`action-card-${index}`}
          className={`rounded-[9px] py-2 px-3 ${
            item.className ?? "bg-[#212121]"
          }  flex items-center justify-between`}
          onClick={item.onClick}>
          <div className="text-white flex flex-col">
            <div className="text-[15px]">{item.title}</div>
            <div className="text-[10px]">{item.subtitle}</div>
          </div>
          <div className="w-[50px] h-[50px]">
            <img
              src={item.img}
              alt="message"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionCards;
