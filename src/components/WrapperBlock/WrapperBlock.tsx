import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { IWrapperBlock } from "./WrapperBlock.interface";

const WrapperBlock: FC<IWrapperBlock> = ({ title, children, onClick }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="pt-4 pb-2 flex items-center gap-[10px]">
        <h2 className="text-[13px] text-[#707579] uppercase">{title}</h2>
        {onClick && (
          <Button size="s" mode="bezeled" onClick={onClick}>
            See all
          </Button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WrapperBlock;
