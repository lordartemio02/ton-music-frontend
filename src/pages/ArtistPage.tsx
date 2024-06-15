import { Icon28Heart } from "@telegram-apps/telegram-ui/dist/icons/28/heart";
import { FC } from "react";
import CardArtist from "../components/CardArtist";

const ArtistPage: FC = () => {
  return (
    <div>
      <CardArtist
        buttons={[
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: () => {},
            text: "folow",
          },
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: () => {},
            text: "folow",
          },
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: () => {},
            text: "folow",
          },
        ]}
        countPlays={100000}
        name="Martin Garrix"
      />
    </div>
  );
};

export default ArtistPage;
