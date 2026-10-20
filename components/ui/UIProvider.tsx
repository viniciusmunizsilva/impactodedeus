"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { EncontroSelecionado } from "@/lib/calendar";
import EventDialog from "@/components/EventDialog";
import Toast from "@/components/Toast";

interface UIContextValue {
  openEncontro: (dialog: EncontroSelecionado) => void;
  showToast: (msg: string) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI precisa de um <UIProvider>");
  return ctx;
}

export default function UIProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<EncontroSelecionado | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openEncontro = useCallback((d: EncontroSelecionado) => setDialog(d), []);
  const closeDialog = useCallback(() => setDialog(null), []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <UIContext.Provider value={{ openEncontro, showToast }}>
      {children}
      {dialog && (
        <EventDialog
          dialog={dialog}
          onClose={closeDialog}
          onIcsDownload={() => showToast("Arquivo .ics baixado 💛")}
        />
      )}
      {toast && <Toast message={toast} />}
    </UIContext.Provider>
  );
}
