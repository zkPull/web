import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ValidationItem from "./ValidationItem";

interface ValidationResultsProps {
  proof: any;
  validationResults: {
    isValidRepo: boolean;
    isValidId: boolean;
    isValidUser: boolean;
    isMerged: boolean;
  };
  isAllValid: boolean;
  isProcessing: boolean;
  handleClaim: () => void;
}

export default function ValidationResults({
  proof,
  validationResults,
  isAllValid,
  isProcessing,
  handleClaim,
}: ValidationResultsProps) {
  if (!proof || Object.keys(proof).length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm whitespace-pre-wrap">
          {JSON.stringify(proof, null, 2)}
        </pre>
      </div> */}

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          <span className="font-bold">zkTLS</span> Validation Results
        </h3>
        
        <div className="space-y-2 mb-6">
          <ValidationItem
            label="Repository GitHub Verification"
            isValid={validationResults.isValidRepo}
          />
          <ValidationItem
            label="ID GitHub Verification"
            isValid={validationResults.isValidId}
          />
          <ValidationItem
            label="Username GitHub Validation"
            isValid={validationResults.isValidUser}
          />
          <ValidationItem
            label="Pull Request Merged"
            isValid={validationResults.isMerged}
          />
        </div>

        {isAllValid && (
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            onClick={handleClaim}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="animate-spin h-4 w-4" />
                <span>Claiming...</span>
              </div>
            ) : (
              "Claim Rewards"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}