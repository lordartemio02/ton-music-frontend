import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClickerState {
  money: number;
  energy: number;
  lvlMining: number;
  lvlClick: number;
  lvlBarEnergy: number;
  lvlRegenEnergy: number;
  upgradeEnergyPerSecondCost: number;
  upgradeAutoClickCost: number;
  upgradeClickCost: number;
  miningRatePerHour: number;
  miningRatePerSecond: number;
  dailyRewardActualLevel: number;
  readyToPickup: boolean;
}

const initialState: ClickerState = {
  money: 0,
  energy: 0,
  lvlMining: 0,
  lvlClick: 1,
  lvlBarEnergy: 1,
  lvlRegenEnergy: 1,
  upgradeAutoClickCost: 0,
  upgradeClickCost: 0,
  miningRatePerHour: 0,
  miningRatePerSecond: 0,
  upgradeEnergyPerSecondCost: 0,
  dailyRewardActualLevel: 1,
  readyToPickup: true,
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    onSetMoney: (
      state: ClickerState,
      action: PayloadAction<ClickerState["money"]>
    ) => {
      state.money = action.payload;
    },
    onSetEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlClick"]>
    ) => {
      state.energy = action.payload;
    },
    onSetLvlMining: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlMining"]>
    ) => {
      state.lvlMining = action.payload;
    },
    onSetLvlClick: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlClick"]>
    ) => {
      state.lvlClick = action.payload;
    },
    onSetLvlBarEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlBarEnergy"]>
    ) => {
      state.lvlBarEnergy = action.payload;
    },
    onSetLvlRegenEnergy: (
      state: ClickerState,
      action: PayloadAction<ClickerState["lvlRegenEnergy"]>
    ) => {
      state.lvlRegenEnergy = action.payload;
    },
    onSetAutoClickCost: (
      state: ClickerState,
      action: PayloadAction<ClickerState["upgradeAutoClickCost"]>
    ) => {
      state.upgradeAutoClickCost = action.payload;
    },
    onSetClickCost: (
      state: ClickerState,
      action: PayloadAction<ClickerState["upgradeClickCost"]>
    ) => {
      state.upgradeClickCost = action.payload;
    },
    onSetMiningPerSecond: (
      state: ClickerState,
      action: PayloadAction<ClickerState["miningRatePerSecond"]>
    ) => {
      state.miningRatePerSecond = action.payload;
    },
    onSetMiningPerHour: (
      state: ClickerState,
      action: PayloadAction<ClickerState["miningRatePerHour"]>
    ) => {
      state.miningRatePerHour = action.payload;
    },
    onSetUpgradeEnergyCost: (
      state: ClickerState,
      action: PayloadAction<ClickerState["upgradeEnergyPerSecondCost"]>
    ) => {
      state.upgradeEnergyPerSecondCost = action.payload;
    },
    onSetReadyToPickupDailyReward: (
      state: ClickerState,
      action: PayloadAction<ClickerState["readyToPickup"]>
    ) => {
      state.readyToPickup = action.payload;
    },
    onSetLvlPickupDailyReward: (
      state: ClickerState,
      action: PayloadAction<ClickerState["dailyRewardActualLevel"]>
    ) => {
      state.dailyRewardActualLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetMoney,
  onSetLvlMining,
  onSetLvlClick,
  onSetEnergy,
  onSetLvlBarEnergy,
  onSetLvlRegenEnergy,
  onSetAutoClickCost,
  onSetClickCost,
  onSetMiningPerHour,
  onSetMiningPerSecond,
  onSetUpgradeEnergyCost,
  onSetLvlPickupDailyReward,
  onSetReadyToPickupDailyReward,
} = clickerSlice.actions;

export default clickerSlice.reducer;
