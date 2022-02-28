import React from "react";

function FilterButtons({ filterSortReceipts }) {
  const handleClick = (e) => {
    filterSortReceipts(e.target.id);
  };

  return (
    <div className="filter-buttons">
      Filter/Sort: &nbsp;
      <button id="paid" onClick={handleClick}>
        Paid
      </button>
      <button id="unpaid" onClick={handleClick}>
        Not Paid
      </button>
      <button id="all" onClick={handleClick}>
        Show All
      </button>
      <button id="alphabet" onClick={handleClick}>
        By Customer Name
      </button>
    </div>
  );
}

export default FilterButtons;
