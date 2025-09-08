import { mnemonicToSeed } from "bip39"
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import { useAccountStore, type Account } from "../zustand/store";
import { WalletName } from "../types/types";

export const generateEthereumWallet = async (mnemonicsArr: Array<string>, currentIndex: number, addAccount: (account: Account) => void) => {
    const seed = await mnemonicToSeed(mnemonicsArr.join(" "));
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    console.log(hdNode)
    const child = hdNode.derivePath(derivationPath);
    console.log("Child is: ",child)
    const privateKey = child.privateKey
    console.log("The private key is: ", privateKey)
    const wallet = new Wallet(privateKey);
    console.log(wallet)
    const account: Account = {amount: 50, privateKey, publicKey: wallet.address, walletName: WalletName.ethereum}
    addAccount(account)
}