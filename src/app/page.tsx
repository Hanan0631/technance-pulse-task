import IntroSection from "../components/IntroSection";
import MarketTable from "../components/MarketTable";
import { GoDotFill } from "react-icons/go";
import {
  initialData,
  ITEMS_PER_PAGE,
} from "../lib/mockMarket";
import MarketDesktopView from "../components/MarketDesktopView";

function Home({ searchParams }: { searchParams: { page?: string } }) {
  const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(
    Math.max(parseInt(searchParams.page || "1", 10), 1),
    totalPages
  );

  return (
    <div className="relative ">
      <div className="absolute top-[-70px] left-0 w-full h-64 bg-radial from-[#545459] via-[#1c1c1e] to-[#050505] opacity-90 blur-2xl z-0"></div>
      <div className="relative flex flex-col justify-center  mt-6 gap-0 z-10">
        <IntroSection />
        <div className="p-6 max-w-2xl mx-auto lg:hidden">
          <MarketTable initialPage={currentPage} />
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <a
                key={i}
                href={`/?page=${i + 1}`}
                className={`mx-[-4] ${
                  currentPage === i + 1 ? "text-blue-500 " : ""
                }`}
              >
                <GoDotFill />
              </a>
            ))}
          </div>
        </div>
          <MarketDesktopView initialPage={currentPage}/>
      </div>
    </div>
  );
}

export default Home;
