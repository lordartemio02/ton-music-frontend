export type User = {
  id: number;
  username: string;
  surname: string;
  name: string;
  avatar: string;
  wallets: Wallet[];
  subscribtion: Subscribtion;
  isUsedTrial: boolean;
};

export type Subscribtion = {
  type: string;
  expiresAt: number;
  tariff: Tariff;
};

export type Tariff = {
  id: number;
  type: string;
  price: number;
};

export type Wallet = {
  id: number;
  currency: string;
  balance: string;
};
