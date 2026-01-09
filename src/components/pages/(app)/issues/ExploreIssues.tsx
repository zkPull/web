"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetAllIssue } from "@/lib/hooks/use-get-all-issue";
import { useWallet } from "@/lib/hooks/use-wallet";
import { useSearchParams } from "next/navigation";
import { Issue } from "@/utils/types";
import CornerLayout from "./CornerLayout";
import WalletConnectSection from "./WalletConnectSection";
import IssuesList from "./IssuesList";

export default function ExploreIssues() {
  const { allIssue = [], isFetchingData } = useGetAllIssue() as {
    allIssue: Issue[];
    isFetchingData: boolean;
  };
  const { address } = useWallet();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  React.useEffect(() => {
    if (code) {
      sessionStorage.setItem("code", code);
      sessionStorage.setItem("code_timestamp", Date.now().toString());
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
    }
  }, [code]);

  if (!address) {
    return (
      <CornerLayout>
        <WalletConnectSection />
      </CornerLayout>
    );
  }

  return (
    <CornerLayout>
      <div className="bg-white overflow-hidden">
        <div className="relative h-[100px] md:h-[200px]">
          <Image
            src="/images/Background/bg-explore-bounty.png"
            alt="Explore Issues Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <main className="px-8 py-12 bg-gray-50">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Bounty Issues</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover open source projects that need your expertise. Contribute to meaningful projects and earn rewards for your valuable contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <IssuesList allIssue={allIssue} isFetchingData={isFetchingData} />
          </div>
        </main>
      </div>
    </CornerLayout>
  );
}