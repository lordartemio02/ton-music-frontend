import { FC, ReactNode } from "react";
import { StarsIcon } from "../../assets/icons";

interface IModalPreviewContent {
  icon: JSX.Element;
  title: string;
  description: string;
  buttons: ReactNode;
}

const ModalPreviewContent: FC<IModalPreviewContent> = ({
  icon,
  title,
  description,
  buttons,
}) => {
  return (
    <div className="min-h-[calc(100vh-76px)] w-full p-4 flex flex-col gap-9 justify-between overflow-y-auto">
      <div>
        <div className="flex items-center justify-between">
          {icon}
          <StarsIcon />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[#007AFF] leading-tight text-[60px] font-bold">
            {title}
          </div>
          <div className="text-2xl leading-7">{description}</div>
        </div>
      </div>
      {buttons}
    </div>
  );
};

export default ModalPreviewContent;
