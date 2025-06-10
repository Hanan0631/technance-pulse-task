import MarketTable from "./MarketTable"

function MarketDesktopView({ initialPage }: { initialPage: number }) {
  return (
    <div className="hidden lg:flex gap-4 p-4 pt-8 justify-center">
      <MarketTable initialPage={2} showControls={false}/>
      <MarketTable initialPage={3} showControls={false}/>
      <MarketTable initialPage={1} showControls={false}/>
    </div>
  )
}

export default MarketDesktopView
