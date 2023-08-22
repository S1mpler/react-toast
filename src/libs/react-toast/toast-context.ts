import { createContext } from "react";

type ToastContextType = {
  showToast: (message: string, type: 'warning' | 'success' | 'danger', duration?: number) => void;
  hideToast: (toastId: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
