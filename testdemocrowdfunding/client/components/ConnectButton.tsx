import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { metaMask } from 'wagmi/connectors';

export const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: metaMask() });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <button onClick={() => disconnect()}>
        Disconnect ({address?.slice(0, 6)}...{address?.slice(-4)})
      </button>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
};