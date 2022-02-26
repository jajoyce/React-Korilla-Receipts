import React, { useState } from "react";
import "./styles.css";
import receiptsArr from "./receiptData";

export default function App() {
  const [receipt, setReceipt] = useState(receiptsArr);
  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <h2>Customer 1: {receipt[0].person}</h2>
    </div>
  );
}
