import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { env } from '@/env';
import {
    mantleSepoliaTestnet,
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
    appName: 'zkPull.',
    appDescription: "Starting your zk journey with proof generation for GitHub Pull Requests.",
    projectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    chains: [
        mantleSepoliaTestnet,
    ],
    ssr: true,
});