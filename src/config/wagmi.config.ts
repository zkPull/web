import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { env } from '@/env';
import {
    arbitrum,
    base,
    mainnet,
    optimism,
    polygon,
    sepolia,
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
    appName: 'zkPull.',
    appDescription: "Starting your zk journey with proof generation for GitHub Pull Requests.",
    projectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    chains: [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    ssr: true,
});