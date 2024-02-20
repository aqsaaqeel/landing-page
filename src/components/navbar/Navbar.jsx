import logo from "../../assets/logo.png"
import search from "../../assets/search.png";
export const Navbar = () => {
  return (
    <div className="flex w-full m-4 ba">
      <div className="flex w-full justify-around text-white items-center">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="flex items-center w-6"
          />
          <div className="text-xl font ">Bandiya</div>
        </div>
        <div className="text-xl font">Trending</div>
        <div className="text-xl font">Collaborate</div>
        <div className="text-xl font">Buy</div>
        <div className="text-xl font">List</div>
        <button className="bg-gradient-to-r from-yellow-700 via-gray-300 to-white text-white font-bold py-2 px-4 rounded-3xl">
          Upgrade
        </button>
        <div>
          <div className="relative mr-5">
            <input
              type="text"
              className="py-2 px-10 rounded-3xl bg-gray-900 border-white focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Search Ideas or opportunites..."
            />
            <img
              src={search}
              alt="search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
