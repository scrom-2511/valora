import { useAccountStore } from "../zustand/store";

const YourAccounts = () => {
  const {account} = useAccountStore();
  return (
    <div className="h-full w-full grid grid-rows-[130px_auto] justify-center">
      <div className="mx-20 mt-10">
        <div className="flex py-3 justify-between gap-20">
          <h1 className="text-4xl font-extrabold font-poppins mb-5 bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_10px_rgba(0,97,255,0.59)]">
            YOUR ACCOUNTS
          </h1>

          <button className=" h-10 w-auto bg-gradient-to-b from-blue-400 to-blue-700 text-white px-3 rounded-xl text-sm font-bold hover:cursor-pointer hover:transition hover:duration-300 hover:scale-110">
            <span className="">+ </span>ADD ACCOUNT
          </button>
        </div>
      </div>
      <div className="h-full w-full gap-10 overflow-y-scroll">



        <div className="flex w-auto gap-5 mx-20">

        <div className="relative h-auto w-full overflow-hidden z-50 mb-10">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
          <div className="h-auto w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
            <div className="text-xl text-[#dcdcdc] font-medium px-3 flex flex-col justify-center gap-3 font-geist">
              <div className="flex items-center gap-3">
                <img src="/images/wallet.svg" alt="" className="h-10 w-10 bg-[#254792] rounded-xl p-2" />
              <h1>Total Solana</h1>
              </div>
              <h1 className="text-3xl font-bold">50000</h1>
              <h1 className="text-sm">Across {account.length/2} accounts</h1>
            </div>
          </div>
        </div>

        <div className="relative h-auto w-full overflow-hidden z-50 mb-10">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"></div>
          <div className="h-auto w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
            <div className="text-xl text-[#dcdcdc] font-medium px-3 flex flex-col justify-center gap-3 font-geist">
              <div className="flex items-center gap-3">
                <img src="/images/wallet.svg" alt="" className="h-10 w-10 bg-[#254792] rounded-xl p-2" />
              <h1>Total Ethereum</h1>
              </div>
              <h1 className="text-3xl font-bold">50000</h1>
              <h1 className="text-sm">Across {account.length/2} accounts</h1>
            </div>
          </div>
        </div>
        </div>



        <div className="relative h-auto w-[1200px] overflow-hidden mx-20 z-50 mb-10">
          <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/3 -translate-y-1/2 z-0"></div>
          <div className="h-auto w-auto rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
            <div className="text-2xl text-[#dcdcdc] font-bold px-3 flex items-center gap-3 mb-5">
              ACCOUNT 1
            </div>
            <div className="flex items-center justify-center gap-5">
              <div className="h-36 w-full px-20 bg-blue-600 rounded-2xl text-[#dcdcdc] flex justify-center items-center p-10 gap-10">
                <div>
                  <h1 className="font-medium text-md text-[#ebebebcc] text-center">
                    SOLANA
                  </h1>
                  <h1 className="font-bold text-4xl text-white text-center font-poppins">
                    50000
                  </h1>
                </div>
              </div>
              <div className="h-36 w-full px-20 bg-blue-600 rounded-2xl text-[#dcdcdc] flex justify-center items-center p-10 gap-10">
                <div>
                  <h1 className="font-medium text-md text-[#ebebebcc] text-center">
                    SOLANA
                  </h1>
                  <h1 className="font-bold text-4xl text-white text-center font-poppins">
                    50000
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAccounts;
