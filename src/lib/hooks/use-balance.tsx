import { MANTLE_USD_ADDRESS, MANTLE_USD_ABI } from "@/config/const";
import { useReadContract } from "wagmi";
// import React from "react";
// import { lazyTokenBalanceParams } from "@/utils/types";

export const useBalance = (address: string) => {
  const { data: LazyTokenBalance } = useReadContract({
    address: MANTLE_USD_ADDRESS,
    abi: MANTLE_USD_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  return {
    LazyTokenBalance,
  };
};
