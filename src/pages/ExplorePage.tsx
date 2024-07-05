import { FC } from "react";
import CellLarge from "../components/CellLarge";
import CellSmall from "../components/CellSmall";
import CustomTabsList from "../components/CustomTabsList";
import { TabsDataListType } from "../components/CustomTabsList/CustomTabsList.interface";
import ExploreSlide from "../components/ExploreSlide";
import WrapperBlock from "../components/WrapperBlock";
import data from "../mock/dataAlbums.json";

import { Settings } from "react-slick";
import audioList from "../mock/audiolist.json";

const dataMock = audioList.slice(0, 15);

const newReleaseSettings: Settings = {
  infinite: true,
  centerPadding: "60px",
  centerMode: true,
  slidesToShow: 1,
};

const newAlbumsSettings: Settings = {
  infinite: true,
  centerPadding: "60px",
  centerMode: true,
  slidesToShow: 2,
};

const topArtistsSettings: Settings = {
  infinite: true,
  centerPadding: "80px",
  centerMode: true,
  slidesToShow: 1,
};

const ExplorePage: FC = () => {
  const handleClickPopularAlbums = () => {
    console.log("handleClickPopularAlbums");
  };

  const handleClickNewReleases = () => {
    console.log("handleClickNewReleases");
  };

  const handleClickTonChart = () => {
    console.log("handleClickTonChart");
  };

  const handleClickTopWeekArtists = () => {
    console.log("handleClickTopWeekArtists");
  };

  const handleClickNewAlbumsByGenres = () => {
    console.log("handleClickNewAlbumsByGenres");
  };

  const handleClickBasedOnYourPreferences = () => {
    console.log("handleClickBasedOnYourPreferences");
  };

  const handleClickNewAlbumsYouWillLike = () => {
    console.log("handleClickNewAlbumsYouWillLike");
  };

  const dataList: TabsDataListType[] = [
    {
      title: "Popular",
      children: (
        <div>
          <WrapperBlock title="New releases" onClick={handleClickNewReleases}>
            <ExploreSlide
              data={dataMock}
              settings={newReleaseSettings}
              classNameImg="rounded-t-[24px]"
              classNameFooter="rounded-b-[24px]"
            />
          </WrapperBlock>
          <WrapperBlock
            title="Popular albums"
            onClick={handleClickPopularAlbums}>
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
          <WrapperBlock title="Ton chart" onClick={handleClickTonChart}>
            <>
              {data.map((item) => (
                <CellSmall
                  id={item.id}
                  onClick={() => {}}
                  onClickIcon={() => {}}
                  subTitle={item.author}
                  title={item.name}
                  imgUrl={item.avatar}
                />
              ))}
            </>
          </WrapperBlock>
          <WrapperBlock
            title="top week artists"
            onClick={handleClickTopWeekArtists}>
            <ExploreSlide
              data={dataMock}
              settings={topArtistsSettings}
              classNameImg="rounded-full"
              classNameFooter="bg-transparent [&>div]:text-[15px] [&>div:last-child]:hidden text-center pt-1 pb-0"
            />
          </WrapperBlock>
          <WrapperBlock
            title="NEW albums by genres"
            onClick={handleClickNewAlbumsByGenres}>
            <ExploreSlide
              data={dataMock}
              settings={newAlbumsSettings}
              classNameImg="rounded-t-[12px]"
              classNameFooter="rounded-b-[12px] [&>div]:text-[14px] [&>div:last-child]:hidden px-[10px] pt-2 pb-[10px]"
            />
          </WrapperBlock>
        </div>
      ),
    },
    {
      title: "For you",
      children: (
        <div>
          <WrapperBlock
            title="Based on your preferences"
            onClick={handleClickBasedOnYourPreferences}>
            <>
              {data.map((item) => (
                <CellSmall
                  id={item.id}
                  onClick={() => {}}
                  onClickIcon={() => {}}
                  subTitle={item.author}
                  title={item.name}
                  imgUrl={item.avatar}
                />
              ))}
            </>
          </WrapperBlock>
          <WrapperBlock title="Find new stars">
            <h1>Find new stars</h1>
          </WrapperBlock>
          <WrapperBlock
            title="New albums you will like"
            onClick={handleClickNewAlbumsYouWillLike}>
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
          <WrapperBlock title="Recently listened to">
            <h1>Recently listened to</h1>
          </WrapperBlock>
        </div>
      ),
    },
  ];

  return <CustomTabsList dataList={dataList} />;
};

export default ExplorePage;
