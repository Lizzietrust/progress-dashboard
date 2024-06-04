import image1 from "../assets/avatar-1.png";
import image2 from "../assets/avatar-2.png";
import image3 from "../assets/avatar-3.png";
import image4 from "../assets/plus-avatar.png";
import { task, course } from "../constants";
import Task from "./Task";
import bell from "../assets/bell.png";
import rightIcon from "../assets/right-icon.png";
import flag from "../assets/flag.png";
import blueArrow from "../assets/blue-right.png";
import Course from "./Course";

const DashboardContent = () => {
  return (
    <div className="w-full">
      <h2 className="text-[22.95px] font-medium text-gray-900 my-7 pt-3 mb-3 sm:mb-5">
        Progress Dashboard
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 w-full">
        <div className="bg-[#28439D] w-full h-[177.86px] rounded-xl p-5">
          <p className="text-[#d9d9d9] text-[11.48px] font-medium uppercase">
            Deadline <span className="text-white">12:00</span>{" "}
          </p>

          <h2 className="text-[22.95px] font-medium text-white my-1">
            Exam - Unit 5
          </h2>

          <span className="text-[#d9d9d9] text-[13.39px]">
            Spanish for beginners
          </span>

          <div className="flex mt-5 -space-x-2">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>

        <div className="flex gap-5">
          {task.map((item) => (
            <Task item={item} key={item.name} />
          ))}
        </div>

        <div className="w-full h-[276.36px] rounded-xl border border-[#e6e7e9] p-5">
          <div className="flex items-center justify-between">
            <p className="text-gray-900 text-[15.3px] font-medium">
              Group info
            </p>
            <img src={bell} alt="" />
          </div>

          <span className="text-gray-400 text-[13.39px]">
            13 students in the group
          </span>

          <div className="w-full h-[109.97px] rounded-[11.48px] bg-[#FF9365] my-4 p-6 flex items-center justify-between">
            <div>
              <h4 className="text-[15.3px] font-medium text-white mb-1">
                Group homework
              </h4>
              <p className="text-[13.39px] text-gray-200">
                4 students from your group <br /> online now
              </p>
            </div>
            <img src={rightIcon} alt="right-arrow" />
          </div>

          <p className="text-gray-900 text-[15.3px] font-medium">
            Today's lesson
          </p>
          <span className="text-gray-400 text-[13.39px]">unit 6 - Article</span>
        </div>

        <div className="w-full h-[276.36px] rounded-xl border border-[#e6e7e9]">
          <div className="p-5">
            <h5 className="text-gray-900 text-[15.3px] font-medium mb-7">
              Overall progress
            </h5>

            <div className="flex items-center justify-between">
              <h2 className="text-[22.95px] text-gray-900 leading-[28px]">
                Germany for <br /> beginners
              </h2>
              <img src={flag} alt="flag image" />
            </div>

            <div>
              <div className="flex mt-4 w-full h-[7.65px] rounded-full">
                <div className="w-[75%] bg-[#3855B3] h-full rounded-l-full"></div>
                <div className="w-[25%] bg-[#F0F1F2] h-full rounded-r-full"></div>
              </div>
              <p className="text-[15.3px] font-medium text-gray-900 mt-2">
                75%
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-t-[#e6e7e9] mt-3 flex items-center justify-end gap-2">
            <span className="text-[#3855B3] text-[13.39px] font-medium">
              Explore more
            </span>
            <img src={blueArrow} alt="blue-arrow" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 w-full mt-5 pb-20">
        {course.map((item) => (
          <Course key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
