import { generateMnemonic } from "bip39";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccountStore, useCurrentIndexStore, useTotalTokenStore, type Account } from "../zustand/store";
import { generateSolanaWallet } from "../lib/generateSolanaWallet";
import { generateEthereumWallet } from "../lib/generateEthereumWallet";
import { WalletName } from "../types/types";


const Home = () => {
  const navigate = useNavigate();
  const {account, addAccount} = useAccountStore();
  const {addToken} = useTotalTokenStore();
  const {currentIndex, setCurrentIndex} = useCurrentIndexStore();
  const handleOnClickCreateAWallet = () => {
    setComponent(2);
    const mnemonic = generateMnemonic();
    localStorage.setItem("mnemonic", mnemonic)
    setMnemonicsArr(mnemonic.split(" "));
  };

  const handleOnClickCreateAWallet2 = async () => {
    const mnemonic = localStorage.getItem("mnemonic");

    // Input validation: check if mnemonic exists and is valid
    if (!mnemonic) {
      console.error("Mnemonic not found in localStorage.");
      return;
    }

    const mnemonicArray = mnemonic.split(" ");
    if (!Array.isArray(mnemonicArray) || mnemonicArray.length === 0) {
      console.error("Invalid mnemonic format.");
      return;
    }
    const {
      amount: amountSol,
      privateKey: privateKeySol,
      publicKey: publicKeySol,
      walletName: walletNameSol,
      walletIconLocation: walletIconLocationSol,
    } = await generateSolanaWallet(mnemonicArray, currentIndex);

    // Generate Ethereum wallet using mnemonic and current index
    const {
      amount: amountEth,
      privateKey: privateKeyEth,
      publicKey: publicKeyEth,
      walletName: walletNameEth,
      walletIconLocation: walletIconLocationEth,
    } = await generateEthereumWallet(mnemonicArray, currentIndex);
    const account: Account = {
      accountName: "New Account",
      accountNumber: currentIndex,
      accountDetails: {
        [WalletName.solana]: {
          amount: amountSol,
          privateKey: privateKeySol,
          publicKey: publicKeySol,
          walletIconLocation: walletIconLocationSol,
          walletName: walletNameSol,
        },
        [WalletName.ethereum]: {
          amount: amountEth,
          privateKey: privateKeyEth,
          publicKey: publicKeyEth,
          walletIconLocation: walletIconLocationEth,
          walletName: walletNameEth,
        },
      },
    };
    addToken(amountSol, amountEth)
    addAccount(account)
    navigate(`/yourwallets/${currentIndex}`);
    setCurrentIndex(currentIndex + 1);
  }

  const [component, setComponent] = useState<number>(1);
  const [mnemonicsArr, setMnemonicsArr] = useState<Array<string>>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <div className="h-full w-full">
      {component === 1 && (
        <div className="h-full w-full z-50 overflow-y-scroll">
          <div className="h-full w-full flex flex-col items-center justify-center gap-20">
            <div className="text-center">
              <h1 className="font-poppins font-extrabold text-6xl sm:text-8xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight pt-20 drop-shadow-[0_0_10px_rgba(0,97,255,0.59)]">
                VALORA
              </h1>
              <p className="text-[#ebebebcc] text-[10px] sm:text-[15px] font-poppins font-light tracking-tight pt-5">
                The most simple wallet to manage your crypto.
              </p>
            </div>
            <div className="flex flex-col items-center self-center gap-5">
              <button
                className="bg-blue-600 h-12 sm:h-16 w-auto px-7 sm:px-20 text-[12px] sm:text-[16px] text-[#ebebebcc] rounded-2xl drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleOnClickCreateAWallet}
              >
                <span>CREATE A WALLET</span>
                <img src="" alt="" />
              </button>
              <button
                className="bg-blue-600 h-12 sm:h-16 sm:w-72 w-40 text-[12px] sm:text-[16px] text-[#ebebebcc] rounded-2xl drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleOnClickCreateAWallet}
              >
                <span>IMPORT A WALLET</span>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
      {component === 2 && (
        <div className="h-full w-full flex flex-col items-center justify-center z-50 relative">
          <div className="text-blue-500 text-3xl p-5 font-bold font-poppins mb-5">
            YOUR SECRET PHASE
          </div>
          <div className="h-[400px] w-[300px] xl:w-[800px] sm:h-[400px] sm:w-[600px] rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 grid grid-cols-3 grid-rows-4 p-5">
            {mnemonicsArr.map((mnemonic) => (
              <h1 className="text-blue-500 self-center text-center font-medium text-sm sm:text-l">
                {mnemonic}
              </h1>
            ))}
          </div>
          <label className="text-[#ebebebcc] m-3 flex items-center text-sm">
            <input
              onChange={() => {
                setIsDisabled((prev) => !prev);
              }}
              type="checkbox"
              className=" w-4 h-4 m-1 bg-red-500 accent-blue-500"
            />
            <span className="m-1">I have saved the text with me</span>
          </label>
          <button
            onClick={handleOnClickCreateAWallet2}
            className={`bg-blue-600 w-auto px-6 text-[#ebebebcc] rounded-2xl h-10 mt-5 ${
              isDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer hover:scale-105 transition-transform duration-200"
            }`}
          >
            Create A Wallet
          </button>
          <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
        </div>
      )}
      
    </div>
  );
};

export default Home;
