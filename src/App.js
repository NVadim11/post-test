import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import '@solana/wallet-adapter-react-ui/styles.css'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from '@solana/web3.js'
import React, { useMemo } from 'react'
import './App.css'
import SolanaWalletButton from './btn'


function App() {
  console.log('12345');
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default App;

const Context = ({children}) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  // const endpoint = "http://localhost:3000"; // local cluster override

  const wallets = useMemo( () => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <ConnectionProvider endpoint={ endpoint }>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

const Content = () => {
  return (
    <div className="App">
      <SolanaWalletButton />
      <WalletMultiButton />
    </div>
  );
}