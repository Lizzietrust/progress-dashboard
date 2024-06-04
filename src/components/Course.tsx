import rightArrow from "../assets/blue-arrow.png";

interface CourseItem {
  name: string;
  icon: string;
  info: string;
}

interface CourseProps {
  item: CourseItem;
}

const Course: React.FC<CourseProps> = ({ item }) => {
  return (
    <div className="w-full h-[84.15px] rounded-xl border border-[#e6e7e9] flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <img src={item.icon} alt={item.name} />
        <div className="flex flex-col gap-0">
          <p className="text-[15.3px] text-gray-900 font-medium">{item.name}</p>
          <span className="text-[11.48px] text-gray-400">{item.info}</span>
        </div>
      </div>
      <img src={rightArrow} alt="right-arrow" className="pr-3" />
    </div>
  );
};

export default Course;
