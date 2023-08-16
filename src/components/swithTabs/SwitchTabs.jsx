import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          <span key={index} className={`tabItem`}>
            {tab}
          </span>;
        })}
        <span className="movingBg" style={{ left: left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
