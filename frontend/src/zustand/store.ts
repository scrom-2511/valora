import {create} from "zustand"
import type { WalletImgLocation, WalletName } from "../types/types"
import { number } from "framer-motion"
export type Account = {
    accountNumber: number,
    publicKey: string,
    privateKey: string,
    amount: number,
    walletName: WalletName,
    walletIconLocation: WalletImgLocation
}
export type AccountStore = {
    account: Account[]
    addAccount: (account:Account) => void
}

export const useAccountStore = create<AccountStore>((set)=>({
    account: [],
    addAccount: (newAccount) => {
        set((state)=>({
            account: [...state.account, newAccount]
        }))
    }
}))

type currentIndexStore = {
    currentIndex: number,
    setCurrentIndex: (index: number) => void
}

export const useCurrentIndexStore = create<currentIndexStore>((set)=>({
    currentIndex: 0,
    setCurrentIndex: (index) => {
        set(()=>({
            currentIndex: index
        }))
    }
}))