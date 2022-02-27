import React, { useState } from "react";
import "./styles.css";
import receiptsData from "./receiptData";
import Form from "./components/Form";
import Receipts from "./components/Receipts";

export default function App() {
  const [receipts, setReceipts] = useState(receiptsData);

  const searchReceipts = (searchTerm) => {
    if (searchTerm === "") {
      setReceipts(receiptsData);
    } else {
      setReceipts(
        receiptsData.filter((receipt) =>
          receipt.person.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form search={searchReceipts} />
      <Receipts receipts={receipts} />
    </div>
  );
}
