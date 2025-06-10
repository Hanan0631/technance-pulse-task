import { BiBarChartSquare } from "react-icons/bi";
import { HiMiniArrowLongRight } from "react-icons/hi2";


function IntroSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="flex items-center gap-1 p-2 pr-6 border rounded-3xl border-[#3E3E4E] cursor-pointer">
        <div className="text-[#A6A8DB] text-3xl">
          <BiBarChartSquare />
        </div>
        <span className="text-[#DFDFEA] font-medium">New Opportunities</span>
      </button>
      <div className="w-[380] lg:w-full font-medium text-3xl text-[#EEEFEF] text-center">
        <span className="text-[#7873FF]">TRADE </span>
        YOUR FAVORITE MARKET
      </div>
      <div>
        <p className="text-[#74757C] text-center w-sm lg:w-lg text-sm">Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've got you covered with access to 100+ global markets on one platform.</p>
      </div>
      <button className="flex justify-center items-center gap-2 bg-[#7975FF] text-[#FEFFFA] w-[200px] p-2 rounded-lg">
        View All coins
        <div className="text-xl">
          <HiMiniArrowLongRight />
        </div>
      </button>
    </div>
  );
}

export default IntroSection;
