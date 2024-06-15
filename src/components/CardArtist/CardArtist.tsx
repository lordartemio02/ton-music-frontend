import { Avatar, InlineButtons, Title } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { CardArtistProps } from "./CardArtist.interfaces";

const CardArtist: FC<CardArtistProps> = (props) => {
  const { buttons, countPlays, name, avatar } = props;

  return (
    <div className="bg-gradient-to-tr to-[#B46EEC] from-[#6B92FF]">
      <div className="pt-[65px] flex flex-col items-center justify-center mb-4">
        <Avatar size={96} src={avatar} className={"mb-2"} />
        <Title>{name}</Title>
        <p className="text-whiteColor text-text-regular opacity-60">
          {countPlays} plays
        </p>
      </div>
      <InlineButtons mode="plain" className="pb-4 px-4">
        {buttons.map((el) => (
          <InlineButtons.Item
            className="bg-inlineButtons/35 text-whiteColor"
            text={el.text}
            onClick={el.onClick}>
            {el.icon}
          </InlineButtons.Item>
        ))}
      </InlineButtons>
    </div>
  );
};

export default CardArtist;
