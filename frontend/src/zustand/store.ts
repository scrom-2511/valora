import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WalletName, type WalletImgLocation } from "../types/types";

// Define your Wallet type
export type Wallet = {
  publicKey: string;
  privateKey: string;
  amount: number;
  walletName: WalletName;
  walletIconLocation: WalletImgLocation;
};

// Update Account to include multiple wallets under accountDetails
export type Account = {
  accountName: string;
  accountNumber: number;
  accountDetails: {
    [key in WalletName]: Wallet; 
  };
};


// Store definition
export type AccountStore = {
  account: Account[];
  addAccount: (account: Account) => void;
  setAccount: (accounts: Account[]) => void;
};

// Store implementation using Zustand with persist
export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      account: [],
      addAccount: (newAccount) =>
        set((state) => ({
          account: [...state.account, newAccount],
        })),
        setAccount: (accounts) =>
        set(() => ({
          account: accounts,
        })),
      }),
      {
        name: "account-storage", // localStorage key
      }
    )
);


type CurrentIndexStore = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

export const useCurrentIndexStore = create<CurrentIndexStore>()(
  persist(
    (set) => ({
      currentIndex: 0,
      setCurrentIndex: (index) =>
        set(() => ({
          currentIndex: index,
        })),
    }),
    {
      name: "current-index-storage", // localStorage key
    }
  )
);

type TotalTokensStore = {
  [WalletName.solana]: number,
  [WalletName.ethereum]: number,
  setToken: (token1: number, token2: number) => void
  addToken: (token1:number , token2: number) => void
}

export const useTotalTokenStore = create<TotalTokensStore>()(
  persist(
    (set) => ({
      [WalletName.solana]: 0,
      [WalletName.ethereum]: 0,
      setToken: (token1, token2)=>
        set(()=>({
          [WalletName.solana]: token1,
          [WalletName.ethereum]: token2
        })),
      addToken: (token1, token2) => 
        set((state)=>({
          [WalletName.solana]: state[WalletName.solana] + token1,
          [WalletName.ethereum]: state[WalletName.ethereum] + token2
        }))
    }),
    {
      name: "total-token-store"
    }
  )
)