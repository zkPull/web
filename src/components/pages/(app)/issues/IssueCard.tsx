import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ethers } from "ethers";
import { Issue } from "@/utils/types";
import Image from "next/image";

interface IssueCardProps {
  issue: Issue;
  index: number;
}

export default function IssueCard({ issue, index }: IssueCardProps) {
  const renderIssueStatus = (deadline: bigint) => {
    const deadlineDate = new Date(Number(deadline) * 1000);
    const timeRemaining = formatDistanceToNow(deadlineDate);
    return deadlineDate > new Date() ? `ends in ${timeRemaining}` : "CLOSED";
  };

  const shortenAddress = (address: string, length: number = 5) => {
    if (!address) return "";
    return `${address.substring(0, length)}...${address.substring(
      address.length - length
    )}`;
  };

  return (
    <Link href={`/issues/${issue.id}`} key={index}>
      <div className="relative overflow-hidden border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer">
        <Image
          src="/images/Background/bg-zkpull.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
        
        <div className="relative z-10 p-6 space-y-4">
          <h1 className="text-xl font-bold text-white">{issue.projectName}</h1>
          <p className="text-sm text-white">
            Owner: {shortenAddress(issue.owner)}
          </p>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-white/80 mb-1">Reward</p>
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-xl text-white">
                  {parseInt(ethers.formatEther(issue.bountyAmount).toString())} mUSD
                </h2>
                <Image
                  src="/images/Logo/mantle-usd-logo.webp"
                  alt="Mantle USD"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded text-sm text-gray-700">
              {renderIssueStatus(issue.deadline)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}