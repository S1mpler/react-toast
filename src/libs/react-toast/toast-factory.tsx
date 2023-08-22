import { CreateToast, Toast } from "./types/toast";
import { AlertTriangle, Check, Info } from "lucide-react";

const DEFAULT_TOAST_DURATION_IN_SECONDS = 6;

/**
 * Factory function for creating toasts of different types.
 * @param type - The type of toast: 'success', 'warning', or 'danger'.
 * @returns A function that creates a toast of the specified type.
 */
export const toastFactory = (type: 'success' | 'warning' | 'danger'): ToastCreator => ({
  success: new SuccessToastCreator(),
  warning: new WarningToastCreator(),
  danger: new DangerToastCreator(),
}[type]);

abstract class ToastCreator {
  /**
   * Abstract function to create a toast of the specified type.
   * @param props - The configuration for creating the toast.
   */
  public abstract createToast(props: CreateToast): Toast;
}

class SuccessToastCreator extends ToastCreator {
  public createToast(props: CreateToast): Toast {
    return {
      id: crypto.randomUUID(),
      message: props.message,
      duration: props.duration ?? DEFAULT_TOAST_DURATION_IN_SECONDS,
      title: props.title ?? 'Success',
      type: 'success',
      icon: <Check className="text-green-600" size={20} />,
      color: {
        background: 'bg-green-100',
        text: 'text-green-700',
      }
    };
  }
}

class WarningToastCreator extends ToastCreator {
  public createToast(props: CreateToast): Toast {
    return {
      id: crypto.randomUUID(),
      message: props.message,
      duration: props.duration ?? DEFAULT_TOAST_DURATION_IN_SECONDS,
      title: props.title ?? 'Warning',
      type: 'warning',
      icon: <Info className="text-yellow-600" size={20} />,
      color: {
        background: 'bg-yellow-100',
        text: 'text-yellow-700',
      }
    };
  }
}

class DangerToastCreator extends ToastCreator {
  public createToast(props: CreateToast): Toast {
    return {
      id: crypto.randomUUID(),
      message: props.message,
      duration: props.duration ?? DEFAULT_TOAST_DURATION_IN_SECONDS,
      title: props.title ?? 'Danger',
      type: 'danger',
      icon: <AlertTriangle className="text-red-600" size={20} />,
      color: {
        background: 'bg-red-100',
        text: 'text-red-700',
      }
    };
  }
}