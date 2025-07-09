import { createConfig, configureChains } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { metaMask } from 'wagmi/connectors';

const { chains, publicClient } = configureChains(
  [sepolia, mainnet],
  [publicProvider()]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [metaMask()],
  publicClient,
});

