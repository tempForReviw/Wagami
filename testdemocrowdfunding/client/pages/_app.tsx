import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '@/wagmiConfig'
import { ContractContextProvider } from '@/context/ContractContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ContractContextProvider>
        <Component {...pageProps} />
      </ContractContextProvider>
    </WagmiConfig>
  );
}