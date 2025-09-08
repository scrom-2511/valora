import React from "react";
import { useAccountStore } from "../zustand/store";

const YourWallets = () => {
  const { account } = useAccountStore();
  return (
    <div className="h-full w-[1200px] grid grid-rows-[150px_auto]">
      <div className="mx-20 mt-10">
        <h1 className="text-4xl py-5 font-extrabold font-poppins mb-5 bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_10px_rgba(0,97,255,0.59)]">
          YOUR WALLETS
        </h1>
      </div>
      <div className="h-full overflow-y-scroll gap-10">

        <div className="relative h-auto w-auto overflow-hidden mx-20 z-50 mb-10">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/3 -translate-y-1/2 z-0"></div>
          <div className="h-auto w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
            <div className="text-2xl text-[#dcdcdc] font-bold px-3 flex items-center gap-3 mb-5">
              <img src="/images/solana-logo.png" alt="" className="h-10 w-10" />
              SOLANA
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-36 bg-blue-600 rounded-2xl text-[#dcdcdc] flex flex-col justify-center items-center p-10 gap-10">
                <div>
                  <h1 className="font-medium text-md text-[#ebebebcc] text-center">
                    Total Balance
                  </h1>
                  <h1 className="font-bold text-4xl text-white text-center font-poppins">
                    50.00 SOL
                  </h1>
                  <h1 className="font-medium text-lg text-[#ebebebcc] text-center">
                    =$23456
                  </h1>
                </div>
              </div>

              <div className="h-auto border border-blue-400/30 rounded-2xl text-[#dcdcdc] bg-blue-500/15 flex flex-col justify-center p-10 gap-10">
                <h1 className="font-medium text-xl font-poppins text-white/80">
                  Wallet Credentials
                </h1>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between px-1">
                    <h1 className="text-sm text-white/80 mb-2">PUBLIC KEY</h1>
                    <h1 className="text-sm text-white/80 mb-2">COPY</h1>
                    </div>
                    <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">
                      7YrmZzFfJ1wzZKkR3xvZsN9hMpLpWz2uHn4xH3rPiE7J
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-between px-1">
                    <h1 className="text-sm text-white/80 mb-2">PRIVATE KEY</h1>
                    <h1 className="text-sm text-white/80 mb-2">COPY</h1>
                    </div>
                    <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">
                      7YrmZzFfJ1wzZKkR3xvZsN9hMpLpWz2uHn4xH3rPiE7J
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-auto w-auto overflow-hidden mx-20 z-50 mb-10">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/4 -translate-y-1/2 z-0"></div>
          <div className="h-auto w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
            <div className="text-2xl text-[#dcdcdc] font-bold px-3 flex items-center gap-3 mb-5">
              <img src="/images/solana-logo.png" alt="" className="h-10 w-10" />
              SOLANA
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-36 bg-blue-600 rounded-2xl text-[#dcdcdc] flex flex-col justify-center items-center p-10 gap-10">
                <div>
                  <h1 className="font-medium text-md text-[#ebebebcc] text-center">
                    Total Balance
                  </h1>
                  <h1 className="font-bold text-4xl text-white text-center font-poppins">
                    50.00 SOL
                  </h1>
                  <h1 className="font-medium text-md text-[#ebebebcc] text-center">
                    =$23456
                  </h1>
                </div>
              </div>

              <div className="h-auto border border-blue-400/30 rounded-2xl text-[#dcdcdc] bg-blue-500/15 flex flex-col justify-center p-10 gap-10">
                <h1 className="font-medium text-xl font-poppins text-white/80">
                  Wallet Credentials
                </h1>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between px-1">
                    <h1 className="text-sm text-white/80 mb-2">PUBLIC KEY</h1>
                    <h1 className="text-sm text-white/80 mb-2">COPY</h1>
                    </div>
                    <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">
                      7YrmZzFfJ1wzZKkR3xvZsN9hMpLpWz2uHn4xH3rPiE7J
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-between px-1">
                    <h1 className="text-sm text-white/80 mb-2">PRIVATE KEY</h1>
                    <h1 className="text-sm text-white/80 mb-2">COPY</h1>
                    </div>
                    <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">
                      7YrmZzFfJ1wzZKkR3xvZsN9hMpLpWz2uHn4xH3rPiE7J
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default YourWallets;
