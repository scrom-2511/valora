import {create} from "zustand"
export type Account = {
    publicKey: string,
    privateKey: string,
    amount: number,
    walletName: string
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