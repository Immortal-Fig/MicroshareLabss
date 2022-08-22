import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo, ConnectWallet } from "components";
import styles from "./index.module.css";
import './Appp.css';

const walletPublicKey = "";

export const HomeView: FC = ({ }) => {
  const { publicKey } = useWallet();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box flex justify-around">
          <div className="flex-1 px-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xs sm:text-xl">
                <li>
                  <Link href="/">
                    <a>Microshare AIO</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
            <ConnectWallet onUseWalletClick={onUseWalletClick} />
          </div>
        </div>

        <div className="About">
            <form className="form">
                <div className="form-group">
                    <label htmlFor="title">A Solana all in one toolkit.</label>
                </div>
            </form>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Microshare Labs
                </h1>
                <p className="mb-2">
                  Solana AIO
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <h1 className="mb-2 pb-8 text-5xl">Available tools :</h1> */}
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Burn NFT
                    </a>
                    <div>Burn Solana NFTs</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/burnSPL">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Burn Token
                    </a>
                    <div>Burn SPL tokens</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/closeaccount">
                  <div className="p-4 hover:border">
                    <a className="text-4xl font-bold mb-5">
                      Close empty account
                    </a>
                    <div>Close empty account</div></div>
                </Link>

              </li>
              <li className="mb-5">
                <Link href="/spltoken">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      SPL Token Creator
                    </a>
                    <div>Create your own Solana token</div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/multisender">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                    Multi Sender
                    </a>
                    <div>Sends multiple tokens in 1 transaction </div>
                  </div>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/upload">
                  <div className="p-4 hover:border">
                    <a className="mb-5 text-4xl font-bold">
                      Files
                    </a>
                    <div>Upload file to Arweave</div>
                  </div>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};