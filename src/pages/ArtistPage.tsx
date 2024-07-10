import { Icon28Heart } from "@telegram-apps/telegram-ui/dist/icons/28/heart";
import { FC } from "react";
import CardArtist from "../components/CardArtist";
import CellLarge from "../components/CellLarge";
import CellSmall from "../components/CellSmall";
import WrapperBlock from "../components/WrapperBlock";
import data from "../mock/dataAlbums.json";

const ArtistPage: FC = () => {
  const handleClickPopularTracks = () => {
    console.log("handleClickPopularTracks");
  };

  const handleClickAlbums = () => {
    console.log("handleClickAlbums");
  };

  const handleClickLike = () => {
    console.log("handleClickLike");
  };

  const handleClickPlay = () => {
    console.log("handleClickPlay");
  };

  const handleClickShare = () => {
    console.log("handleClickShare");
  };

  const handleClickPopularTrack = (id: string) => {
    console.log("handleClickShare", id);
  };

  return (
    <div>
      <CardArtist
        buttons={[
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: handleClickLike,
            text: "folow",
          },
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: handleClickPlay,
            text: "folow",
          },
          {
            icon: <Icon28Heart className="text-whiteColor" />,
            onClick: handleClickShare,
            text: "folow",
          },
        ]}
        countPlays={100000}
        name="Martin Garrix"
      />
      <WrapperBlock title="Popular tracks" onClick={handleClickPopularTracks}>
        <>
          {data.map((item) => (
            <CellSmall
              id={item.id}
              onClick={() => {
                handleClickPopularTrack(item.id);
              }}
              onClickIcon={() => {}}
              subTitle={item.author}
              title={item.name}
              imgUrl={item.avatar}
            />
          ))}
        </>
      </WrapperBlock>
      <WrapperBlock title="albums" onClick={handleClickAlbums}>
        <>
          {data.map((item) => (
            <CellLarge
              id={item.id}
              desc={item.genre}
              onClick={() => {}}
              subTitle={item.author}
              title={item.name}
              imgUrl={item.avatar}
            />
          ))}
        </>
      </WrapperBlock>
      <WrapperBlock title="Similar artists">
        <h1>Similar artists</h1>
      </WrapperBlock>
    </div>
  );
};

export default ArtistPage;
