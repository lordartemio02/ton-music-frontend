import { FC } from "react";
import { NoAvatarUser } from "../../assets/icons";
import { IAvatar } from "./Avatar.interface";

const Avatar: FC<IAvatar> = ({ src }) => {
  return (
    <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex justify-center items-center">
      {!src ? (
        <NoAvatarUser />
      ) : (
        <img src={src} className="w-full h-full object-cover" alt="Avatar" />
      )}
    </div>
  );
};

export default Avatar;
