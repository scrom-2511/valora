import { Keypair } from "@solana/web3.js";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58"
import { type Account } from "../zustand/store";
import { WalletImgLocation, WalletName } from "../types/types";

export const generateSolanaWallet = async (mnemonicsArr: Array<string>, currentIndex: number, addAccount: (account: Account) => void) =>{
    const seed = await mnemonicToSeed(mnemonicsArr.join(" "))
    console.log(seed)
    const path = `m/44'/501'/${currentIndex}'/0'`;
    console.log(path)
    const derivedSeed = derivePath(path, seed.toString()).key
    console.log(derivedSeed)
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed)
    console.log(secret)
    const {publicKey, secretKey} = Keypair.fromSecretKey(secret.secretKey)
    const account: Account = {privateKey:bs58.encode(secretKey), publicKey: publicKey.toBase58(), amount: 0, walletName:WalletName.solana, walletIconLocation: WalletImgLocation.solana}
    addAccount(account)
}