import { useState } from "react";

const TabNavigation = ({ setTab, activeContent }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setTab(tabIndex);
  };

  return (
    <div className="flex justify-center items-center py-6">
      <ul className="flex items-center rounded-full p-1 relative w-max">
        <div
          className={`${activeTab === 1 && "translate-x-0"} ${
            activeTab === 2 && "translate-x-[100%]"
          } bg-rose-500 absolute w-1/2 h-[85%] rounded-full transition-all duration-300 ease-in-out`}
        ></div>

        {["Featured", "Latest"].map((tab, index) => (
          <li
            key={index}
            className={`${
              activeTab === index + 1
                ? "text-white bg-rose-500"
                : "text-[#4a4a4a]"
            } px-6 py-2 text-lg font-semibold transition-colors duration-200 cursor-pointer rounded-full relative z-10`}
            onClick={() => handleTabClick(index + 1)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div
        className={`${
          activeTab === 1
            ? "opacity-100 scale-100 transition-all duration-700 ease-in"
            : "opacity-0 scale-95 transition-all duration-500 ease-out"
        } mt-4`}
      ></div>
    </div>
  );
};

export default TabNavigation;
