import Image from "next/image";

interface ValidationItemProps {
  label: string;
  isValid: boolean;
}

export default function ValidationItem({ label, isValid }: ValidationItemProps) {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-100 last:border-none">
      <span className="font-medium text-gray-900">{label}</span>
      <div className={`flex items-center gap-2 font-medium ${
        isValid ? "text-green-600" : "text-red-600"
      }`}>
        <Image
          src={isValid ? "/images/checklist.png" : "/images/remove.png"}
          width={20}
          height={20}
          alt={isValid ? "Valid" : "Invalid"}
          className="object-contain"
        />
        <span>{isValid ? "Valid" : "Invalid"}</span>
      </div>
    </div>
  );
}