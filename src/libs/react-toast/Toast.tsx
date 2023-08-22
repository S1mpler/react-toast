import { X } from "lucide-react";
import { CircleProgressBar } from "../../components/CircleProgressBar";
import { Toast as ToastType } from "./types/toast";
import { useEffect , useState} from 'react';

export type ToastProps = ToastType & {
  complete: () => void;
};

export const Toast = (props: ToastProps) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);

    return () => {
      setShown(false);
    }
  }, []);

  return (
    <div className={`transition-show ${shown ? 'py-3 h-full opacity-100' : 'py-2 h-0 max-h-0 opacity-50'} px-4 duration-300 overflow-y-hidden w-full rounded-lg ${props.color.background}`} >
      <div className={`flex justify-between transition-opacity delay-400 ${shown ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className={`truncate text-lg font-bold flex gap-3 items-center ${props.color.text}`}>
          <span>{props.icon}</span>
          <div className="truncate pr-3">{props.title}</div>
        </h2>
        <div className="relative w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => props.complete()}>
          <X size={16}/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
            <CircleProgressBar size={8} duration={props.duration} complete={() => props.complete()}></CircleProgressBar>
          </div>
        </div>
      </div>
      <p className={`transition-opacity delay-400 ${shown ? 'opacity-100' : 'opacity-0'}`}>{props.message}</p>
    </div>
  )
};