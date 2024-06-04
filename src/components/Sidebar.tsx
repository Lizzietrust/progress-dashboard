import logo from "../assets/Union.png";
import arrow from "../assets/Button-icon.png";
import { links, shortcut } from "../constants";
import { useLocation } from "react-router-dom";
import avatar from "../assets/Avatar.png";

interface SidebarProps {
  setMenu: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setMenu }) => {
  const location = useLocation();

  return (
    <div className="bg-[#183087] h-full p-4 flex flex-col justify-between w-full">
      <div>
        <div className="pb-5 border-b border-b-[#e6e7e9] mb-4">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center justify-between p-3 w-full h-[56.17px] bg-[#4a4de6] rounded-[6.42px]">
          <div className="w-[25.68px] h-[25.68px] rounded-full bg-[#ECD348] flex items-center justify-center text-[9.63px] text-gray-900">
            DW
          </div>

          <div className="flex flex-col gap-0">
            <p className="font-medium text-[11.23px] text-white">
              Dlex Designs
            </p>
            <span className="font-medium text-[9.63px] text-gray-200">
              general team
            </span>
          </div>

          <button>
            <img src={arrow} alt="arrow" />
          </button>
        </div>

        <div className="flex flex-col pt-4">
          {links.map(({ image, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 py-1 relative"
              onClick={() => setMenu(false)}
            >
              <img src={image} alt="" />
              <span
                className={`${
                  location.pathname.includes(name)
                    ? "text-white"
                    : "text-gray-400"
                } text-[11.23px] capitalize cursor-pointer`}
              >
                {name}
              </span>
              {name === "chat" && (
                <div className="absolute top-[6px] right-0 w-[15px] h-[15px] bg-[#FFA000] rounded-full text-white font-medium text-[11.48px] flex items-center justify-center">
                  5
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col pt-4">
          <h4 className="text-[9.63px] font-medium text-gray-500 uppercase mb-1">
            shortcut
          </h4>
          {shortcut.map(({ image, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 py-1 cursor-pointer"
              onClick={() => setMenu(false)}
            >
              <img src={image} alt="" />
              <span className="text-gray-400 text-[11.23px] capitalize">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="w-full h-[77.03px] rounded-[6.42px] bg-[#342BC2] p-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11.23px] font-medium text-white">Storage</p>
            <span className="text-[9.63px] font-medium text-gray-400">
              Upgrade
            </span>
          </div>

          <div className="text-[9.63px] text-white mb-2">
            3.4 GB <span className="text-gray-500">of 15 GB</span>
          </div>

          <div className="flex w-full h-[2.41px]">
            <div className="w-[22.67%] bg-white h-full"></div>
            <div className="w-[77.33%] bg-gray-500 h-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-t-black">
          <div className="flex items-center gap-2">
            <img src={avatar} alt="user-image" />
            <span className="text-[12.84px] font-medium text-white">
              Jane Smith
            </span>
          </div>

          <button>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
