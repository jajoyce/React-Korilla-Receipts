import React from "react";

function FilterButtons({ filterReceipts }) {
  const handleClick = (e) => {
    filterReceipts(e.target.id);
  };

  return (
    <div className="filter-buttons">
      Filter Receipts: &nbsp;
      <button id="paid" onClick={handleClick}>
        Paid
      </button>
      <button id="unpaid" onClick={handleClick}>
        Not Paid
      </button>
      <button id="all" onClick={handleClick}>
        Show All
      </button>
    </div>
  );
}

export default FilterButtons;
