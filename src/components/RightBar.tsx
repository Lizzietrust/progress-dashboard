import user from "../assets/profile.png";
import rightArrow from "../assets/blue-arrow.png";
import { progress } from "../constants";
import Progress from "./Progress";

interface ProgressData {
  name: string;
  per: string;
  icon: string;
  info: string;
}

const RightBar = () => {
  return (
    <div className="w-full h-full px-5 py-10 overflow-y-auto elm">
      <div className="flex flex-col items-center">
        <div className="relative mb-2">
          <img src={user} alt="" />
          <div className="absolute bottom-[2px] right-[2px] w-[18px] h-[18px] bg-[#3855B3] rounded-full text-white font-medium text-[11.48px] flex items-center justify-center">
            5
          </div>
        </div>
        <p className="text-[19.13px] text-gray-900 font-medium">
          Harrison Philips
        </p>
        <span className="text-[13.39px] text-gray-400">Business analyst</span>
      </div>

      <div className="w-full h-[84.15px] rounded-xl border border-[#e6e7e9] flex items-center justify-between p-4 my-5">
        <div className="flex flex-col gap-0">
          <p className="text-[15.3px] text-gray-900 font-medium">
            Get - 10% sell price
          </p>
          <span className="text-[11.48px] text-gray-400">
            for “spanish A2” course
          </span>
        </div>
        <img src={rightArrow} alt="right-arrow" className="pr-3" />
      </div>

      <div className="mb-2">
        <h3 className="text-[19.13px] text-gray-900 font-medium mb-2">
          Course Progress
        </h3>

        <div className="flex flex-col gap-3">
          {progress.map((data: ProgressData) => (
            <Progress key={data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
