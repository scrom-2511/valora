import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { useState } from "react";

const Home = () => {
  const handleOnClickCreateAWallet = () => {
    setComponent(2);
    const mnemonic = generateMnemonic();
    console.log(mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    console.log(seed);
  };

  const [component, setComponent] = useState<number>(1);
  return (
    <div className="h-full w-full">
      <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[200px] top-60 left-100 z-0"></div>
      <div className="absolute h-60 w-60 bg-blue-500 rounded-full blur-[200px] bottom-60 right-100 z-0"></div>
      {component === 1 && (
        <div className="h-full w-full">
          <div className="h-full w-full grid grid-rows-[300px_auto]">
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
                className="bg-blue-600 w-auto px-15 text-[#ebebebcc] rounded-2xl h-10 drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleOnClickCreateAWallet}
              >
                <span>CREATE A WALLET</span>
                <img src="" alt="" />
              </button>
              <button className="bg-blue-600 w-auto px-15 text-[#ebebebcc] rounded-2xl h-10 drop-shadow-[0_0_10px_rgba(0,97,255,0.7)] hover:cursor-pointer hover:scale-105 transition-transform duration-200">
                <span>IMPORT A WALLET</span>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
      {component === 2 && (
        <div className="h-full w-full flex items-center justify-center z-30 relative">
          <div className="h-[400px] w-[800px] rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40"></div>
        </div>
      )}
    </div>
  );
};

export default Home;