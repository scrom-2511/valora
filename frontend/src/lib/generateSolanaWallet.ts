import { Keypair } from "@solana/web3.js";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58"
import type { Wallet as WalletType } from "../zustand/store";
import { WalletImgLocation, WalletName } from "../types/types";

export const generateSolanaWallet = async (mnemonicsArr: Array<string>, currentIndex: number):Promise<WalletType> =>{
    console.log("mnemonic arr is: ", mnemonicsArr)

    const seed = await mnemonicToSeed(mnemonicsArr.join(" "))
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString()).key
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed)
    const {publicKey, secretKey} = Keypair.fromSecretKey(secret.secretKey)
    return {amount: 50.00, privateKey: bs58.encode(secretKey), publicKey: publicKey.toBase58(), walletName:WalletName.solana, walletIconLocation:WalletImgLocation.solana}
}