import { useState, useRef, useEffect } from "react";

type TabSelectorProps = {
  tabs: string[];
  onChange?: (index: number) => void;
};

export default function TabSelector({ tabs, onChange }: TabSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const activeTab = container.children[activeIndex] as HTMLElement;
      setUnderlineStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [activeIndex, tabs]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className="relative w-full mt-2">
      <div
        ref={containerRef}
        className="flex space-x-6 text-gray-600 font-medium"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`pb-2 ${
              index === activeIndex ? "text-black font-bold" : ""
            } cursor-pointer`}
            onClick={() => handleClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      />
    </div>
  );
}
