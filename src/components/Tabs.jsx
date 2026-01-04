import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photo", "video", "gif"];
  const activeTab = useSelector((s) => s.search.activeTab);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 px-12 pb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`
            px-7 py-2 rounded-xl capitalize
            transition-all duration-300
            ${
              activeTab === tab
                ? "bg-blue-600 scale-105 shadow-lg"
                : "bg-white/10 hover:bg-white/20"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}


export default Tabs;
