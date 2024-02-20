import icon from "../../assets/icon.png";
import icon2 from "../../assets/icon2.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import filter from "../../assets/filter.png";
import { GradientButtons } from "../gradient-buttons/GradientButtons";

export const Sidebar = () => {
  return (
    <div className="min-w-fit h-full bg-gradient-to-b from-yellow-100 to-green-200 flex flex-col items-center">
      <div className="text-black flex items-center justify-center text-xl p-4 gap-3">
        <p>Apply Filter</p>
        <img src={filter} className="flex h-4" />
      </div>
      <div className="bg-black w-full mb-4" style={{ height: "1px" }}></div>
      {/* Gradient buttons */}
      <GradientButtons />
      <div className="bg-black w-full mb-4" style={{ height: "1px" }}></div>

      <div className="p-4 space-y-2">
        <img src={icon} alt="triangle" />
        <img src={icon2} alt="triangle" />
      </div>
      <div className="bg-black w-full mb-4" style={{ height: "1px" }}></div>

      <div className="flex justify-center items-center">
        <img src={image1} alt="icon" className="relative w-64 " />
        <img src={image2} alt="icon" className="absolute w-64" />
      </div>
    </div>
  );
};
