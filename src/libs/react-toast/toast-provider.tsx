import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ToastContext } from './toast-context';
import { Toast, ToastProps } from "./Toast";

type ToastInfo = Pick<ToastProps, 'id' | 'message' | 'type' | 'duration'>;

// Toast factory function
const createToast = (message: string, duration: number, type: 'warning' | 'success' | 'danger'): ToastInfo => {
  return { id: crypto.randomUUID(), message, type, duration };
};

// Toast strategies
const toastStrategies = {
  warning: (message: string, duration: number) => createToast(message, duration, 'warning'),
  success: (message: string, duration: number) => createToast(message, duration, 'success'),
  danger: (message: string, duration: number) => createToast(message, duration, 'danger'),
};

const DEFAULT_TOAST_DURATION_IN_SECONDS = 6;

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const toastsContainerRef = useRef<HTMLDivElement>(null);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  const showToast = (message: string, type: 'warning' | 'success' | 'danger', duration = DEFAULT_TOAST_DURATION_IN_SECONDS) => {
    const newToast = toastStrategies[type](message, duration);
    setToasts([newToast, ...toasts]);
  };

  const hideToast = (toastId: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  };

  // Function to scroll the element to the bottom
  const scrollToBottom = () => {
    if (toastsContainerRef?.current) {
      const scrollContainer = toastsContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  // Scroll to the bottom when the component mounts or updates
  useEffect(() => {
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