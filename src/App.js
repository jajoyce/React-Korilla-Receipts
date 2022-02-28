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
    const lastReceiptID = receipts[receipts.length - 1].id;
    newReceipt.id = lastReceiptID + 1;
    const newReceiptCopy = Object.assign({}, newReceipt);
    setReceipts((receipts) => [...receipts, newReceiptCopy]);
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <SearchForm search={searchReceipts} />
      <div className="receipts-container">
        <Receipts receipts={receipts} />
        <NewReceiptForm addReceipt={addReceipt} />
      </div>
    </div>
  );
}
