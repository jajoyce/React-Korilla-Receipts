import React from "react";
import Receipt from "./Receipt";

function Receipts({ receipts, togglePaid }) {
  return receipts.map((receipt, index) => (
    <Receipt receipt={receipt} key={index} togglePaid={togglePaid} />
  ));
}

export default Receipts;
