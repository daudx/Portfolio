export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#141414] text-white flex items-center justify-center font-semibold text-xs animate-pulse">
          DS
        </div>
        <span className="text-sm font-medium text-[#707070]">Loading workspace...</span>
      </div>
    </div>
  );
}
