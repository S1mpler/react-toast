import { createContext } from "react";
import { CreateToast } from "./types/toast";

type ToastContextType = {
  showToast: (toast: CreateToast) => void;
  hideToast: (toastId: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
