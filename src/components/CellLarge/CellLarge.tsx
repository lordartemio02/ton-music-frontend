import { Cell, Image } from "@telegram-apps/telegram-ui";
import { Icon24ChevronRight } from "@telegram-apps/telegram-ui/dist/icons/24/chevron_right";
import { FC } from "react";
import { CellLargeProps } from "./CellLarge.interfaces";

const CellLarge: FC<CellLargeProps> = (props) => {
  const { title, imgUrl, onClick, subTitle, desc, id } = props;

  return (
    <Cell
      key={id}
      onClick={onClick}
      className={
        "p-0 gap-2 [--tgui--cell--middle--padding:8px] hover:bg-transparent"
      }
      after={<Icon24ChevronRight className="text-linkColor" />}
      before={<Image className="!h-20 !w-20" src={imgUrl} />}
      description={
        <span className="text-linkColor text-caption2-regular">{desc}</span>
      }
      subtitle={<span className="text-caption1-regular">{subTitle}</span>}>
      <span className="text-text-semibold">{title}</span>
    </Cell>
  );
};

export default CellLarge;
