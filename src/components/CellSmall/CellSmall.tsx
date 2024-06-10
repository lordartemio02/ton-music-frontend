import { Cell, Image } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { EllipsisVertical } from "../../assets/icons";
import { CellSmallProps } from "./CellSmall.interfaces";

const CellSmall: FC<CellSmallProps> = (props) => {
  const { title, imgUrl, onClick, onClickIcon, subTitle, id } = props;

  return (
    <Cell
      key={id}
      onClick={onClick}
      className={"p-0 gap-2 [--tgui--cell--middle--padding:8px]"}
      after={<EllipsisVertical onClick={onClickIcon} />}
      before={<Image size={40} src={imgUrl} />}
      subtitle={
        <span className="text-caption1-regular text-hintColor">{subTitle}</span>
      }>
      <span className="text-text-regular">{title}</span>
    </Cell>
  );
};

export default CellSmall;
