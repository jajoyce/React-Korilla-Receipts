import React, { useState } from "react";
import "./styles.css";
import receiptsData from "./receiptData";
import SearchForm from "./components/SearchForm";
import Receipts from "./components/Receipts";
import NewReceiptForm from "./components/NewReceiptForm";

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

  const addReceipt = (newReceipt) => {
    setReceipts((receipts) => [...receipts, newReceipt]);
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <SearchForm search={searchReceipts} />
      <Receipts receipts={receipts} />
      <NewReceiptForm addReceipt={addReceipt} />
    </div>
  );
}
