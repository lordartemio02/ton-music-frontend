import { FC } from "react";
import { IAvatar } from "./Avatar.interface";

const Avatar: FC<IAvatar> = ({ src }) => {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden">
      <img src={src} className="w-full h-full object-cover" alt="Avatar" />
    </div>
  );
};

export default Avatar;
