import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ToastContext } from './toast-context';
import { toastFactory } from "./toast-factory";
import { CreateToast, Toast as ToastType } from "./types/toast";
import { Toast } from "./Toast";

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const toastsContainerRef = useRef<HTMLDivElement>(null);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  /**
   * Display a new toast using the specified toast creation configuration.
   * @param toast - The configuration for creating the toast.
   */
  const showToast = (toast: CreateToast): void => {
    const newToast = toastFactory(toast.type).createToast(toast);
    setToasts([newToast, ...toasts]);
  };

  /**
   * Hide the toast with the specified ID.
   * @param toastId - The ID of the toast to hide.
   */
  const hideToast = (toastId: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  };

  /**
   * Scroll to the bottom of the toasts container.
   */
  const scrollToBottom = () => {
    if (toastsContainerRef?.current) {
      const scrollContainer = toastsContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the toasts container when a new toast is added or a toast is removed.
    scrollToBottom();
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      {toasts?.length > 0 &&
        <div
          ref={toastsContainerRef}
          className="scroll-smooth fixed left-1/2 -translate-x-1/2 bottom-0 p-3 flex flex-col gap-4 items-center max-w-full sm:max-w-md lg:max-w-lg w-full overflow-y-hidden max-h-[50vh-20px]">
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} complete={() => hideToast(toast.id)}/>
          ))}
        </div>
      }
    </ToastContext.Provider>
  );
};