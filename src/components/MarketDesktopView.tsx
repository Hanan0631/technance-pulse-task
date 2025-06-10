import MarketTable from "./MarketTable";

function MarketDesktopView({ initialPage }: { initialPage: number }) {
  return (
    <div className="flex justify-center">

    <div className="hidden lg:flex max-w-[1200] w-full gap-4 items-center p-4 pt-8">
      <MarketTable initialPage={2} showControls={false} />
      <MarketTable initialPage={3} showControls={false} />
      <MarketTable initialPage={1} showControls={false} />
    </div>
    </div>
  );
}

export default MarketDesktopView;
