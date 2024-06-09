import { FC } from "react";
import CustomTabsList from "../components/CustomTabsList";
import { TabsDataListType } from "../components/CustomTabsList/CustomTabsList.interface";
import WrapperBlock from "../components/WrapperBlock";

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
            <h1>New releases</h1>
          </WrapperBlock>
          <WrapperBlock
            title="Popular albums"
            onClick={handleClickPopularAlbums}
          >
            <h1>Popular albums</h1>
          </WrapperBlock>
          <WrapperBlock title="Ton chart" onClick={handleClickTonChart}>
            <h1>Ton chart</h1>
          </WrapperBlock>
          <WrapperBlock
            title="top week artists"
            onClick={handleClickTopWeekArtists}
          >
            <h1>top week artists</h1>
          </WrapperBlock>
          <WrapperBlock
            title="NEW albums by genres"
            onClick={handleClickNewAlbumsByGenres}
          >
            <h1>NEW albums by genres</h1>
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
            onClick={handleClickBasedOnYourPreferences}
          >
            <h1>Based on your preferences</h1>
          </WrapperBlock>
          <WrapperBlock title="Find new stars">
            <h1>Find new stars</h1>
          </WrapperBlock>
          <WrapperBlock
            title="New albums you will like"
            onClick={handleClickNewAlbumsYouWillLike}
          >
            <h1>New albums you will like</h1>
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
