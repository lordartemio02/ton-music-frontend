import { FC } from "react";
import { IProgressBar } from "./ProgressBar.interface";

const ProgressBar: FC<IProgressBar> = ({ className, ...props }) => {
  return (
    <input
      type="range"
      className={`w-full overflow-hidden appearance-none h-0.5 cursor-pointer rounded-sm bg-white ${className}`}
      {...props}
    />
  );
};

export default ProgressBar;
