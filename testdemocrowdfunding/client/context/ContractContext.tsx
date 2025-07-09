import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import contractABI from "@/utils/contractABI.json";
import { formatEther, parseEther } from "viem";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_KEY as `0x${string}`;

export const ContractContext = createContext({});

interface ChildrenType {
  children: ReactNode;
}

export const ContractContextProvider = ({ children }: ChildrenType) => {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const [campaignId, setCampaignId] = useState('');
  const [donationData, setDonationData] = useState<any[]>([]);
  const [userCampaign, setUserCampaign] = useState<any[]>([]);
  const [allCampaignsData, setAllCampaignsData] = useState<any[]>([]);
  const [loading, setLoading] = useState({
    create: false,
    donate: false,
    fetch: false,
    donators: false,
  });

  // Create Campaign
  const createCampaign = async (title: string, description: string, target: string, deadline: number, image: string) => {
    if (!walletClient) return;
    setLoading((prev) => ({ ...prev, create: true }));

    try {
      const tx = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "createCampaign",
        args: [title, description, target, deadline, image],
      });
      await publicClient.waitForTransactionReceipt({ hash: tx });
    } catch (err) {
      console.error("createCampaign error", err);
    } finally {
      setLoading((prev) => ({ ...prev, create: false }));
    }
  };

  // Donate to Campaign
  const donateCampaignCall = async (id: string, donateAmount: string) => {
    if (!walletClient) return;
    setLoading((prev) => ({ ...prev, donate: true }));

    try {
      const tx = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "donateToCampaign",
        args: [id],
        value: parseEther(donateAmount),
      });
      await publicClient.waitForTransactionReceipt({ hash: tx });
    } catch (err) {
      console.error("donateCampaignCall error", err);
    } finally {
      setLoading((prev) => ({ ...prev, donate: false }));
    }
  };

  // Fetch all campaigns
  const fetchCampaigns = async () => {
    if (!publicClient) return;
    setLoading((prev) => ({ ...prev, fetch: true }));

    try {
      const data: any = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "getCampaigns",
        args: [],
      });

      setAllCampaignsData(data);

      const userOwned = data
        .map((c: any, i: number) => ({ id: i, data: c }))
        .filter((c: any) => c.data.owner.toLowerCase() === address?.toLowerCase());

      setUserCampaign(userOwned);
    } catch (err) {
      console.error("fetchCampaigns error", err);
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  };

  // Fetch donators for a campaign
  const fetchDonators = async () => {
    if (!campaignId || !publicClient) return;
    setLoading((prev) => ({ ...prev, donators: true }));

    try {
      const data: any = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: "getDonators",
        args: [campaignId],
      });

      const parsed = data[0].map((addr: string, idx: number) => ({
        donator: addr,
        donation: formatEther(data[1][idx].toString()),
      }));

      setDonationData(parsed);
    } catch (err) {
      console.error("fetchDonators error", err);
    } finally {
      setLoading((prev) => ({ ...prev, donators: false }));
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [address]);

  useEffect(() => {
    fetchDonators();
  }, [campaignId]);

  return (
    <ContractContext.Provider
      value={{
        address,
        campaignId,
        setCampaignId,
        createCampaign,
        donateCampaignCall,
        fetchCampaigns,
        fetchDonators,
        loading,
        allCampaignsData,
        donationData,
        userCampaign,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
