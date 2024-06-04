import DashboardContent from "../components/DashboardContent"
import RightBar from "../components/RightBar"


const Main = () => {
  return (
    <div className="py-5 pl-5 pr-5 sm:pr-0 sm:flex w-full h-full">
        <div className="w-full sm:w-[70%] sm:pr-12 overflow-y-auto elm h-full">
            <DashboardContent />
        </div>

        <div className="w-[30%] h-full bg-[#f8f8fa] hidden sm:block">
            <RightBar />
        </div>
    </div>
  )
}

export default Main