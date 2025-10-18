"use client";

interface AdProps {
  slot: string;
  format?: "banner" | "rectangle" | "square";
  className?: string;
}

export default function Ad({
  slot,
  format = "banner",
  className = "",
}: AdProps) {
  const getAdDimensions = () => {
    switch (format) {
      case "banner":
        return "w-full h-32 md:h-40";
      case "rectangle":
        return "w-full h-60 md:h-80";
      case "square":
        return "w-full h-48 md:h-64";
      default:
        return "w-full h-32 md:h-40";
    }
  };

  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${getAdDimensions()} ${className}`}
    >
      <div className="text-center text-gray-500">
        <div className="text-2xl mb-2">📢</div>
        <div className="text-sm font-medium">Ad Slot: {slot}</div>
        <div className="text-xs mt-1">Format: {format}</div>
        <div className="text-xs mt-2 opacity-75">
          Replace with actual ad code
        </div>
      </div>
    </div>
  );
}
