interface TaskProps {
  item: {
    name: string;
    image: string;
    desc: string;
    time: string;
  };
}

const Task: React.FC<TaskProps> = ({ item }) => {
  return (
    <div
      className={`w-full h-[177.86px] rounded-[11.48px] p-5 ${
        item.name === "homework" ? "bg-[#F5F5F5]" : "bg-[#E1F5FD]"
      }`}
    >
      <img src={item.image} alt="" />
      <h3 className="text-gray-900 text-[15.3px] font-medium capitalize pt-2">
        {item.name}
      </h3>
      <span className="text-gray-500 text-[11.48px] font-medium">
        {item.desc}
      </span>
      <div className="mt-10 text-gray-900 font-medium text-[11.48px] uppercase">
        {item.time}
      </div>
    </div>
  );
};

export default Task;
