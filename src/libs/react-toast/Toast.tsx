import { AlertTriangle, Check, Info, X } from "lucide-react";
import { CircleProgressBar } from "../../components/CircleProgressBar";

export type ToastProps = {
  id: string;
  message: string;
  type: 'warning' | 'success' | 'danger';
  duration: number;
  complete: () => void;
};

export const Toast = ({ message, type, duration, complete }: ToastProps) => {
  const toastName = {
    warning: 'Warning',
    success: 'Success',
    danger: 'Danger',
  }[type];

  const icon = {
    warning: <Info className="text-yellow-600" size={20} />,
    success: <Check className="text-green-600" size={20} />,
    danger: <AlertTriangle className="text-red-600" size={20} />,
  }[type];

  const color ={
    warning: 'text-yellow-700',
    success: 'text-green-700',
    danger: 'text-red-700',
  }[type];

  const bgColor ={
    warning: 'bg-yellow-100',
    success: 'bg-green-100',
    danger: 'bg-red-100',
  }[type];

  // const classNames = {
  //   appear: "opacity-0",
  //   appearActive: "transition-opacity duration-300 opacity-100",
  //   enter: "opacity-0",
  //   enterActive: "transition-opacity duration-300 opacity-100",
  //   // exit: "opacity-100",  // this breaks the exit transition
  //   exitActive: "transition-opacity duration-200 opacity-0",
  // };

  return (
    <div className={`w-full h-auto rounded-lg px-4 py-3 ${bgColor}`} >
      <div className="flex justify-between">
        <h2 className="truncate text-lg font-bold flex items-center gap-3">
          {icon}
          <span className={color}>{toastName}</span>
        </h2>
        <div className="relative w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => complete()}>
          <X size={16}/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
            <CircleProgressBar size={8} duration={duration} complete={() => complete()}></CircleProgressBar>
          </div>
        </div>
      </div>
      <p>{message}</p>
    </div>
  )
};