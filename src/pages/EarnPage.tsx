import { FC } from "react";
import DailyTasks from "../components/DailyTasks";
import EarnListTasks from "../components/EarnListTasks";

const EarnPage: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <DailyTasks />
      <EarnListTasks />
    </div>
  );
};

export default EarnPage;
