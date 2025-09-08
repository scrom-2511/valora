import {create} from "zustand"
import type { WalletImgLocation, WalletName } from "../types/types"
export type Account = {
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