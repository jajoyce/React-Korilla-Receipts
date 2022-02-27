import React from "react";
import Receipt from "./Receipt";

function Receipts({ receipts }) {
  return (
    <div className="receipts-container">
      {receipts.map((receipt, index) => (
        <Receipt receipt={receipt} key={index} />
      ))}
    </div>
  );
}

export default Receipts;
