import React from "react";
import Receipt from "./Receipt";

function Receipts({ receipts }) {
  return receipts.map((receipt) => (
    <Receipt receipt={receipt} key={receipt.id} />
  ));
}

export default Receipts;
