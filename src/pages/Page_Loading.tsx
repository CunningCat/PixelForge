import { LoaderCircle } from "lucide-react";
export default function Page_Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex items-center">
        <LoaderCircle className="w-16 h-16 text-gray-500 animate-spin rounded-full" />
        <div className="flex text-5xl text-gray-500 ml-2 space-x-1">
        {['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'].map((char, index) => (
          <span
            key={index}
            className={`animate-bounce inline-block`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
        </div>
      </div>
    </div>
  );
}