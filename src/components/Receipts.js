import React from "react";
import Receipt from "./Receipt";

function Receipts({ receipts }) {
  return receipts.map((receipt, index) => (
    <Receipt receipt={receipt} key={index} />
  ));
}

export default Receipts;
