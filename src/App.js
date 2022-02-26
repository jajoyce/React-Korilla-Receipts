import React, { useState } from "react";
import "./styles.css";
import receiptsData from "./receiptData";
import Form from "./components/Form";
import Receipts from "./components/Receipts";

export default function App() {
  const [receipt, setReceipt] = useState(receiptsData);
  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form />
      <Receipts receipts={receiptsData} />
    </div>
  );
}
