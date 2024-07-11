import { FC } from "react";
import { NavLink } from "react-router-dom";
import { navigationList } from "./Navigation.config";

const Navigation: FC = () => {
  return (
    <nav className="flex items-center gap-4 justify-center bg-black">
      {navigationList.map((item) => (
        <NavLink
          onClick={(e) => {
            if (item?.disabled) {
              e.preventDefault();
            }
          }}
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `w-[74px] py-[10px] flex flex-col justify-center items-center text-[10px] font-semibold gap-3 ${
              isActive ? "text-buttonColor" : "text-secondaryHintColor"
            } ${item?.disabled ? "text-[#707579]/75" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              {
                <item.Img
                  className={`${
                    isActive ? "fill-buttonColor" : "fill-secondaryHintColor"
                  } ${item?.disabled ? "fill-[#707579]/75" : ""}`}
                />
              }
              <div>{item.title}</div>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
