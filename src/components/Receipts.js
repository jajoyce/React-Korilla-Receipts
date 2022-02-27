import React from "react";
import Receipt from "./Receipt";

function Receipts({ receipts }) {
  return (
    <div className="receipts-container">
      {receipts.map((receipt) => (
        <Receipt receipt={receipt} key={receipt.id} />
      ))}
    </div>
  );
}

export default Receipts;
