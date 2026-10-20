"use client";

export default function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-rise fixed bottom-7 left-1/2 z-[70] -translate-x-1/2 rounded-full border border-[rgba(255,255,255,.18)] bg-grafite-900 px-[22px] py-3 text-sm font-medium text-branco shadow-lg"
    >
      {message}
    </div>
  );
}
