interface ProgressProps {
  data: {
    per: string;
    name: string;
    icon: string;
    info: string;
  };
}

const Progress: React.FC<ProgressProps> = ({ data }: ProgressProps) => {
  return (
    <div className="w-full h-[84.15px] rounded-xl border border-[#e6e7e9] flex items-center justify-start p-5 gap-4">
      <div
        className={`text-[15.3px] font-medium ${
          data.per === "63%"
            ? "text-[#4A4DE6]"
            : data.per === "78%"
            ? "text-[#FF8F00]"
            : "text-[#E83274]"
        }`}
      >
        {data.per}
      </div>
      <img src={data.icon} alt="" />
      <div className="flex flex-col gap-0">
        <p className="text-[15.3px] text-gray-900 font-medium">{data.name}</p>
        <span className="text-[11.48px] text-gray-400">{data.info}</span>
      </div>
    </div>
  );
};

export default Progress;
