import React from "react";
import { useAccountStore } from "../zustand/store";

const YourWallets = () => {
  const { account } = useAccountStore();
  return (
    <div className="h-full w-[1200px] grid grid-rows-[150px_auto]">
      <div className="mx-20 mt-10">
        <h1 className="text-[#dcdcdc] text-3xl py-5 font-bold font-poppins mb-5">
          YOUR WALLETS
        </h1>
        <div className="flex">
          <h1>SOLANA</h1>
          <h1>ETH</h1>
        </div>
      </div>
      <div className="">
        {account.map((acc)=><div className="relative h-[400px] w-auto overflow-hidden mx-20 z-50">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[130px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
          <div className="h-[400px] w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 grid grid-rows-[80px_auto] p-5">
            <div className="text-2xl text-[#dcdcdc] font-bold px-3 flex items-center gap-3">
              <img src="/images/solana-logo.png" alt="" className="h-10 w-10" />
              SOLANA
            </div>
            <div className="bg-blue-600 rounded-2xl text-[#dcdcdc] flex flex-col justify-center p-10 gap-4">
              <div>
                <h1 className="font-medium text-2xl text-[#dcdcdc]">Balance</h1>
                <h1 className="font-medium text-md text-[#ebebebcc]">50 SOL</h1>
              </div>
              <div>
                <h1 className="font-medium text-2xl text-[#dcdcdc]">
                  Public Key
                </h1>
                <h1 className="font-medium text-md text-[#ebebebcc]">{acc.publicKey}</h1>
              </div>
              <div>
                <h1 className="font-medium text-2xl text-[#dcdcdc]">
                  Private Key
                </h1>
                <h1 className="font-medium text-md text-[#ebebebcc]">{acc.privateKey}</h1>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default YourWallets;
