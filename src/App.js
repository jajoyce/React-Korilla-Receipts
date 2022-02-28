import React, { useEffect, useState } from "react";
import "./styles.css";
import receiptsData from "./receiptData";
import SearchForm from "./components/SearchForm";
import Receipts from "./components/Receipts";
import NewReceiptForm from "./components/NewReceiptForm";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const [receipts, setReceipts] = useState(receiptsData);
  const [receiptsRendered, setReceiptsRendered] = useState(receipts);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setReceiptsRendered(receipts);
  }, [receipts, renderCount]);

  const searchReceipts = (searchTerm) => {
    if (searchTerm === "") {
      setReceiptsRendered(receipts);
    } else {
      setReceiptsRendered(
        receipts.filter((receipt) =>
          receipt.person.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const togglePaid = (receiptID) => {
    const index = receipts.findIndex((receipt) => receipt.id === receiptID);
    receipts[index].paid = !receipts[index].paid;
    setReceipts(receipts);
    setRenderCount(renderCount + 1);
  };

  const addReceipt = (newReceipt) => {
    const lastReceiptID = receipts[receipts.length - 1].id;
    newReceipt.id = lastReceiptID + 1;
    const newReceiptAssigned = Object.assign({}, newReceipt);
    setReceipts((receipts) => [...receipts, newReceiptAssigned]);
  };

  const filterReceipts = (filter) => {
    switch (filter) {
      case "all":
        setReceiptsRendered(receipts);
        break;
      case "paid":
        setReceiptsRendered(receipts.filter((receipt) => receipt.paid));
        break;
      case "unpaid":
        setReceiptsRendered(receipts.filter((receipt) => !receipt.paid));
        break;
      default:
        setReceiptsRendered(receipts);
    }
  };

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <SearchForm searchReceipts={searchReceipts} />
      <FilterButtons filterReceipts={filterReceipts} />
      <div className="receipts-container">
        <Receipts receipts={receiptsRendered} togglePaid={togglePaid} />
        <NewReceiptForm addReceipt={addReceipt} />
      </div>
    </div>
  );
}
