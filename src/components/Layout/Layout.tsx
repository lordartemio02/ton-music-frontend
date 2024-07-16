import { FC, useCallback, useContext, useEffect, useState } from "react";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "../Header";
import Navigation from "../Navigation";
import { ILayout } from "./Layout.interface";

import { useInitData } from "@tma.js/sdk-react";
import { useLocation } from "react-router-dom";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  onSetAutoClickCost,
  onSetClickCost,
  onSetEnergy,
  onSetLvlBarEnergy,
  onSetLvlClick,
  onSetLvlMining,
  onSetLvlPickupDailyReward,
  onSetLvlRegenEnergy,
  onSetMiningPerHour,
  onSetMiningPerSecond,
  onSetMoney,
  onSetReadyToPickupDailyReward,
  onSetUpgradeEnergyCost,
} from "../../redux/slices/clickerSlice";
import {
  setCurrentMusic,
  setIndexMusic,
  setIsAutoplayMusic,
} from "../../redux/slices/musicSlice";
import { SocketContext } from "../../socket/socket";
import ModalSwiper from "../ModalSwiper";

const Layout: FC<ILayout> = ({ children }) => {
  const { load, stop, seek } = useGlobalAudioPlayer();

  const dispatch = useAppDispatch();
  const location = useLocation();

  const initData = useInitData();
  const socket = useContext(SocketContext);

  // const viewport = useViewport();

  const currentMusic = useAppSelector((state) => state.music.currentMusic);
  const listMusic = useAppSelector((state) => state.music.list);
  const isAutoplay = useAppSelector((state) => state.music.isAutoplay);
  const indexMusic = useAppSelector((state) => state.music.index);

  const lvlClick = useAppSelector((state) => state.clicker.lvlClick);
  const lvlMining = useAppSelector((state) => state.clicker.lvlMining);
  const money = useAppSelector((state) => state.clicker.money);
  const energy = useAppSelector((state) => state.clicker.energy);
  const lvlBarEnergy = useAppSelector((state) => state.clicker.lvlBarEnergy);
  const miningRatePerSecond = useAppSelector(
    (state) => state.clicker.miningRatePerSecond
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isShowMusicPanel, setIsShowMusicPanel] = useState(true);

  const classNameMain = !isShowMusicPanel ? "mb-[71px]" : "mb-[135px]";

  useEffect(() => {
    if (location.pathname === "/player") {
      setIsShowMusicPanel(false);
    } else {
      setIsShowMusicPanel(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const id = setInterval(() => {
      const maxEnergy = 500 + lvlBarEnergy * 500;

      dispatch(onSetMoney(money + miningRatePerSecond));

      if (energy >= maxEnergy) return;
      dispatch(onSetEnergy(energy + 1));
    }, 1000);

    return () => clearInterval(id);
  }, [money, energy, lvlClick, lvlMining, lvlBarEnergy, miningRatePerSecond]);

  useEffect(() => {
    if (!localStorage.getItem("modal")) {
      localStorage.setItem("modal", "true");
      setIsOpen(true);
    }
  }, []);

  const onEnd = useCallback(() => {
    const nextIndexMusic = indexMusic + 1;

    if (listMusic.length - 1 < nextIndexMusic) {
      stop();
      seek(0);

      return;
    }

    dispatch(setIndexMusic(nextIndexMusic));
    dispatch(setCurrentMusic(listMusic[nextIndexMusic]));
    dispatch(setIsAutoplayMusic(true));
  }, [dispatch, indexMusic, listMusic, seek, stop]);

  useEffect(() => {
    load(currentMusic.link, {
      autoplay: isAutoplay,
      html5: true,
      format: "mp3",
      onend: onEnd,
    });
  }, [currentMusic.link, isAutoplay, load, onEnd]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    socket?.on("connect", () => {
      socket?.emit("getUserClickerData", {
        telegramId: initData?.user?.id,
      });
      socket?.on("click", (data) => {
        dispatch(onSetEnergy(data.energy));
        dispatch(onSetMoney(data.coins));
      });
      socket?.on("getUserClickerData", (data) => {
        dispatch(onSetMoney(data.coins));
        dispatch(onSetLvlMining(data.auto_tap_level));
        dispatch(onSetLvlClick(data.tap_level));
        dispatch(onSetEnergy(data.energy));
        dispatch(onSetLvlBarEnergy(data.energy_bar_level));
        dispatch(onSetLvlRegenEnergy(data.energy_regeneration_level));
        dispatch(onSetAutoClickCost(data.values.upgrade_auto_click_cost));
        dispatch(onSetClickCost(data.values.upgrade_click_cost));
        dispatch(onSetMiningPerHour(data.values.mining_rate_per_hour));
        dispatch(onSetMiningPerSecond(data.values.mining_rate_per_second));
        dispatch(onSetUpgradeEnergyCost(data.values.upgrade_energy_per_second));
      });
      socket?.on("buyBoostAutoTap", (data) => {
        dispatch(onSetMoney(data.coins));
        dispatch(onSetLvlMining(data.auto_tap_level));
        dispatch(onSetAutoClickCost(data.values.upgrade_auto_click_cost));
        dispatch(onSetMiningPerHour(data.values.mining_rate_per_hour));
        dispatch(onSetMiningPerSecond(data.values.mining_rate_per_second));
      });
      socket?.on("buyBoostEnergyBar", (data) => {
        dispatch(onSetLvlBarEnergy(data.energy_bar_level));
        dispatch(onSetMoney(data.coins));
      });
      socket?.on("buyBoostEnergyPerSecond", (data) => {
        dispatch(onSetLvlRegenEnergy(data.energy_regeneration_level));
        dispatch(onSetMoney(data.coins));
      });
      socket?.on("buyBoostTap", (data) => {
        dispatch(onSetMoney(data.coins));
        dispatch(onSetLvlClick(data.tap_level));
        dispatch(onSetClickCost(data.values.upgrade_click_cost));
      });
      socket?.on("checkDailyRewardStatus", (data) => {
        dispatch(onSetReadyToPickupDailyReward(data.readyToPickup));
        dispatch(onSetLvlPickupDailyReward(data.dailyRewardActualLevel));
      });
    });
  }, [socket]);

  return (
    <div
      className="bg-black flex flex-col w-full px-4 pt-2 overflow-y-auto"
      style={{
        height: "100vh",
      }}>
      <Header />
      <main className={`flex-1 text-white mt-4 ${classNameMain}`}>
        {children}
      </main>
      <div className="fixed w-full left-0 bottom-0 z-10">
        {isShowMusicPanel && <ControlMusicPanel />}
        <Navigation />
      </div>
      <ModalSwiper isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Layout;
