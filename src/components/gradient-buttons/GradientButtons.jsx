import arrow from "../../assets/arrow.png";
import hear from "../../assets/hear.png";
import newIcon from "../../assets/newIcon.png";
import heart from "../../assets/heart.png";
export const GradientButtons = () => {

  return (
    <div className="grid grid-cols-2 gap-4 pl-4 pr-4">
      <div
        className={`p-2 w-32 pl-0 pr-0 mb-4 cursor-pointer hover:text-gray-400 flex justify-center gap-1 items-center rounded-full text-white bg-gradient-to-r from-orange-400 to-blue-500`}
      >
        <p className="text-xs p-0">Trending</p>
        <img src={arrow} className=" h-3 w-4" alt="icon" />
      </div>
      <div
        className={`p-2 w-32 pl-0 pr-0 mb-4 cursor-pointer hover:text-gray-400 flex justify-center gap-1 items-center rounded-full text-white bg-gradient-to-r from-green-100 to-green-500`}
      >
        <p className="text-xs p-0">Sponsored</p>
        <img src={heart} className=" h-4 w-4" alt="icon" />
      </div>
      <div
        className={`p-2 w-32 pl-0 pr-0 mb-4 cursor-pointer hover:text-gray-400 flex justify-center gap-1 items-center rounded-full text-white bg-gradient-to-r from-pink-300 to-orange-400`}
      >
        <p className="text-xs p-0">Newest</p>
        <img src={newIcon} className=" h-3 w-4" alt="icon" />
      </div>
      <div
        className={`p-2 w-32 pl-0 pr-0 mb-4 cursor-pointer hover:text-gray-400 flex justify-center gap-1 items-center rounded-full text-white bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500`}
      >
        <p className="text-xs p-0">Most Liked</p>
        <img src={hear} className=" h-3 w-4" alt="icon" />
      </div>
    </div>
  );
};
