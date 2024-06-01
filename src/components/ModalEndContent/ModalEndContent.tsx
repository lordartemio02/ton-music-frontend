import { FC } from "react";
import { ModalEndContentProps } from "./ModalEndContent.interfaces";

const ModalEndContent: FC<ModalEndContentProps> = (props) => {
  const { footerText, headerText } = props;

  return (
    <div className="w-full flex flex-col gap-5">
      <p className="text-[34px] leading-[41px] font-bold text-white uppercase text-center w-full">
        {headerText}
      </p>
      <p className="text-[17px] leading-[22px] text-white text-center w-full">
        {footerText}
      </p>
    </div>
  );
};

export default ModalEndContent;
