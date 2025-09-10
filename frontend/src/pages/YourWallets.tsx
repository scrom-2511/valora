import { useNavigate, useParams } from "react-router-dom";
import { useAccountStore, useCurrentIndexStore, useTotalTokenStore, type Account, type Wallet } from "../zustand/store";
import { generateSolanaWallet } from "../lib/generateSolanaWallet";
import { generateEthereumWallet } from "../lib/generateEthereumWallet";
import React, { useEffect, useState } from "react";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";

/**
 * Renders the YourWallets component to view and add accounts.
 * Handles wallet creation logic and navigation.
 */
const YourWallets = () => {
  // ------------------------
  // Hooks: Router & State Stores
  // ------------------------
  const navigate = useNavigate();
  const { accID } = useParams();
  const { account, addAccount } = useAccountStore();
  const { currentIndex, setCurrentIndex } = useCurrentIndexStore();
  const { addToken } = useTotalTokenStore();

  // ------------------------
  // Handlers
  // ------------------------

  /**
   * @param none
   * Handles the creation of a new account with Solana & Ethereum wallets.
   */
  const handleOnClickCreateAccount = async (): Promise<void> => {
    const mnemonic = localStorage.getItem("mnemonic");

    // Validate mnemonic from localStorage
    if (!mnemonic) {
      console.error("Mnemonic not found in localStorage.");
      return;
    }

    const mnemonicArray = mnemonic.split(" ");
    if (!Array.isArray(mnemonicArray) || mnemonicArray.length === 0) {
      console.error("Invalid mnemonic format.");
      return;
    }

    // Generate Solana wallet
    const {
      amount: amountSol,
      privateKey: privateKeySol,
      publicKey: publicKeySol,
      walletName: walletNameSol,
      walletIconLocation: walletIconLocationSol,
    } = await generateSolanaWallet(mnemonicArray, currentIndex);

    // Generate Ethereum wallet
    const {
      amount: amountEth,
      privateKey: privateKeyEth,
      publicKey: publicKeyEth,
      walletName: walletNameEth,
      walletIconLocation: walletIconLocationEth,
    } = await generateEthereumWallet(mnemonicArray, currentIndex);

    // Construct account object
    const newAccount: Account = {
      accountName: "New Account",
      accountNumber: currentIndex,
      accountDetails: {
        Solana: {
          amount: amountSol,
          privateKey: privateKeySol,
          publicKey: publicKeySol,
          walletIconLocation: walletIconLocationSol,
          walletName: walletNameSol,
        },
        Ethereum: {
          amount: amountEth,
          privateKey: privateKeyEth,
          publicKey: publicKeyEth,
          walletIconLocation: walletIconLocationEth,
          walletName: walletNameEth,
        },
      },
    };

    // Update state: Add new account and increment index
    addToken(amountSol, amountEth);
    addAccount(newAccount);
    navigate(`/yourwallets/${currentIndex}`);
    setCurrentIndex(currentIndex + 1);
  };

  const [selectedComponent, setSelectedComponent] = useState<string>("");

  // ------------------------
  // Render
  // ------------------------
  return (
    <div className="h-full w-full grid grid-rows-[130px_auto] justify-center">
      {/* Header with account name and Add Account button */}
      <div className="mx-20 mt-10">
        <div className="flex py-3 justify-between gap-20">
          <h1 className="text-4xl font-extrabold font-poppins mb-5 bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_10px_rgba(0,97,255,0.59)]">
            {account[Number(accID)].accountName}
          </h1>

          <button
            className="h-10 w-auto bg-gradient-to-b from-blue-400 to-blue-700 text-white px-3 rounded-xl text-sm font-bold hover:cursor-pointer hover:transition hover:duration-300 hover:scale-110"
            onClick={handleOnClickCreateAccount}
          >
            ADD ACCOUNT
          </button>
        </div>
      </div>

      {/* Wallet Cards Section */}
      <div className="h-full w-full gap-10 overflow-y-scroll scroll-smooth">
        {account.map(
          (acc, index) =>
            Number(accID) === acc.accountNumber &&
            Object.entries(acc.accountDetails).map(([walletType, walletDetails]) => (
              <div key={`${index}-${walletType}`} className="relative h-auto w-auto max-w-[1200px] overflow-hidden mx-20 z-50 mb-10">
                {/* Background Blur Effect */}
                <div className="absolute h-[200px] w-full bg-blue-500 rounded-full blur-[170px] left-1/2 transform -translate-x-1/2 top-1/3 -translate-y-1/2 z-0"></div>

                {/* Wallet Card */}
                <div className="h-auto min-w-[1000px] rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-black/40 p-10">
                  {/* Wallet Name and Icon with Add Balance btn */}
                  <div className="flex justify-between items-center mb-5">
                    {/* Wallet Name and Icon */}
                    <div className="text-2xl text-[#dcdcdc] font-bold px-3 flex items-center gap-3">
                      <img src={walletDetails.walletIconLocation} alt="" className="h-10 w-10" />
                      {walletDetails.walletName}
                    </div>
                    {selectedComponent !== walletDetails.privateKey && (
                      <button
                        className="h-8 w-auto bg-blue-500 text-white px-3 rounded-xl text-sm font-medium transition duration-300 transform hover:scale-110 cursor-pointer"
                        onClick={() => {
                          setSelectedComponent(walletDetails.privateKey);
                        }}
                      >
                        ADD BALANCE
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* Wallet Balance */}
                    <WalletBalance walletDetails={walletDetails} />

                    {/* Wallet Credentials */}
                    <WalletCredentials
                      walletDetails={walletDetails}
                      selectedComponent={selectedComponent}
                    />
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default YourWallets;

const WalletBalance = ({ walletDetails }: { walletDetails: Wallet }) => {
  return (
    <div className="h-36 bg-blue-600 rounded-2xl text-[#dcdcdc] flex flex-col justify-center items-center p-10 gap-10">
      <div>
        <h1 className="font-medium text-md text-[#ebebebcc] text-center">Total Balance</h1>
        <h1 className="font-bold text-4xl text-white text-center font-poppins">{walletDetails.amount}</h1>
        <h1 className="font-medium text-lg text-[#ebebebcc] text-center">=$23456</h1>
      </div>
    </div>
  );
};

const WalletCredentials = ({
  walletDetails,
  selectedComponent,
}: {
  walletDetails: Wallet;
  selectedComponent: string;
}) => {
  const handleOnClickAddBalanceBtn = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const publicKey = new PublicKey(walletDetails.publicKey);
    const airDropSignature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(
      {
        signature: airDropSignature,
        // "lastValidBlockHeight" + "blockhash" come from getLatestBlockhash
        blockhash: (await connection.getLatestBlockhash()).blockhash,
        lastValidBlockHeight: (await connection.getLatestBlockhash()).lastValidBlockHeight,
      },
      "confirmed"
    );

  };
  return (selectedComponent === walletDetails.privateKey) ? (
    <div className="h-auto border border-blue-400/30 rounded-2xl text-[#dcdcdc] bg-blue-500/15 flex flex-col justify-center p-10 gap-10">
      <h1 className="font-medium text-xl font-poppins text-white/80">Add Balance</h1>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between px-1">
            <h1 className="text-sm text-white/80 mb-2">Enter the amount you want to add:</h1>
          </div>
          <input type="text" className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto focus:outline-0 w-full" />
        </div>

        <button
          className="h-10 w-auto bg-blue-600 text-white px-3 rounded-xl text-sm font-bold hover:cursor-pointer hover:bg-blue-500"
          onClick={handleOnClickAddBalanceBtn}
        >
          ADD BALANCE
        </button>
      </div>
    </div>
  ) : (
    <div className="h-auto border border-blue-400/30 rounded-2xl text-[#dcdcdc] bg-blue-500/15 flex flex-col justify-center p-10 gap-10">
      <h1 className="font-medium text-xl font-poppins text-white/80">Wallet Credentials</h1>
      <div className="flex flex-col gap-4">
        {/* Public Key */}
        <div>
          <div className="flex justify-between px-1">
            <h1 className="text-sm text-white/80 mb-2">PUBLIC KEY</h1>
            <h1 className="text-sm text-white/80 mb-2">COPY</h1>
          </div>
          <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">{walletDetails.publicKey}</h1>
        </div>

        {/* Private Key */}
        <div>
          <div className="flex justify-between px-1">
            <h1 className="text-sm text-white/80 mb-2">PRIVATE KEY</h1>
            <h1 className="text-sm text-white/80 mb-2">COPY</h1>
          </div>
          <h1 className="text-md text-[#ebebebcc] p-2 px-4 rounded-[10px] bg-[#06122c] font-roboto">{walletDetails.privateKey}</h1>
        </div>
      </div>
    </div>
  );
};
