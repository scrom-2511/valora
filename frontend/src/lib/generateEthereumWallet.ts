import { mnemonicToSeed } from "bip39"
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import { type Account } from "../zustand/store";
import { WalletImgLocation, WalletName } from "../types/types";
import type { Wallet as WalletType } from "../zustand/store";

export const generateEthereumWallet = async (mnemonicsArr: Array<string>, currentIndex: number): Promise<WalletType> => {
    console.log("mnemonic arr is: ", mnemonicsArr)
    const seed = await mnemonicToSeed(mnemonicsArr.join(" "));
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey
    const wallet = new Wallet(privateKey);
    return {amount: 50.00, privateKey:privateKey, publicKey: wallet.address, walletName:WalletName.ethereum, walletIconLocation:WalletImgLocation.ethereum}
}