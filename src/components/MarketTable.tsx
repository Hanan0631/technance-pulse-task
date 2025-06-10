"use client";
import Image from "next/image";
import { PiFireSimple } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  getRandomDelta,
  initialData,
  ITEMS_PER_PAGE,
  MarketItem,
  shuffleRanks,
} from "../lib/mockMarket";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

interface MarketTableProps {
  initialPage: number;
  showControls?: boolean;
}

type Direction = "next" | "prev";

export default function MarketTable({
  initialPage,
  showControls = true,
}: MarketTableProps) {
  const [data, setData] = useState<MarketItem[]>(
    initialData.map((item) => ({ ...item, prevPrice: item.price, delta: 0 }))
  );
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [startX, setStartX] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);

  const router = useRouter();

  const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE);

  const variants = {
    enter: (direction: Direction): any => ({
      x: direction === "next" ? 300 : -300,
      opacity: 1,
      position: "absolute",
    }),
    center: (direction: Direction): any => ({
      x: 0,
      opacity: 1,
      position: "relative",
    }),
    exit: (direction: Direction): any => ({
      x: direction === "next" ? -300 : 300,
      opacity: 1,
      position: "absolute",
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let updated = data.map((item) => {
        const delta = getRandomDelta(item.price);
        const newPrice = parseFloat((item.price + delta).toFixed(2));
        const percentChange = ((newPrice - item.price) / item.price) * 100;

        return {
          ...item,
          prevPrice: item.price,
          price: newPrice,
          delta: parseFloat(percentChange.toFixed(2)),
        };
      });
      updated = shuffleRanks(updated);
      setData(updated);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage > currentPage) {
      setDirection("next");
    } else {
      setDirection("prev");
    }

    setCurrentPage(newPage);
    router.push(`?page=${newPage}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handelNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!draggingRef.current || startX === null) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    setDragX(deltaX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;
    if (delta > 50 && currentPage > 1) {
      const newPage = currentPage - 1;
      setDirection("prev");
      setCurrentPage(newPage);
      router.push(`?page=${newPage}`);
    } else if (delta < -50 && currentPage < totalPages) {
      const newPage = currentPage + 1;
      setDirection("next");
      setCurrentPage(newPage);
      router.push(`?page=${newPage}`);
    }
    setDragX(0);
    setStartX(null);
  };

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = [...data]
    .sort((a, b) => a.rank - b.rank)
    .slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="relative w-[350] h-[350] overflow-visible mx-auto">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate={{
            x: dragX === 0 ? 0 : dragX,
            opacity: 1,
            position: "relative",
          }}
          exit="exit"
          transition={{ duration: dragX === 0 ? 0.6 : 0, ease: "easeInOut" }}
          onTouchStart={showControls ? handleTouchStart : undefined}
          onTouchMove={showControls ? handleTouchMove : undefined}
          onTouchEnd={showControls ? handleTouchEnd : undefined}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-[#12131C] border border-[#292A32] rounded-xl p-6"
            // onTouchStart={showControls ? handleTouchStart : undefined}
            // onTouchEnd={showControls ? handleTouchEnd : undefined}
          >
            <div className="flex items-center gap-1 w-[80] mb-4 p-1 rounded-2xl bg-[#0B0C14] text-[#ABA8FF] text-sm">
              <PiFireSimple />
              <p>Hot List</p>
            </div>
            {currentItems.map((item) => (
              <div className="flex justify-between mb-4" key={item.id}>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <p className="text-sm text-[#D1D1D3]">{item.name}</p>
                  <span className="text-xs text-[#83848D]">({item.pair})</span>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[#D1D1D3] text-sm">{item.price}</p>
                  <span
                    className={`text-xs ${
                      item.delta > 0 ? "text-[#0FB495]" : "text-[#B93056]"
                    }`}
                  >
                    {item.delta > 0 ? `+${item.delta} %` : `${item.delta} %`}
                  </span>
                </div>
              </div>
            ))}
            {showControls && (
              <>
                <div
                  onClick={handlePrev}
                  aria-disabled={currentPage === 1}
                  className={`absolute top-1/2 left-[-12] bg-[#76777C] rounded-full w-6 h-6 flex justify-center items-center ${
                    currentPage === 1 && "opacity-35"
                  }`}
                >
                  <MdKeyboardArrowLeft />
                </div>
                <div
                  onClick={handelNext}
                  aria-disabled={currentPage === totalPages}
                  className={`absolute top-1/2 right-[-12] bg-[#76777C] rounded-full w-6 h-6 flex justify-center items-center ${
                    currentPage === totalPages && "opacity-35"
                  }`}
                >
                  <MdKeyboardArrowRight />
                </div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}