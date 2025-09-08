import { generateMnemonic } from "bip39";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccountStore } from "../zustand/store";
import { generateSolanaWallet } from "../lib/generateSolanaWallet";
import { generateEthereumWallet } from "../lib/generateEthereumWallet";


const Home = () => {
  const navigate = useNavigate();
  const {account, addAccount} = useAccountStore();
  const handleOnClickCreateAWallet = () => {
    setComponent(2);
    const mnemonic = generateMnemonic();
    setMnemonicsArr(mnemonic.split(" "));
  };

  useEffect(()=>{
    console.log(account)
    localStorage.setItem("wallets", JSON.stringify(account))
  }, [account])

  const handleOnClickCreateAWallet2 = async () => {
    await generateSolanaWallet(mnemonicsArr, currentIndex, addAccount);
    await generateEthereumWallet(mnemonicsArr, currentIndex, addAccount);
    navigate("/yourwallets")
    setCurrentIndex((prev)=>prev+1);
  }

  const [component, setComponent] = useState<number>(1);
  const [mnemonicsArr, setMnemonicsArr] = useState<Array<string>>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className="h-full w-full">
      {component === 1 && (
        <div className="h-full w-full z-50">
          <div className="h-full w-full flex flex-col">
            <div className="text-center self-end h-full pt-40">
              <h1 className="font-poppins font-extrabold text-8xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight pt-20 drop-shadow-[0_0_10px_rgba(0,97,255,0.59)]">
                VALORA
              </h1>
              <p className="text-[#ebebebcc] text-md font-poppins font-light tracking-tight pt-5">
                The most simple wallet to manage your crypto.
              </p>
            </div>
            <div className="flex flex-col items-center self-center gap-5 h-full pt-52">
              <button
                className="bg-blue-600 h-16 w-auto px-20 text-[#ebebebcc] rounded-2xl drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleOnClickCreateAWallet}
              >
                <span>CREATE A WALLET</span>
                <img src="" alt="" />
              </button>
              <button
                className="bg-blue-600 h-16 w-auto px-20 text-[#ebebebcc] rounded-2xl drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200"
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
          <div className="text-blue-500 text-3xl p-5 pl-10 font-bold font-poppins mb-5">
            YOUR SECRET PHASE
          </div>
          <div className="h-[400px] w-[800px] rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 grid grid-cols-3 grid-rows-4 p-5">
            {mnemonicsArr.map((mnemonic) => (
              <h1 className="text-blue-500 self-center text-center font-medium text-l">
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
        </div>
      )}
      <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
      
    </div>
  );
};

export default Home;
