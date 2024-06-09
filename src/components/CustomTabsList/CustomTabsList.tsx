import { TabsList } from "@telegram-apps/telegram-ui";
import { TabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import { FC, useState } from "react";
import { ICustomTabsList } from "./CustomTabsList.interface";

const CustomTabsList: FC<ICustomTabsList> = ({ dataList }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <TabsList>
        {dataList.map((item, index) => (
          <TabsItem
            key={item.title}
            onClick={() => setSelected(index)}
            selected={selected === index}
          >
            {item.title}
          </TabsItem>
        ))}
      </TabsList>
      {dataList[selected].children}
    </div>
  );
};

export default CustomTabsList;
