"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/100 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        {/* <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" /> */}
        <div className="w-12 h-12 rounded-full animate-spin bg-gradient-to-r from-green-500 to-emerald-400 p-1">
          <div className="w-full h-full bg-white rounded-full" />
        </div>

        {/* Text */}
        <p className="text-green-600 font-medium tracking-wide">
          Loading, please wait…
        </p>
      </div>
    </div>
  );
}