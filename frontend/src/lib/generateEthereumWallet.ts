import { mnemonicToSeed } from "bip39"
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import { type Account } from "../zustand/store";
import { WalletImgLocation, WalletName } from "../types/types";

export const generateEthereumWallet = async (mnemonicsArr: Array<string>, currentIndex: number, addAccount: (account: Account) => void) => {
    const seed = await mnemonicToSeed(mnemonicsArr.join(" "));
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey
    const wallet = new Wallet(privateKey);
    const account: Account = {amount: 50, privateKey, publicKey: wallet.address, walletName: WalletName.ethereum, walletIconLocation: WalletImgLocation.ethereum, accountNumber: currentIndex, accountName:`New Account ${currentIndex}`}
    addAccount(account)
}