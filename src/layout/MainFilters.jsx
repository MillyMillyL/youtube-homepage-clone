import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const TRANSLATE_AMOUNT = 200;

function MainFilters({ categories, selectedCategory, setSelectedCategory }) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [translate, setTranslate] = useState(0);
  const filtersRef = useRef(null);
  const edge = filtersRef?.current?.scrollWidth;
  const width = filtersRef?.current?.clientWidth;

  useEffect(
    function () {
      if (filtersRef.current === null) return;

      const observer = new ResizeObserver((entries) => {
        const container = entries[0]?.target;

        if (container === null) return;
        setShowLeftButton(translate > 0);
        setShowRightButton(
          translate + container.clientWidth < container.scrollWidth
        );
      });

      observer.observe(filtersRef.current);

      return () => {
        observer.disconnect();
      };
    },
    [categories, translate, edge, width]
  );

  return (
    <div className="overflow-x-hidden relative  bg-white" ref={filtersRef}>
      <div
        className={`flex whitespace-nowrap gap-3 transition-transform w-[max-content]`}
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            as="NavLink"
            type="filter"
            className={`whitespace-nowrap ${
              selectedCategory === category ? "bg-gray-400" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {showLeftButton && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            type="round"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslte = translate - TRANSLATE_AMOUNT;
                if (newTranslte <= 0) return 0;
                return newTranslte;
              });
            }}
          >
            <BsChevronLeft />
          </Button>
        </div>
      )}
      {showRightButton && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            type="round"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (filtersRef.current === null) return translate;

                const newTranslte = translate + TRANSLATE_AMOUNT;

                if (newTranslte + width >= edge) {
                  return edge - width;
                }
                return newTranslte;
              });
            }}
          >
            <BsChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}

export default MainFilters;
