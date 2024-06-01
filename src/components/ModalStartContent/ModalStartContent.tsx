import { FC } from "react";
import { ModalStartContentProps } from "./ModalStartContent.interfaces";

const ModalStartContent: FC<ModalStartContentProps> = (props) => {
  const { classNameBlur, footerText, headerText, icon } = props;

  return (
    <div className="w-full relative flex justify-between flex-col h-[385px]">
      <p className="text-[90px] leading-[90px] font-bold text-white/50 uppercase text-center w-full blur-[2px]">
        {headerText}
      </p>
      <p className="text-[90px] leading-[90px] font-bold text-white/50 uppercase text-center w-full blur-[2px]">
        {footerText}
      </p>
      <div className="absolute w-full h-full flex items-center justify-center z-[10000]">
        {icon}
      </div>
      <div className="absolute flex items-center justify-center z-[9999] w-full h-full">
        <div
          className={`${classNameBlur} blur-[42px] w-[290px] h-[230px] rounded-full`}></div>
      </div>
    </div>
  );
};

export default ModalStartContent;
