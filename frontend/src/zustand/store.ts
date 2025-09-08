import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { WalletImgLocation, WalletName } from "../types/types"

export type Account = {
  accountNumber: number
  publicKey: string
  privateKey: string
  amount: number
  walletName: WalletName
  walletIconLocation: WalletImgLocation
}

export type AccountStore = {
  account: Account[]
  addAccount: (account: Account) => void
  setAccount: (account: Account[]) => void
}

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
)

type CurrentIndexStore = {
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

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
)
