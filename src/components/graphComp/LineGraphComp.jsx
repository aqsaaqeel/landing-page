import { LineGraph } from "../graphs/LineGraph";
import { HiOutlineChevronDown } from "react-icons/hi";
export const LineGraphComp = () => {
  return (
    <div className="w-auto p-10 pt-10 bg-white rounded-2xl">
      <div className="font-bold h-7 text-lg">Activities</div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="text-gray-400 h-4 text-xs pr-2">May - June 2021</div>
          <HiOutlineChevronDown className="text-xs" />
        </div>
        <div className="flex items-center">
          <div className="circle w-2 h-2 bg-red-300 rounded-full pr-2"></div>{" "}
          <div className="text-xs px-2">Guest</div>
          <div className="circle w-2 h-2 bg-green-300 rounded-full"></div>{" "}
          <div className="text-xs px-2">Users</div>
        </div>
      </div>{" "}
      <LineGraph />
    </div>
  );
};
